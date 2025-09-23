import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"


const Services = () => {
  return (
    <motion.div 
    initial={{opacity: 0}}
    whileInView={{opacity: 1}} 
    transition={{duration: 1}}
    id="services" className='w-full px-[12%] py-10 min-h-screen scroll-mt-20'>
      <motion.h4 
      initial={{y: -20, opacity: 0}}
      whileInView={{y: 0,opacity: 1}} 
      transition={{duration: 0.5, delay: 0.3}}
      className='text-center mb-2 text-lg font-Ovo'>My Learning Journey</motion.h4>
      <motion.h2 
      initial={{y: -20, opacity: 0}}
      whileInView={{y: 0,opacity: 1}} 
      transition={{duration: 0.5, delay: 0.4}}
      className='text-center text-5xl font-Ovo'>My Certifications</motion.h2>
      
      <motion.p 
      initial={{opacity: 0}}
      whileInView={{opacity: 1}} 
      transition={{delay: 0.7, duration: 0.5}}
      className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
        These certifications reflect my continuous learning, hands-on project experience, and commitment to mastering industry-relevant tools and technologies.
      </motion.p>
      <motion.div 
      initial={{opacity: 0}}
      whileInView={{opacity: 1}} 
      transition={{duration: 1, delay: 0.6}}
      className='grid grid-cols-auto gap-6 my-10'>
        {serviceData.map(({icon, title, description, link}, index)=>(
            <motion.div 
            whileHover={{scale: 1.05}}
            key={index}
            className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white'>
                <Image src={icon} alt='' className='w-10' />
                <h3 className='text-lg my-4 text-gray-700 dark:text-white'>{title}</h3>
                <div className='text-sm text-gray-600 leading-5 dark:text-white/80'>
                  {description.split('|').map((line, idx) => (
                    <p key={idx} className="mb-1">{line.trim()}</p>
                  ))}
                </div>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 text-sm mt-5 font-semibold text-gray-800 dark:text-white/80 hover:text-blue-600 dark:hover:text-yellow-300 hover:underline transition-colors duration-300"
                >
                  Certificate 
                  <Image alt='' src={assets.right_arrow} className="w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>

            </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Services

