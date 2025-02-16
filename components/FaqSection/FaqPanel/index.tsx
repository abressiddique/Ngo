import { motion } from 'framer-motion'
import { ReactNode, useState } from 'react'
import { FiChevronDown } from 'react-icons/fi'
import { FaTimes } from 'react-icons/fa'
import { BsChat } from 'react-icons/bs'
interface FaqPanelProps {
  children?: ReactNode
  title: string
  content: string
  index: number
}

export const FaqPanel: React.FC<FaqPanelProps> = ({
  title,
  content,
  index,
}) => {  
  const [showAnswer, setShowAnswer] = useState(false)
  return (
    <motion.div
      initial={{ x: '-100%' }}
      animate={{ x: 0 }}
      transition={{ duration: 0.3 * index }}
      className={`mx-auto my-[20px] overflow-hidden border-t-[0.2px] border-[#9fa4a8]/50 bg-transparent py-[20px] px-[15px] transition duration-[0.3] ease-in ${
        showAnswer === true
          ? "after:content-[' 075'] relative bg-base shadow-[0_3px_6px_rgba(0,0,0,0.3),0_3px_6px_rgba(0,0,0,0.1)]"
          : 'bg-transparent'
      }`}
    >
      {showAnswer && (
        <>
          {/* <div className="absolute top-0 -left-5 -rotate-[90deg] transform">
            <BsChat size={110} color="#2ecc71" opacity={0.2} />
          </div> */}
          <div className="absolute top-6 left-8">
            <BsChat size={110} color="#2ecc71" opacity={0.2} />
          </div>
        </>
      )}

      <div className="flex items-center  text-nblack justify-start w-full ">
      <button
          className={`${
            showAnswer === true ? 'flex items-center justify-center' : ' bg-transparent'
          } flex h-[30px] w-[30px] items-center justify-center rounded-full`}
          onClick={() => setShowAnswer(!showAnswer)}
        >
          {showAnswer === true ? (
            // minus
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            className="w-6 h-6">
            <path strokeLinecap="round" stroke-linejoin="round" d="M6 18h12" />
          </svg>

            
       

          ) : (

            // <FiChevronDown size={25} />
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" 
            className="w-6 h-6">
            <path strokeLinecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
          </svg>
          )}
        </button>

        <h3 className="">{title}</h3>
      
      </div>

      <p
        className={`pt-3 text-nblack font-bold text-justify ${showAnswer && ' !block'} hidden`}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </motion.div>
  )
}