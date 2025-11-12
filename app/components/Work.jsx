import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Work = (isDarkMode) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }} 
      transition={{ duration: 1 }}
      id="work" 
      /* removed top padding for mobile stacking */
      className="w-full px-4 lg:px-[10%] pt-2 pb-10 scroll-mt-10"
    >
      {/* ---- Headings ---- */}
      <motion.h4 
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }} 
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-1 text-base font-Ovo"
      >
        My Portfolio
      </motion.h4>
      
      <motion.h2 
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }} 
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center text-3xl sm:text-4xl lg:text-5xl font-Ovo leading-tight"
      >
        My Latest Work
      </motion.h2>
    
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }} 
        transition={{ duration: 0.7, delay: 0.4 }}
        /* minimal margin so content appears close below title */
        className="text-center max-w-2xl mx-auto mt-2 mb-6 text-sm sm:text-base font-Ovo leading-relaxed"
      >
        These are my collection of projects that showcase my technical skills, problem-solving abilities, and creativity. 
        From software development to data-driven solutions, each project reflects my passion for building efficient and impactful applications.
      </motion.p>

      {/* ---- Projects Grid ---- */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }} 
        transition={{ duration: 0.8, delay: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mt-4"
      >
        {workData.map((project, index) => (
          <motion.div 
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            key={index}
            /* fully transparent background, no box outline */
            className="aspect-[4/3] rounded-lg relative cursor-pointer group bg-transparent"
          >
            {/* Inner White Box only */}
            <div className="bg-white w-11/12 sm:w-10/12 rounded-md absolute bottom-4 left-1/2 -translate-x-1/2 py-3 px-4 flex items-center justify-between duration-300 group-hover:bottom-6 shadow-md">
              <div>
                <h2 className="font-semibold text-sm sm:text-base">{project.title}</h2>
                <p className="text-xs sm:text-sm text-gray-700">{project.description}</p>
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="border rounded-full border-black w-8 sm:w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition"
              >
                <Image src={assets.send_icon} alt="send icon" className="w-4 sm:w-5" />
              </a> 
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Work
