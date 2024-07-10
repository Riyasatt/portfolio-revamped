import Link from 'next/link'
import React from 'react'

export const projects = [
  {
    id:1,
    'groupTitle' : "FRONTEND",
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
  },
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
      },
    ]
  }
]

const page = () => {
  return (
    <div className='min-h-screen  mt-60'>
      {projects.map((group,index)=>{
        return (
          <div key={index} className='animate-appearSideRide mb-20 '>
        <div className="animate-char-in mb-5 mx-5 animate-char-in-onReload text-3xl md:text-6xl lg:text-8xl font-extrabold ">
        {group.groupTitle} <span className="text-gradient  ">Projects</span>
        </div>
        {group.data.map((project,index)=>{
          return (
            <Link href={project.link} target='_blank'  key={index} className=' px-4 2xl:py-0 block overflow-hidden group border-b-2 border-accent2/10 cursor-pointer relative after:absolute after:w-full after:h-full after:top-0 after:left-0 after:bg-accent2  after:origin-bottom hover:after:origin-top after:-z-10 after:duration-500 after:transition-transform after:scale-y-0 hover:after:scale-y-100'>
              <div className='container md:flex items-center justify-between py-10'>
              <div className='text-3xl md:text-4xl lg:text-6xl font-extrabold '>
                {project.title}
                <div className='opacity-0 group-hover:opacity-100 text-lg  transition-all duration-500 text-fade'>
                    {project.message}
                </div>
              </div>
              <div className='  text-fade'>
                {project.description}
              </div>
              </div>
          
        </Link>
          )
        })}
        
      </div>
        )
      })}
      
      
      
    </div>
  )
}

export default page