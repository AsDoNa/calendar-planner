import { React } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import multiMonthPlugin from "@fullcalendar/multimonth";

const MyCalendar2 = () => {
  return (
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin, listPlugin, multiMonthPlugin]}
      initialView="timeGridWeek"
      events={[
        { title: "Event #1", start: "2025-06-19" },
        { title: "Event #2", start: "2025-06-19", end: "2025-06-21" },
        { title: "Event #3", start: "2025-06-19T12:00:00", allDay: false },
      ]}
      views={{
        multiWeek2: {
          type: "dayGrid",
          duration: { weeks: 2 },
          titleFormat: { start: "numeric", end: "numeric" },
          columnHeaderFormat: { weekday: "long" },
          buttonText: "Fortnight",
        },
      }}
      headerToolbar={{
        left: "prev, next",
        center: "title",
        right: "timeGridDay, timeGridWeek, listWeek, multiWeek2",
      }}
    />
  );
};

export default MyCalendar2;
