import React, { useState } from "react";
import { scheduleData } from "@/data/dummy";
import { Header } from "@/Components";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";




const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar);

export default function Calender() {
    const myEventsList = [
        {
          title: 'My event',
          start: new Date(2023, 2, 2),
          end: new Date(2023, 2, 3),
        },
        {
          title: 'My other event',
          start: new Date(2023, 2, 7),
          end: new Date(2023, 2, 10),
        },
        {
            title: 'My third event',
            start: new Date(2023, 2, 9),
            end: new Date(2023, 2, 12),
          },
          {
            title: 'My fourth event',
            start: new Date(2023, 3, 7),
            end: new Date(2023, 3, 10),
          },
          {
            title: 'My fifth event',
            start: new Date(2023, 2, 6),
            end: new Date(2023, 2, 12),
          },
          {
            title: 'My sixth event',
            start: new Date(2023, 2, 12),
            end: new Date(2023, 2, 15),
          },
      ];
    
   
    
     const  onEventDrop = (data) => {
        console.log(data);
      };
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-xl">
      <Header category="App" title="Calender" />

      <div>
      <div className="App">
        <DnDCalendar
          defaultDate={moment().toDate()}
          defaultView="month"
          events={myEventsList}
          localizer={localizer}
          onEventDrop={onEventDrop}
        
          resizable
          style={{ height: "60vh" }}
        />
      </div>
      </div>
    </div>
  )
}
