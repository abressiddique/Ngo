/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useEffect, useState} from 'react';
// import { NavLink } from 'react-router-dom';
import Link from 'next/link';
import  {useRouter} from 'next/router'


// import data
import { nav } from '../../data';

const Nav = () => {
  const router = useRouter()
  const [showLinks, setShowLinks] = useState(false)


  const handleNavClick = async (link: string) => {
    await router.push(`/${link}`)
    setShowLinks(false)
    const el = document.getElementById(link)
    el?.scrollIntoView({ behavior: 'smooth' })
  }
  // controlling navbar hover elements to show popup
  const [hovered, setHovered] = useState<string | null>(null)

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // scroll event
    window.addEventListener('scroll', () => {
      window.scrollY > 80 ? setIsActive(true) : setIsActive(false);
    });
  });
  return (
    <nav className='hidden lg:flex'>
      <ul

       className='flex gap-x-8 text-white'>
        {nav.map((item, idx) => {
          return (
            <li key={idx}
            
            onMouseEnter={() => setHovered(item.title)}
            onMouseLeave={() => setHovered(null)}
            >
              <Link href={item.link} 
              // className='hover:text-primary-200 transition'
              className={`text-tblack hover:text-accenty/100 transition duration-500 ease-out`}
              >
                {item.title}
              </Link>

              {hovered == item.title && item.additionalLinks && (
                        <div className="absolute flex flex-col -ml-8 mt-3 items-center justify-center bg-white rounded-md ">
                          <div className="flex flex-col items-center justify-center text-tblack truncate ">
                            {item.additionalLinks.map((adLink) => {
                              return (
                                <button
                                  onClick={() => router.push(adLink.link)}
                                  className="w-full pt-2 pb-2 pl-4 pr-4 text-sm opacity-100 semibold md:text-md hover:bg-black hover:text-white "
                                  key={adLink.title}
                                >
                                  <div className="mr-8">{adLink.title}</div>
                                </button>
                              )
                            })}
                          </div>
                        </div>
                      )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
