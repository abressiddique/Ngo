/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import ClientLayout from "@/layout/Client";
import Image from 'next/image';
import { Title } from "@/components/Shared/Title/title";
import TimelineView from '@/components/TimelineView';

import { GoCalendar } from 'react-icons/go'
import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component"
  
import timelineElements from '@/data';

  import "react-vertical-timeline-component/style.min.css"


const timelineItemsList = [
    {
      id: 'c6aad2fb-7673-45cf-9606-a335acc0cf4b',
      categoryId: 'COURSE',
      title: '10 DECEMBER 2020',
      courseTitle: 'Static Website',
      description:
        'Build your own personal portfolio website and a website to host conferences and events.  Publish your website and share it with your friends, family and beyond.',
      duration: '10 days',
      tagsList: [
        {
          id: 'c31b2ad8-f766-11eb-9a03-0242ac130003',
          name: 'HTML Elements',
        },
        {
          id: 'c31b2d08-f766-11eb-9a03-0242ac130003',
          name: 'Class Attribute',
        },
        {
          id: 'c31b2dee-f766-11eb-9a03-0242ac130003',
          name: 'Text Properties',
        },
        {
          id: 'c31b2eb6-f766-11eb-9a03-0242ac130003',
          name: 'Bootstrap',
        },
        {
          id: 'c31b2f6a-f766-11eb-9a03-0242ac130003',
          name: 'Box Properties',
        },
        {
          id: 'c31b347e-f766-11eb-9a03-0242ac130003',
          name: 'Layout',
        },
        {
          id: 'c31b358c-f766-11eb-9a03-0242ac130003',
          name: 'Flexbox',
        },
      ],
    },
    {
      id: 'a19d93d6-bdac-479e-b554-974ef9e6e66c',
      categoryId: 'PROJECT',
      title: '21 DECEMBER 2020',
      projectTitle: 'Tourism Website',
      description:
        'A tourism website enables the user to browse through the images of popular destinations.',
      imageUrl: 'https://www.forafrika.org/wp-content/uploads/2022/08/Afrika-Thrive.jpg',
      duration: '1 hr',
      projectUrl: 'https://tourismapp.ccbp.tech/',
    },
    {
      id: '40b82899-fdf7-4a3e-a43a-41a9917b4582',
      categoryId: 'COURSE',
      title: '5 JANUARY 2021',
      courseTitle: 'Responsive Website',
      description:
        'Build a responsive website that appears beautifully on the screen of any size. Develop a personal portfolio website, an E-commerce product listing website and a website to host conferences and events.',
      duration: '12 days',
      tagsList: [
        {
          id: '551e2b7e-f767-11eb-9a03-0242ac130003',
          name: 'Responsive Web Design',
        },
        {
          id: '551e2de0-f767-11eb-9a03-0242ac130003',
          name: 'Multiple Layouts',
        },
        {
          id: '551e3114-f767-11eb-9a03-0242ac130003',
          name: 'Column Wrapping',
        },
        {
          id: '551e31e6-f767-11eb-9a03-0242ac130003',
          name: 'Navbar',
        },
        {
          id: '551e32a4-f767-11eb-9a03-0242ac130003',
          name: 'Designing Layouts',
        },
        {
          id: '551e334e-f767-11eb-9a03-0242ac130003',
          name: 'Inheritance',
        },
        {
          id: '551e3402-f767-11eb-9a03-0242ac130003',
          name: 'CSS Gradients',
        },
      ],
    },
];

const Stories = () => {
  let GoCalendarSS = { background: "#fcbb52" }
  let GoCalendarS = { background: "#00b7ec" }

    return (
        <ClientLayout >
        <section className="w-screen bg-slate-100  md:px-3 xl:px-6">
        <div className="w-full max-w-5xl lg:max-w-[1100px] mx-auto px-2 lg:px-6 lg:py-12 ">
                <div className="flex w-full justify-start items-center">
                    <Title title="Voices of Africa"
                    padding="py-20" 
                    paragraph="Hear from those who are working together for Africa to thrive. Every one of them - a story worth sharing."
                    />
                </div>
            </div>

            <div className="w-full max-w-5xl h-[700px] lg:max-w-6xl px-3 lg:px-6 py-16 lg:py-28 relative mx-auto">
                <Image
                    src="https://www.forafrika.org/wp-content/uploads/2022/04/Humanitarian-Logistics.jpg"
                    layout="fill"
                    className="rounded-xl"
                    alt=""
                    />

                    </div>
{/* text center section  */}
<div className="w-full max-w-4xl lg:max-w-5xl px-2 lg:px-6 py-16 lg:py-28 relative mx-auto">
                    <div className="mx-auto text-center lg:mx-0 lg:flex-auto">
            <h5
                // font-family: "Söhne Leicht", Helvetica, Arial, sans-serif;
            className="text-4xl font-extralight  leading-[50px] tracking-wider text-[#262533] sm:text-4xl">
                    Our time in the field gives us a personal view on what it's like to get a meal at school each day. The mothers, children and communities that we’ve met inspire our ideas and, often times, solutions. Every one of them has a story worth sharing.
          
            </h5>
            </div>
            </div>

            <section 
            className='w-full h-full'>
         
              {/* <TimelineView timelineItemsList={timelineItemsList} /> */}

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
              dateClassName="text-[262633] text-sm font-semibold"
              iconStyle={isWorkIcon ? GoCalendarSS : GoCalendarS}
              icon={isWorkIcon ? <GoCalendar /> : <GoCalendar />}
              className='bg-[#F9F9F9]'
            >
              <div className='flex justify-between items-center py-1 flex-col h-[400px]'>
              <h3 className=" text-xl p-0 m-0 w-full ">
                {element.title}
              </h3>
           
              <p className='-mt-2 mb-2 pb-6 w-full  text-[#262633]'>
                {element.description}</p>

              {showButton && (
                <a
                  className={`button ${
                    isWorkIcon ? "workButton" : "workButton"
                  }
`}
                  href="/"
                >
                  {element.buttonText}
                </a>
              )}
</div>
        </VerticalTimelineElement>
          )
        })}
      </VerticalTimeline>
            </section>
                    
        </section>
        </ClientLayout>
    );
}

export default Stories;