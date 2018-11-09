﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace AttendanceTracker_Web.Models.DB
{
    public abstract class DataSource
    {
        public abstract Device AddDevice(Device device);
        public abstract Device UpdateDevice(Device device);
        public abstract Device GetDevice(long imei);
        public abstract void RemoveDevice(long imei);
        public abstract Student AddStudent(Student student);
        public abstract Student UpdateStudent(Student student);
        public abstract Student GetStudent(long cwid);
        public abstract void RemoveStudent(long cwid);
        public abstract Attendance CheckIn(Attendance attendance);
    }
}