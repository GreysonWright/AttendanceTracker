﻿angular.module("QRCodesModule", [])
    .controller("QRCodesController", function ($scope, $http) {
        var qrCodesController = this;

        qrCodesController.qrCodeData = [];
        qrCodesController.classData = [];
        qrCodesController.dialog = document.querySelector('dialog');
        qrCodesController.showDialogButton = document.querySelector('#show-dialog');

        qrCodesController.$onInit = function () {
            qrCodesController.getQRCodes();
            qrCodesController.getClasses();
        };

        qrCodesController.getQRCodes = function () {
            $http.get("/Home/GetActiveQRCodes").then(
                function (response) {
                    qrCodesController.qrCodeData = response.data;
                },
                function (error) {
                    console.log(error);
                }
            );
        };

        qrCodesController.getClasses = function () {
            $http.get("/Home/GetClasses").then(
                function (response) {
                    qrCodesController.classData = response.data;
                },
                function (error) {
                    console.log(error);
                }
            );
        };

        if (!qrCodesController.dialog.showModal) {
            dialogPolyfill.registerDialog(qrCodesController.qrCodesController.dialog);
        }

        qrCodesController.addModalButtonClicked = function () {
            var classSelectText = $("#class-select").val();
            if (classSelectText == "") {
                return qrCodesController.showToast("Please select a class");
            }

            var classID = qrCodesController.classData.find(function (element) {
                return element.Name == classSelectText;
            }).ID;

            var config = { params: { classID: classID, expiresIn: 10000 } };
            $http.post("/Home/AddQRCode", null, config).then(
                function (response) {
                    if (response.status = 200) {
                        qrCodesController.getQRCodes();
                        qrCodesController.dialog.close();
                        qrCodesController.showToast("QR code created");
                    } else {
                        qrCodesController.showToast("Failed to create QR code");
                    }
                },
                function (error) {
                    console.log(error);
                    qrCodesController.showToast("Failed to create QR code");
                }
            );
        };

        qrCodesController.addQRCodeButtonClicked = function () {
            qrCodesController.dialog.showModal();
        };

        qrCodesController.showToast = function (message) {
            var snackbarContainer = document.querySelector('#toast-container');
            'use strict';
            var data = { message: message };
            snackbarContainer.MaterialSnackbar.showSnackbar(data);
        };
    });
