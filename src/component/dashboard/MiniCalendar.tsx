"use client";  // ถ้าใช้ Next.js 13+ app directory และต้องการ client-side component

import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";   // ใส่ CSS ของ react-calendar
import "./MiniCalendar.css";          // ใส่ CSS ที่เราสร้างเอง

const MiniCalendar = () => {
  const [date, setDate] = useState<Date>(new Date());

  const onChange = (value: Date | Date[] | null) => {
    if (value && !(value instanceof Array)) {
      setDate(value);
    }
  };

  return (
    <div className="flex items-center justify-center max-w-sm mx-auto mt-4  bg-white ">
      <Calendar
        // onChange={onChange}
        value={date}
        calendarType="gregory"
        nextLabel="›"
        prevLabel="‹"
        formatShortWeekday={(locale, date) =>
          ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"][date.getDay()]
        }
        tileClassName={({ date }) => (date.getDay() === 0 ? "text-red-500" : "")}
      />
    </div>
  );
};

export default MiniCalendar;
