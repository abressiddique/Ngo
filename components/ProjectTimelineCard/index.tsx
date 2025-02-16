/* eslint-disable react/jsx-no-undef */
// Write your code here
import {AiFillCalendar} from 'react-icons/ai'

import {
  ProjectCardContainer,
  ProjectImage,
  ProjectTitleAndDurationContainer,
  ProjectTitle,
  DurationContainer,
  Duration,
  ProjectDescription,
  VisitLink,
} from './styledComponents'

import Image from 'next/image'

const ProjectTimelineCard = (props: { projectDetails: any }) => {
  const {projectDetails} = props
  const {
    imageUrl,
    projectTitle,
    description,
    projectUrl,
    duration,
  } = projectDetails

  return (
    <div className='w-full h-full my-2'>
      <Image
        className="w-full h-full"
       src={imageUrl} alt="project" 
        width={400} height={300}
       />
      <div 
      className='flex flex-col justify-between  items-start w-full md:flex-row md:items-center'
    >
        <h1  className='text-base font-bold font-mono text-[#171f46] md:text-2xl m-0'
       
        >{projectTitle}</h1>
        <div
        className='flex justify-center items-center'
        >
          <AiFillCalendar color="#171f46" />
          <p    className='text-base font-semibold font-mono ml-1 text-[#171f46] md:text-lg'
        >{duration}</p>
        </div>
      </div>
      <p    className='text-[#1e293b] font-mono font-normal text-sm md:text-base mt-0'
      >{description}</p>
      <a   className='text-[#0967d2] no-underline text-center font-mono  font-semibold text-sm md:text-base mt-[5px]'
       href={projectUrl}>Visit</a>
    </div>
  )
}

export default ProjectTimelineCard