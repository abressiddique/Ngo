// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'

import { Key } from 'react'

const CourseTimelineCard = (props: { courseDetails: any }) => {
  const {courseDetails} = props
  const {courseTitle, description, duration, tagsList} = courseDetails

  return (
    <>
      <div 
      className=' flex flex-col justify-between items-start w-full md:flex-row md:items-center'>
        <h1  className='text-base font-bold text-[#171f46] md:text-2xl m-0  '
        >{courseTitle}</h1>
        <div className=' flex justify-center items-center'>
          <AiFillClockCircle color="#171f46" />
          <p
          className='text-base font-semibold font-mono ml-1 text-[#171f46] md:text-xl'
          >{duration}</p>
        </div>
      </div>


      <p className=' text-[#1e293b] font-mono font-normal text-sm md:text-base mt-0'
      >{description}</p>
      <ul className='flex flex-wrap items-center p-0 m-0'>
        {tagsList.map((eachTag: { id: Key | null | undefined; name: any }) => (
          <li className='list-none' key={eachTag.id}>
            <p  className='text-[#25262c] bg-[#e2e8f0] py-1 px-2 mb-2 mr-2 font-mono font-medium md:font-semibold text-xs leading-7  md:text-[12px] rounded-[4px] p-1 m-1'
            >{eachTag.name}</p>
          </li>
        ))}
      </ul>
    </>
  )
}

export default CourseTimelineCard
