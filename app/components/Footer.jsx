import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({isDarkMode}) => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
        <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt='' className='w-36 mx-auto mb-2' />

        <div className='w-max flex items-center gap-2 mx-auto'>
        <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='' className='w-6' />
        <a
            href="mailto:yathinbommineni@gmail.com"
            className='hover:underline'
          >
            yathinbommineni@gmail.com
          </a>
        </div>
      </div>
      <div className='text-center sm:flex items-center justify-center border-t border-gray-400 mx-[2%] mt-10 py-6'>        
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
            <li>
              <a 
                href="https://www.linkedin.com/in/yathin-bommineni-n210/"
                target='_blank'
                rel='noopener noreferrer'
                className='hover:underline'
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="mailto:yathinbommineni@gmail.com"
                className='hover:underline'
              >
                Gmail
              </a>
            </li>
            <li>
              <a
                href="https://github.com/yathinreddi"
                target='_blank'
                rel='noopener noreferrer'
                className='hover:underline'
              >
                GitHub
              </a>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
