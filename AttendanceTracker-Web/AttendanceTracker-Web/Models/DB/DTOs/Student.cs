﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using AttendanceTracker_Web.Models.DB.Mapper;

namespace AttendanceTracker_Web.Models.DB
{
    public class Student: DBMappable
    {
        public long CWID { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }

        public override void MapProperties(DBPropertyMap map)
        {
            CWID = map.Get<long>("cwid");
            FirstName = map.Get<string>("first_name");
            LastName = map.Get<string>("last_name");
            Email = map.Get<string>("email");
        }
    }
}