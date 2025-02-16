import React, { useState } from 'react';


interface NavSectionProps {
    title: string;
    id: string;

}

const NavItems = [
    {
        // 01. Angola
        title: 'Angola',
        id: 'angola',
    },
    {
        title: 'Central African Republic',
        id: 'central-african-republic',
    },
    {
        title: 'Mozambique',
        id: 'mozambique',
    },
    {
        title: 'Rwanda',
        id: 'rwanda',
    },
    {
        title: 'South Africa',
        id: 'south-africa',
    },
];      
        // 02. Central African Republic 03. Mozambique 04. Rwanda 05. South Africa 06. South Sudan 07. Uganda

// const NavSection = () => {

const NavSection: React.FC<NavSectionProps> = () => {
    // const [navSection, setNavSection] = useState<NavSectionProps[]>([]);

    const [navSection, setNavSection] = useState<NavSectionProps>({
        title: '',
        id: '',
    });


    const handleNavSection = (navSection: NavSectionProps) => {

        setNavSection(navSection);
        const element = document.getElementById(navSection.id);
        element?.scrollIntoView({ behavior: 'smooth' });
    };



    // const { id } = navSection;
    return (
        <div>
            {/* create a number Nav bar Section */}
            {/* when the navbar item is clicked the page scrolls to the section */} 
            {/* when the navbar item is clicked the page scrolls to the section */}

            <div className="hidden md:flex flex-row justify-start items-center  gap-8 pb-6 pl-2">
                {NavItems.map((navSection, idx) => {
                    return (
                        <div
                            key={idx}
                            className="flex flex-col justify-center items-center gap-2"
                        >
                            <ol
                                className="flex  justify-center items-center gap-2"
                                onClick={() => handleNavSection(navSection)}
                            >
                               
                                <li
                                    className="flex hover:cursor-pointer hover:text-tblack/70 text-tblack justify-center items-center gap-2"
                                >
                                     <span className="p-0 m-0">
                                    {idx + 1}.
                                </span>
                                    {navSection.title}
                                </li>

                                    </ol>
                                </div>
                            );
                        })}
                    </div>

                   
                </div>        



    );
}

export default NavSection;