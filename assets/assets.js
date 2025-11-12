import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import header_bg_color2 from './header-bg-color2.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import certificates_icon1 from './certificates_icon1.png';
import certificates_icon2 from './certificates_icon2.png';
import certificates_icon3 from './certificates_icon3.png';
import certificates_icon4 from './certificates_icon4.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    header_bg_color2,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    certificates_icon1,
    certificates_icon2,
    certificates_icon3,
    certificates_icon4,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark
};

export const workData = [
    {
        title: 'Food Delivery App',
        description: 'Full Stack Development',
        bgImage: '/work-1.png', link: 'https://github.com/yathinreddi/Food-Delivery-App'
    },
    {
        title: 'Geo based app',
        description: 'Mobile App',
        bgImage: '/work-2.png', link: ''
    },
    {
        title: 'ChatGPT AI Clone',
        description: 'AI frontend development',
        bgImage: '/work-3.png', link: ''
    },
    {
        title: 'UI/UX designing',
        description: 'UI/UX Design',
        bgImage: '/work-4.png',
    },
]

export const serviceData = [
    { 
        icon: assets.certificates_icon1, 
        title: 'Wipro TalentNext - Java Full Stack', 
        description: 'Course Duration: 5 months | Certificate of completion:| October 28, 2024. ', 
        link: 'https://cert.diceid.com/cid/D10FfaOXIw?verify=true' },
    { 
        icon: assets.certificates_icon2, 
        title: 'Data Analytics Intern', 
        description: 'Course Duration: 4 Weeks | Certificate of Compeletion: August 25, 2025 .', link: '' },
    { 
        icon: assets.certificates_icon3, 
        title: 'Salesforce Developer Virtual Internship', 
        description: 'Duration: 8 Weeks | Certificate of completion:|January 16, 2024.',
        link: ' https://smartinternz.com/internships/salesforce_certificates/50cdf52b4612bd5b419e775ddfc08314' },
    { 
        icon: assets.certificates_icon4, 
        title: 'Salesforce Administrator Virtual Internship', 
        description: 'Duration: 8 Weeks | Certificate of completion:|July 16, 2024.', 
        link: 'https://skillwallet.smartinternz.com/internships/salesforce_certificates/5e02b868a91671f9140a41f3946f33cb' },
    
    
]

export const infoList = [
    {
        icon: assets.code_icon, iconDark: assets.code_icon_dark, 
        title: 'Tech Stack', 
        
        description: 'Programming languages, Web development, Technical skills',
        moreInfo: "Programming languages -| Java, C, SQL.| Web development -| HTML, CSS, Javascript. | Technical skills -| Data structures and algorithms" },
    {
        icon: assets.edu_icon, iconDark: assets.edu_icon_dark, 
        title: 'Education', 
        description: 'B.Tech in Electronics & Communication engineering',
        moreInfo: "Mahatma Gandhi Institute of Technology. | B.Tech - 7.43 CGPA | Vijaya Ratna Juniour College. | Intermediate - 91.4 % | Vijaya Ratna Hihg School. | 10th Class - 9.7 CGPA" },
    { 
        icon: assets.project_icon, iconDark: assets.project_icon_dark, 
        title: 'Achievements & Others ', 
        description: 'Proficiency in English, Hindi and Telugu. ',
        moreInfo: "Organized and conducted a technical event, recognized as the top event among 40+ events at the annual fest of MGIT." }
];

export const toolsData = [
    { icon: assets.vscode, name: "VS Code" },
    { icon: assets.firebase, name: "GitHub" },
    { icon: assets.mongodb, name: "MS Excel" },
    { icon: assets.figma, name: "Figma" },
    { icon: assets.git, name: "Git" }
];

