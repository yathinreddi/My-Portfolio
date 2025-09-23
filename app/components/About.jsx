import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion"

const About = ({ isDarkMode }) => {
  return (
    
    <motion.div 
      id='about' 
      className='w-full px-[12%] py-10 scroll-mt-20'
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }} 
      transition={{ duration: 1 }}
      
    >
      <motion.h4 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5, delay: 0.3 }}
        className='text-center mb-5 text-lg font-Ovo'
      >
        Introduction
      </motion.h4>

      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1 }} 
        transition={{ duration: 0.8 }}
        className='text-center text-5xl font-Ovo'
      >
        About me
      </motion.h2>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.5, delay: 0.3 }}
        className='flex w-full flex-col lg:flex-row items-center gap-20 my-10'
      >
        {/*  <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }} 
          transition={{ duration: 0.6, delay: 0.4 }}
          className='w-64 sm:w-80 rounded-3xl max-w-none -mt-10'
        >
          <Image src={assets.user_image} alt='user' className='w-full rounded-2xl' />
        </motion.div>  */}

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1}} 
          transition={{ duration: 0.6, delay: 0.4 }}
          className='flex-1'
        >
          <p className='mb-8 max-w font-Ovo '>
            I'm a Skilled software developer proficient in Java, Data Structures, and Algorithms. 
            Experienced in solving complex problems through competitive programming and projects. 
            A strategic thinker and creative, with interests in chess, guitar, and cricket. 
            Ready to contribute to a dynamic team and innovate as a developer.
          </p>

          {/* Blocks with Hover Tooltips */}
          <motion.ul 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }} 
            transition={{ duration: 0.8, delay: 0.5 }}
            className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w'
          >
            {infoList.map(({ icon, iconDark, title, description, moreInfo }, index) => (
              <motion.li 
                key={index} 
                className='border-[0.5px] border-gray-400 rounded-xl p-4 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:border-white hover:shadow-black dark:shadow-white dark:hover:bg-darkHover/50 group'
                whileHover={{ scale: 1.05 }}
              >
                <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-7 mt-3' />
                <h3 className='my-2 font-semibold text-gray-700 dark:text-white'>{title}</h3>
                <p className='text-gray-600 text-sm dark:text-white/80'>{description}</p>

                {/* Mini Window (Tooltip) - Visible on Hover */}
                <div
                  className=" absolute left-1/2 -translate-x-1/2 -top-28 
                              bg-blue-50 text-black 
                              dark:bg-white-200 dark:text-black 
                              p-4 rounded-xl shadow-lg w-72 text-base 
                              opacity-0 group-hover:opacity-100 
                              transition-opacity duration-300 "                
                >
                  {moreInfo.split('|').map((line, idx) => {
                    const trimmed = line.trim();
                    const isGradeLine = 
                    
                      trimmed.includes('Java') ||
                      trimmed.includes('CSS') ||
                      trimmed.includes('Data structures') ||

                      trimmed.includes('CGPA') || 
                      trimmed.includes('%');

                    return (
                      <p 
                        key={idx}
                        className={isGradeLine ? "text-gray-600" : ""}
                      >
                        {trimmed}
                      </p>
                    );
                  })}

                </div>
              </motion.li>
            ))}
          </motion.ul>

          {/* Tools Section */}
          <motion.h4 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }} 
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-6 mb-2 text-gray-800 font-Ovo dark:text-white/80"
          >
            Tools I Use:
          </motion.h4>

          <motion.ul 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }} 
          transition={{ duration: 0.8, delay: 0.6 }}
          className='flex items-center gap-3 sm:gap-5 relative mt-4'
        >
          {toolsData.map((tool, index) => (
            <motion.li 
              key={index}
              whileHover={{ scale: 1.1 }}
              className='relative group flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'
            >
              {/* Tool Icon */}
              <Image src={tool.icon} alt={tool.name} className='w-5 sm:w-7' />

              {/* Tooltip with light/dark mode styling */}
              <div className="
                absolute bottom-[120%] left-1/2 transform -translate-x-1/2 
                text-xs px-3 py-1 rounded whitespace-nowrap z-10 shadow-md
                bg-blue-100 text-black 
                dark:bg-blue-800 dark:text-black 
                opacity-0 group-hover:opacity-100 transition-opacity duration-300
              ">
                {tool.name}
              </div>
            </motion.li>
          ))}
        </motion.ul>

        </motion.div>
      </motion.div>
    </motion.div>

    
  )
}

export default About
