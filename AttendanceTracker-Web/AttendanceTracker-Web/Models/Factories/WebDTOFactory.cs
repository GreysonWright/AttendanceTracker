﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using AttendanceTracker_Web.Models.DTOs.Web;

namespace AttendanceTracker_Web.Models.Factories
{
    public class WebDTOFactory
    {
        public RegisterDeviceRequest RegisterDeviceRequest(long imei, long studentID)
        {
            var dto = new RegisterDeviceRequest();
            dto.IMEI = imei;
            dto.StudentID = studentID;
            return dto;
        }

        public RegisterDeviceResponse RegisterDeviceResponse(long imei, long studentID)
        {
            var dto = new RegisterDeviceResponse();
            dto.IMEI = imei;
            dto.StudentID = studentID;
            return dto;
        }
    }
}