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
      /* removed min-h-screen so content doesn't get pushed down */
      className="w-full px-6 lg:px-[12%] py-10 scroll-mt-20"
    >
      {/* ---- Headings ---- */}
      <motion.h4 
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }} 
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        My Portfolio
      </motion.h4>
      
      <motion.h2 
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }} 
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center text-5xl font-Ovo"
      >
        My Latest Work
      </motion.h2>
    
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }} 
        transition={{ duration: 0.7, delay: 0.5 }}
        /* slightly smaller bottom margin so grid comes up closer */
        className="text-center max-w-2xl mx-auto mt-5 mb-8 font-Ovo"
      >
        These are my collection of projects that showcase my technical skills, problem-solving abilities, and creativity. 
        From software development to data-driven solutions, each project reflects my passion for building efficient and impactful applications.
      </motion.p>

      {/* ---- Projects Grid ---- */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }} 
        transition={{ duration: 1, delay: 0.3 }}
        /* grid directly follows intro — adjust columns for responsive layout */
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {workData.map((project, index) => (
          <motion.div 
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.35 }}
            key={index}
            /* outer card transparent so only inner white box shows */
            className="aspect-[4/3] rounded-lg relative cursor-pointer group bg-transparent"
          >
            {/* Inner White Box only visible element */}
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7 shadow-md">
              <div>
                <h2 className="font-semibold">{project.title}</h2>
                <p className="text-sm text-gray-700">{project.description}</p>
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition"
              >
                <Image src={assets.send_icon} alt="send icon" className="w-5" />
              </a> 
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Work
