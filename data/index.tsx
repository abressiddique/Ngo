import Logow from '@/public/thirteen.svg';
import Logo from '@/public/next.svg';
// import Africa from '@/public/ForAfrika.svg'

export const header = {
    logo: Logo,
    btnSignupText: 'Get Started',
    logow: Logow,
  };

  export const nav = [
    {
      title: 'Where we work',
      link: '/where-we-work',
    },
    {
      title: 'Stories',
      link:"/stories",
    },
    {
      title: 'Our work',
      link: '/our-work',
      additionalLinks: [
        {
          title: 'Emergency Response',
          link: '/our-work/emergency-response',
        }, 
        {
          title: 'Food Scarcity and livelihoods',
          link: '/our-work/food-scarcity-and-livelihoods',
        },
        {
          title: 'Water, Sanitation and Hygiene',
          link: '/our-work/water-sanitation-and-hygiene',
        },
        {
          title: 'Education',
          link: '/our-work/education',
        },
      
        {
          title: 'Our Impact',
          link: '/our-work/our-impact',
        },
        {
          title: 'Our Approach',
          link: '/our-work/our-approach',
        },
      ]
    },
    {
      title: 'About us',
      link: '/about',
      additionalLinks: [
        {
          title: 'Our Story',
          link: '/our-story',
        },
        {
          title: 'Our brand',
          link: '/our-brand',
        },
        {
          title: 'Our Team',
          link: '/teams',
        },
        {
          title: 'Contact',
          link: '/contact', 
        },
        
      ]
    },  
];


let timelineElements = [
  {
    id: 1,
    title: "Finding our feet",
    location: "Dragontail, Ascana",
    description:
    'Peter Pretorius, a South African, was one of the first people to respond to the Mozambican government’s plea to the international community for urgent humanitarian relief during a famine that had placed nearly four million people at risk of starvation. He visited Pambarra Village near Vilankulo, Inhambane Province, to see how he could contribute in the emergency. Peter was meant to be on the ground for a day, but he was left there for 10 days with no food, water, or other supplies. He witnessed death, despair and deep poverty in that community. Up to 30 people died of starvation every day, leaving so many children orphaned.'     ,
    buttonText: "Learn More",
    date: "August 2016 - present",
    icon: "work",
  },
  {
    id: 2,
    title: "Learning the ropes",
    location: "Skystead, Craonia",
    description:
    "Creating better living conditions for children in need - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque sagittis tellus, non ultrices lacus tempus vel.",
    buttonText: "learn more",
    date: "June 2013 - August 2016",
    icon: "work",
  },
  {
    id: 3,
    title: "First Yes",
    location: "South Warren, Geshington",
    description:
      "Assessing the quality of specifications and technical design documents in order to ensure timely, relevant and meaningful feedback.",
    buttonText: "Company Website",
    date: "September 2011 - June 2013",
    icon: "work",
  },
 
  {
    id: 4,
    title: "Marble Hills Grammar School",
    location: "Dragontail, Ascana",
    description:
      "Highschool - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque sagittis tellus, non ultrices lacus tempus vel.",
    date: "2003 - 2007",
    icon: "school",
  },
]

export default timelineElements




