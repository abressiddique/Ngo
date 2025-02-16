/* eslint-disable @next/next/no-html-link-for-pages */
import React from 'react';

import ClientLayout from "@/layout/Client";

import { GoCalendar } from 'react-icons/go'
import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component"
  
import timelineElements from '@/data';

  import "react-vertical-timeline-component/style.min.css"

import { TimelineElement } from '@/types';

    // const Test = ( props : TimelineElement) => {
const Test = () => {
    let GoCalendarSS = { background: "#E5E5E5" }
    let GoCalendarS = { background: "#E5e5e5" }

    return (
        <ClientLayout>
     
      <VerticalTimeline>
      {timelineElements.map(element => {
    let isWorkIcon = element.icon === "work"
    let showButton =
    element.buttonText !== undefined &&
    element.buttonText !== null &&
    element.buttonText !== ""

          return (
            <VerticalTimelineElement
              key={element.id}
              date={element.date}
              dateClassName="date"
              iconStyle={isWorkIcon ? GoCalendarSS : GoCalendarS}
              icon={isWorkIcon ? <GoCalendar /> : <GoCalendar />}
              className=''
            >
              <h3 className=" text-xl w-full ">
                {element.title}
              </h3>
           
              <p className='-ml-8 w-full bg-green-600 text-[#262633]' id="description">
                {element.description}</p>

              {showButton && (
                <a
                  className={`button ${
                    isWorkIcon ? "workButton" : "schoolButton"
                  }
`}
                  href="/"
                >
                  {element.buttonText}
                </a>
              )}
        </VerticalTimelineElement>
          )
        })}
      </VerticalTimeline>
        </ClientLayout>
    );
    };

export default Test;