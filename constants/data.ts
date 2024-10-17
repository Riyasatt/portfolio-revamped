import {  AllSkills, navbarLinks, ProjectGroup, shortSkills } from "@/lib/types";


export const navLinks :Array<navbarLinks> =[
    {
        name: "Home",
        url:"/",
        key:1
    },{
        name: "Services",
        url:"/services",
        key:2
    },{
        name: "Projects",
        url:"/projects",
        key:3
    },{
        name: "About",
        url:"/about",
        key:4
    }
]

export const projects : Array<ProjectGroup> = [
    {
      id:1,
      groupTitle : "FRONTEND",
      data : [
        {
          id:1,
          title : 'Crypto Trackr',
          description : 'API Based application for real-time information of any cryptocurrency',
          message : "MODERN GAMBLING?",
          link: 'https://lustrous-crypto-trackr.netlify.app/',
          github: ''
        },{
          id:2,
          title : 'Portfolio',
          description : '',
          message : "NOT THE SAME ONE :)",
          link: 'https://riyasatali.vercel.app/',
          github: ''
        },
        {
          id:3,
          title : 'Portfolio AGAIN ✌️',
          description : '',
          message : "INFINITE LOOP?.. I GUESS",
          link: 'https://createwithriyasat.vercel.app',
          github: ''
        },
        {
          id:4,
          title : 'Blood Bridge',
          description : '',
          message : "",
          link: 'https://blood-bridge-rouge.vercel.app/',
          github: ''
        }
      ]
    },{
          id:5,
          title : 'Destion.in',
          description : 'Frontend for a company that hires talented designers making websites, mobile apps and cloud solutions',
          message : "DESTION.IN",
          link: 'https://destion-zhlc8jggb-riyasats-projects-cd93b726.vercel.app/',
          github: ''
        }
    {
      id:2,
      'groupTitle' : "FULLSTACK",
      data : [
        {
          id:1,
          title : 'Asli FeedBack ',
          description : 'Send Feedback to anyone anonymously',
          message : "TRUE FEEDBACK IS BITTER.. AGREE?",
          link: 'https://asli-feedback.vercel.app/',
          github: ''
        },{
          id:2,
          title : 'Form Genius',
          description : 'Create forms with the help of AI and integrate with Google Forms',
          message : "ONLY CODE.. DEPLOYING THIS NEEDS MONEY :(",
          link: 'https://github.com/Riyasatt/FormGenius',
          github: ''
        },{
          id:3,
          title : 'Flicker Chat App',
          description : 'A real time chat app, includes image and video sharing also',
          message : 'Includes Complex features like image and video sending',
           link : 'https://github.com/Riyasatt/Flicker-Chat-App',
          github: 'https://github.com/Riyasatt/Flicker-Chat-App'
        },{
          id:4,
          title : 'Chess.com',
          description : 'A clone of multi-player chess game chess.com using web socket',
          message : '',
           link : '',
          github: ''
        },
      ]
    }
  ]

  export const aboutServices :Array<shortSkills> = [
    {
      id : 1,
      name : 'FrontEnd Developer'
    },
    {
      id : 2,
      name : 'BackEnd Developer'
    },
    {
      id : 3,
      name : 'FullStack Developer'
    },
  ]

  export const backEndTechs :Array<shortSkills>= [
    {
      id: 1,
      name: "Node.js",
    },
    {
      id: 2,
      name: "Express.js",
    },
    {
      id: 3,
      name: "MongoDB",
    },
    {
      id: 4,
      name: "PostgreSQL",
    },
    
  ];

  export const frontEndTechs:Array<shortSkills> = [
    {
      id: 1,
      name: "ReactJS",
    },
    {
      id: 2,
      name: "NextJS",
    },
    {
      id: 3,
      name: "Tailwind",
    },
    {
      id: 4,
      name: "TypeScript",
    },
    
  ];

  export const fullstackTechs:Array<shortSkills> = [
    {
      id: 1,
      name: "NextJS",
    },
    {
      id: 2,
      name: "Tailwind",
    },
    {
      id: 3,
      name: "TypeScript",
    },
    {
      id: 4,
      name: "MongoDB",
    },
    
  ];

export const allSkills : Array<AllSkills> = [
    {
    id:1,
     groupTitle : "Frontend",
     data : [
        {
            id: 1,
            name : "REACTJS",
            progress : 80,
            prog : "w-[80%]"
        },{
            id: 2,
            name : "NEXTJS",
            progress : 80,
            prog : "w-[80%]"
        },{
            id: 3,
            name : "TAILWIND CSS",
            progress : 90,
            prog : "w-[90%]"
        },{
            id: 4,
            name : "SHADCN",
            progress : 80,
            prog : "w-[80%]"
        },
    ]

    },{
        id:2,
        groupTitle : "Backend",
        data : [
            {
                id: 1,
                name : "NODE.JS",
                progress : 70,
                prog : "w-[70%]"
            },{
                id: 2,
                name : "EXPRESS.JS",
                progress : 50,
                prog : "w-[50%]"
            },{
                id: 3,
                name : "MONGODB",
                progress : 75,
                prog : "w-[75%]"
            },{
                id: 4,
                name : "POSTGRESSQL",
                progress : 75,
                prog : "w-[75%]"
            },{
                id: 5,
                name : "WEBSOCKETS",
                progress : 30,
                prog : "w-[30%]"
            },
        ]
    },{
        id:3,
        groupTitle : "Languages",
        data : [
            {
                id: 1,
                name : "C",
                progress : 50,
                prog : "w-[50%]"
            },{
                id: 2,
                name : "C++",
                progress : 75,
                prog : "w-[75%]"
            },{
                id: 3,
                name : "JAVA",
                progress : 50,
                prog : "w-[50%]"
            },{
                id: 4,
                name : "PYTHON",
                progress : 50,
                prog : "w-[50%]"
            },
        ]
    },{
        id:4,
        groupTitle : "Basics",
        data : [
            {
                id: 1,
                name : "HTML 5",
                progress : 95,
                prog : "w-[95%]"
            },{
                id: 2,
                name : "CSS 3",
                progress : 85,
                prog : "w-[85%]"
            },{
                id: 3,
                name : "JAVASCRIPT",
                progress : 75,
                prog : "w-[75%]"
            },{
                id: 4,
                name : "TYPESCRIPT",
                progress : 75,
                prog : "w-[75%]"
            },
        ]
    },{
        id:4,
        groupTitle : "Others",
        data : [
            {
                id: 1,
                name : "UI/UX ",
                progress : 30,
                prog : "w-[30%]"
            },{
                id: 2,
                name : "PHOTOSHOP ",
                progress : 40,
                prog : "w-[40%]"
            },{
                id: 3,
                name : "VIDEO EDITING",
                progress : 30,
                prog : "w-[30%]"
            },
        ]
    }
]



    
