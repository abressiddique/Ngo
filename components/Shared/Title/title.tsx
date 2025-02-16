import { ReactNode } from 'react'

interface TitleProps {
  children?: ReactNode
  title: string
  paragraph?: string
  classes?: string
  padding?: string
}

export const Title: React.FC<TitleProps> = ({
  title,
paragraph,
  classes = '',
  padding
}) => {
  return (
    <div
    className={` w-full h-full text-[#262633] mx-2 inline-block box-border ${classes} ${padding}`}
    >

    <h1
      className={`w-full text-start text-base  font-normal md:text-xl`}
    >
      <span className=" inline-block pb-2 text-tblack ">
        {title}
      </span>
    </h1>
    <p
     className='text-start text-4xl leading-loose tracking-wider font-normal mb-5 md:text-5xl mt-1'>
        {paragraph}
    </p>

    </div>

  )
}
