import React, { useState } from 'react'
import { motion } from "framer-motion" 

import { FaStar } from "react-icons/fa"
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { MdSquareFoot } from "react-icons/md";
import { MdOutlineBed } from "react-icons/md";
import { MdOutlineBathtub } from "react-icons/md";
import { GoArrowUpRight } from "react-icons/go";
import { FaLocationDot } from "react-icons/fa6";
import { FiTrendingUp } from "react-icons/fi";
import { BiBuildingHouse } from "react-icons/bi";
import { BiLineChartDown } from "react-icons/bi";
import { FiAward } from "react-icons/fi";
import { IoIosArrowRoundBack } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import { ImQuotesLeft } from "react-icons/im";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";





import img1 from '../img/sec1.png' 
import img11 from '../img/img11.jpg'
import img2 from '../img/img2.png' 
import img3 from '../img/img3.png' 
import img32 from '../img/img32.png' 
import img33 from '../img/img33.png' 
import img4 from '../img/img4.jpg' 
import img41 from '../img/img41.jpg' 
import img5 from '../img/sec5.jpg'
import img51 from '../img/sec51.jpg' 
import img52 from '../img/sec52.jpg' 
import img7 from '../img/img7.png'
import img8 from '../img/img8.png'
import img81 from '../img/img81.png'
import img82 from '../img/img82.png'
import img9 from '../img/img9.jpg'



export default function HeroSection() {
  // 1. إضافة State لتخزين الصورة الحالية في قسم الـ Timeline
  // خلينا الصورة الافتراضية هي img7
  const [timelineImage, setTimelineImage] = useState(img7);

  return (
    <>
      <div className="sec1 w-full min-h-[550px] bg-[#00132D] my-28 relative ">
        
        {/* صورة الخلفية */}
        <img src={img1} alt="" className='absolute inset-0 top w-350 mx-auto object-cover opacity-10 z-0' />
        
        {/* الحاوية الأساسية اللي بتعمل Flex */}
        <div className="container w-[90%] md:w-[80%] mx-auto h-full flex flex-col md:flex-row justify-between items-center relative z-10 gap-10">
          
          {/* النص (القسم الأيسر) */}
          <motion.div 
            initial={{ opacity: 0, x: -1000 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="head flex-1"
          >
            <div className="head-sec1 my-15">
              <h1 className='font-Jakarta font-[700] text-[#F8F8F8] text-[40px] md:text-[64px] max-w-[680px] leading-[1.1]'>
                Your home to find, our comfort achieved
              </h1>
              <p className='my-[25px] max-w-[470px] font-Poppins font-[400] text-[16px] md:text-[18px] text-[#F8F8F8] leading-[23px]'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
              </p>
            </div>
            
            <div className="star flex flex-wrap gap-8 text-center my-10">
              <div className="star1">
                <p className='text-[#F8F8F8] text-[14px] flex justify-center gap-1 mb-2'>
                  <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
                </p>
                <p className='font-Poppins font-[400] text-[16px] text-[#F8F8F8]'>Lorem ipsum</p>
              </div>
              <div className="star1">
                <p className='text-[#F8F8F8] text-[14px] flex justify-center gap-1 mb-2'>
                  <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
                </p>
                <p className='font-Poppins font-[400] text-[16px] text-[#F8F8F8]'>Lorem ipsum</p>
              </div>
              <div className="star1">
                <p className='text-[#F8F8F8] text-[14px] flex justify-center gap-1 mb-2'>
                  <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
                </p>
                <p className='font-Poppins font-[400] text-[16px] text-[#F8F8F8]'>Lorem ipsum</p>
              </div>  
            </div>
            
            <div className="btn flex flex-wrap gap-4 mt-8">
              <button className='font-Poppins font-[400] text-[14px] text-[#000000] bg-[#F8F8F8] px-6 py-2 h-[40px] rounded-md transition hover:bg-gray-200'>
                Envision your next home
              </button>
              <button className='border border-[#F8F8F8] px-6 py-2 h-[40px] text-[#F8F8F8] font-Poppins font-[400] text-[14px] rounded-md transition hover:bg-white hover:text-black'>
                Contact us
              </button>
            </div>
          </motion.div>

          <motion.div 
              initial={{ opacity: 0, y: -1000 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
          
             className="img-sec1 w-100 h-[400px] shrink-0 rounded-lg shadow-lg z-10 absolute top-42 left-200">
             <img src={img11} alt="" className='rounded-xl'/>
             <div className="circle w-[64px] h-[64px] rounded-[999px] bg-[#FFFFFF] absolute top-40 -left-7"></div>
             <div className="circle w-[64px] h-[64px] rounded-[999px] bg-[#FFFFFF] absolute top-40 left-93"></div>

             <p className=" border-2 border w-20 my-2 absolute left-1"></p>
             <p className=" border-2 border w-20 my-2 absolute left-28"></p>
             <p className=" border-2 border w-20 my-2 absolute left-55"></p>
            <p className=" border-2 border w-20 my-2 absolute left-80"></p>
          </motion.div>
        </div>
         <motion.div
                initial={{ opacity: 0, y: 100}}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <div className="stat-hero  w-[80%] mx-30 flex gap-20 absolute top-145">
                  <div className="stat-item">
                    <p className='sp1 font-Jakarta font-[700] text-[#93A1A4] text-[28px] bold text-center'>340+</p>
                    <p className='sp11 font-Jakarta font-[14px] font-[500] text-[#00132D]'>Clients helped in their search </p>
                  </div>
                  <div className="stat-item">
                    <p className='sp1 font-Jakarta font-[700] text-[#93A1A4] text-[28px] bold text-center'>500+</p>
                    <p className='sp11 font-Jakarta font-[14px] font-[500] text-[#00132D]'>Homes available to you</p>
                  </div>
                  <div className="stat-item">
                    <p className='sp1 font-Jakarta font-[700] text-[#93A1A4] text-[28px] bold text-center'>500+</p>
                    <p className='sp11 font-Jakarta font-[14px] font-[500] text-[#00132D]'>Homes available to you</p>
                  </div>
                  <div className="stat-item">
                    <p className='sp1 font-Jakarta font-[700] text-[#93A1A4] text-[28px] bold text-center'>340+</p>
                    <p className='sp11 font-Jakarta font-[14px] font-[500] text-[#00132D]'>Clients helped in their search</p>
                  </div>  
                   <div className="stat-item">
                    <p className='sp1 font-Jakarta font-[700] text-[#93A1A4] text-[28px] bold text-center'>5000+</p>
                    <p className='sp11 font-Jakarta font-[14px] font-[500] text-[#00132D]'>Homes available to you</p>
                  </div>   
                </div>
              </motion.div>
      </div>
      {/* ************************************************************************** */}
      <div className="sec2">
         <img src={img2} alt="" className='w-full h-screen my-35' />
      </div>
      {/* *************************************************************************** */}
    <div className="sec3 w-full h-screen">
        <div className="container w-[80%] mx-auto">
            <div className="head-sec3">
                <p className='font-inter font-[400] font-[#FF6A1A] text-[16px] text-[#FF6A1A] tracking-[1.6px] leading-[24px]'>PORTFOLIO</p>
                <div className='flex  gap-170'>
                  <h2 className='font-inter font-[700] text-[48px] text-[#000616]'>Our Developments</h2>
                  <p className="2 text-[#000616] font-inter font-[400] underline underline-offset-5 my-5">EXPLORE ALL</p>
                </div>
            </div>

            <div className="img-sec3 flex gap-10 my-20">
              <div className="img3 w-[30%] h-[450px] relative group cursor-pointer">
    
                 <div className="relative w-full h-[350px] overflow-hidden rounded-md">
      
                   <img src={img3} alt=""className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'/>

                    <button className='font-inter font-[400] text-[#FFFFFF] w-[125px] h-[42px] bg-[#FFFFFF26] backdrop-blur-sm rounded-sm absolute bottom-5 left-5 z-10'>NEW CAIRO       </button>

                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                       <p className="text-white text-[20px] font-inter font-[500] translate-y-5 group-hover:translate-y-0 transition-transform duration-300">View Project Details</p>
          
                    </div>

                 </div>
    
                 <p className='font-inter font-[600] text-[#1B1B1E] text-[24px] semibold py-3'>Rock Vera </p> 
       
                 <ul className="list-disc list-inside marker:text-orange-500 marker:text-[30px]">
                   <li className='-my-5 text-[#44474D] font-inter font-[400] text-[16px]'>
                    <span className="relative -left-5">NOW LAUNCHING</span>
                   </li>
                 </ul>
             </div>
              <div className="img3 w-[30%] h-[450px] relative group cursor-pointer">
    
                 <div className="relative w-full h-[350px] overflow-hidden rounded-md">
      
                   <img src={img32} alt=""className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'/>

                    <button className='font-inter font-[400] text-[#FFFFFF] w-[125px] h-[42px] bg-[#FFFFFF26] backdrop-blur-sm rounded-sm absolute bottom-5 left-5 z-10'>6TH OCTOBER</button>

                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                       <p className="text-white text-[20px] font-inter font-[500] translate-y-5 group-hover:translate-y-0 transition-transform duration-300">View Project Details</p>
          
                    </div>

                 </div>
    
                 <p className='font-inter font-[600] text-[#1B1B1E] text-[24px] semibold py-3'>Rock Capital 1 </p> 
       
                 <ul className="list-disc list-inside marker:text-orange-500 marker:text-[30px]">
                   <li className='-my-5 text-[#44474D] font-inter font-[400] text-[16px]'>
                    <span className="relative -left-5">CONSTRUCTION IN PROGRESS</span>
                   </li>
                 </ul>
             </div>
              <div className="img3 w-[30%] h-[450px] relative group cursor-pointer">
    
                 <div className="relative w-full h-[350px] overflow-hidden rounded-md">
      
                   <img src={img33} alt=""className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'/>

                    <button className='font-inter font-[400] text-[#FFFFFF] w-[250px] h-[42px] bg-[#FFFFFF26] backdrop-blur-sm rounded-sm absolute bottom-5 left-5 z-10'>ADMINISTRATIVE CAPITAL</button>

                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                       <p className="text-white text-[20px] font-inter font-[500] translate-y-5 group-hover:translate-y-0 transition-transform duration-300">View Project Details</p>
          
                    </div>

                 </div>
    
                 <p className='font-inter font-[600] text-[#1B1B1E] text-[24px] semibold py-3'>Rock Capital 1 </p> 
       
                 <ul className="list-disc list-inside marker:text-orange-500 marker:text-[30px]">
                   <li className='-my-5 text-[#44474D] font-inter font-[400] text-[16px]'>
                    <span className="relative -left-5">CONSTRUCTION IN PROGRESS</span>
                   </li>
                 </ul>
             </div>
            </div>
        </div>
      </div>
  {/* ***************************************************************************** */}
    <div className="sec4 w-full h-screen bg-[#00132D]  relative ">
          <img src={img1} alt="" className='absolute inset-0  w-350 mx-auto object-cover opacity-10 z-0' />
          <img src={img1} alt="" className='ml-auto w-70'/>
        <div className="container w-[80%]  mx-auto h-full flex justify-between">
                <div className=' '>
                    <ul className="list-disc list-inside marker:text-orange-500 marker:text-[30px] ">
                      <li className=' text-[#FF6A1A] font-inter font-[400] text-[16px]'>
                         <span className="relative -left-5">OUR STORYS</span>
                      </li>
                    </ul>
                    <div className="img-sec w-80 h-90  my-7 relative">
                        <img src={img4} alt="" className='h-100 rounded-xl'/>
                        <img src={img41} alt="" className=' h-100 w-100 rounded-xl absolute top-20 left-40' />
                   </div>
                </div>
                <div className=" w-[585px] h-120 my-15">
                    <h2 className='font-Poppins font-[600] text-[40px] semibold text-[#F8F8F8]'>Rock Developments</h2>
                     <p className='font-Poppins font-[300] text-[#F8F8F8] text-[20px] w-[570px] my-5'>
                        We are Rock Developments; once modest contractors started by Eng. Samir Doss, now quickly becoming one of the country’s most dependable residential, commercial, and administrative real estate developers. 
                        Throughout 40 years of operation, we’ve established a diverse portfolio of signature real estate developments throughout the country. Our projects spread throughout Egypt’s most significant destinations, from the historic areas of Old Cairo, to massive residential, commercial and administrative ventures in its newest growing districts, and several exemplary commercial ventures in Canada. 
                     </p>
                      <div className="btn flex flex-wrap gap-4 mt-8">
                         <button className='border border-[#F8F8F8] px-10 py-2 h-[40px] text-[#F8F8F8] font-Poppins font-[600] text-[16px] rounded-md transition hover:bg-white hover:text-black'>
                           Contact us
                          </button>
                         <button className='font-Poppins font-[600] text-[16px] text-[#000000] bg-[#F8F8F8] px-10 py-2 h-[40px] rounded-md transition hover:bg-gray-200'>
                           Track Project
                          </button>  
                       </div>
                </div>
        </div>
    </div>
    {/* *********************************************************************************** */}
    <div className="sec5 w-full h-screen">
        <div className="container w-[80%] mx-auto my-25">
            <div className="head-sec3">
                <div className='flex   justify-between'>
                  <h2 className='font-Sora font-[700] text-[40px] text-[#131212] bold'>CANADA PROJECTS</h2>
                      <div className='flex relative gap-5'>
                         <p className='w-15 h-15 rounded-[999px] bg-[#93A1A480]'> <IoIosArrowBack className='text-[#FFFFFF] text-[35px] absolute top-3 left-2'/> </p>
                         <p className='w-15 h-15 rounded-[999px] bg-[#00132D]'> <IoIosArrowForward className='text-[#FFFFFF] text-[35px] absolute top-3 left-23' /> </p>
                          <button className='my-1 font-Montserrat font-[700] bold  border border-[#00132D] w-[150px] h-[50px] text-[#00132D] text-[16px] rounded-xl'>
                            Show all Project
                          </button>
                      </div>
                </div>
            </div>

            <div className="img-sec5 flex gap-10 my-20">
              <div className="img3 w-[40%] h-[450px] relative group cursor-pointer">
                 <div className="relative w-full h-[350px] overflow-hidden rounded-md">
                   <img src={img5} alt=""className='w-full h-full  transition-transform duration-500 group-hover:scale-110'/>
                     <h4 className='absolute top-10 left-7 font-inter font-[700] italic text-[30px] text-[#FFFFFF] w-[200px] z-100'>TRANQUIL HAVEN</h4>
                    <div className="flex">
                        <p className='absolute top-73 left-7 text-[#FFFFFF]'><MdSquareFoot className='absolute -top-2 text-[30px]'/><span className='mx-8 font-inter font-[700] text-[10px] tracking-[1px]'>134 M2</span></p>
                        <p className='absolute top-73 left-30 text-[#FFFFFF]'><MdOutlineBed className='absolute -top-2 text-[30px]'/><span className='mx-8 font-inter font-[700] text-[10px] tracking-[1px]'>3</span></p>
                        <p className='absolute top-73 left-45 text-[#FFFFFF]'><MdOutlineBathtub className='absolute -top-2 text-[30px]'/><span className='mx-8 font-inter font-[700] text-[10px] tracking-[1px]'>2</span></p>
                        <p className="circle w-15 h-15 bg-[#FFFFFF33] rounded-[999px] absolute top-65 left-100"><GoArrowUpRight className='absolute top-2 left-1 text-[50px] text-[#FFFFFF]' /></p>
    
                    </div>
                       <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-20"></div>         
                    
                 </div>
             </div>
             <div className="img3 w-[40%] h-[450px] relative group cursor-pointer">
                 <div className="relative w-full h-[350px] overflow-hidden rounded-md">
                   <img src={img51} alt=""className='w-full h-full  transition-transform duration-500 group-hover:scale-110'/>
                     <h4 className='absolute top-10 left-7 font-inter font-[700] italic text-[30px] text-[#FFFFFF] w-[200px] z-100'>TRANQUIL HAVEN</h4>
                    <div className="flex">
                        <p className='absolute top-73 left-7 text-[#FFFFFF]'><MdSquareFoot className='absolute -top-2 text-[30px]'/><span className='mx-8 font-inter font-[700] text-[10px] tracking-[1px]'>134 M2</span></p>
                        <p className='absolute top-73 left-30 text-[#FFFFFF]'><MdOutlineBed className='absolute -top-2 text-[30px]'/><span className='mx-8 font-inter font-[700] text-[10px] tracking-[1px]'>3</span></p>
                        <p className='absolute top-73 left-45 text-[#FFFFFF]'><MdOutlineBathtub className='absolute -top-2 text-[30px]'/><span className='mx-8 font-inter font-[700] text-[10px] tracking-[1px]'>2</span></p>
                        <p className="circle w-15 h-15 bg-[#FFFFFF33] rounded-[999px] absolute top-65 left-100"><GoArrowUpRight className='absolute top-2 left-1 text-[50px] text-[#FFFFFF]' /></p>
    
                    </div>
                       <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-20"></div>         
                    
                 </div>
             </div>
             <div className="img3 w-[40%] h-[450px] relative group cursor-pointer">
                 <div className="relative w-full h-[350px] overflow-hidden rounded-md">
                   <img src={img52} alt=""className='w-full h-full  transition-transform duration-500 group-hover:scale-110'/>
                     <h4 className='absolute top-10 left-7 font-inter font-[700] italic text-[30px] text-[#FFFFFF] w-[200px] z-100'>TRANQUIL HAVEN</h4>
                    <div className="flex">
                        <p className='absolute top-73 left-7 text-[#FFFFFF]'><MdSquareFoot className='absolute -top-2 text-[30px]'/><span className='mx-8 font-inter font-[700] text-[10px] tracking-[1px]'>134 M2</span></p>
                        <p className='absolute top-73 left-30 text-[#FFFFFF]'><MdOutlineBed className='absolute -top-2 text-[30px]'/><span className='mx-8 font-inter font-[700] text-[10px] tracking-[1px]'>3</span></p>
                        <p className='absolute top-73 left-45 text-[#FFFFFF]'><MdOutlineBathtub className='absolute -top-2 text-[30px]'/><span className='mx-8 font-inter font-[700] text-[10px] tracking-[1px]'>2</span></p>
                        <p className="circle w-15 h-15 bg-[#FFFFFF33] rounded-[999px] absolute top-65 left-100"><GoArrowUpRight className='absolute top-2 left-1 text-[50px] text-[#FFFFFF]' /></p>
    
                    </div>
                       <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-20"></div>         
                    
                 </div>
             </div>
            </div>
        </div>
      </div>
        {/*/////////////////////////////////////////////////////////////////////////////////////  */}
            <div className="sec6 w-full h-[900px] -my-50">
        <div className="container w-[80%] h-screen mx-auto ">
            <div className="tit-sec6 text-center py-35 ">
                <motion.h2
                  initial={{ y: 100, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
                 className='font-manrope font-[400] text-[16px] text-[#E2783F] tracking-[4.8px]'>ADVANTAGES
                 </motion.h2>
                <motion.p 
                 initial={{ y: 100, opacity: 0 }}
                 whileInView={{ y: 0, opacity: 1 }}
                 viewport={{ once: true, amount: 0.2 }}
                 transition={{ duration: 0.9, ease: "easeOut", delay: 0.4 }}
                 className=' mx-auto my-5 leading-[28px] w-[670px] font-Jakarta font-[700] text-[48px] text-[#00132D] bold'>
                   The ROCK Standard
                </motion.p>
            </div>  

            <div className="box-info flex gap-10 -my-5">
                <div className="contain w-[22%] h-[300px] bg-[#00132D] rounded-xl transition-transform duration-300 ease-out hover:scale-101">
                    <FaLocationDot  className='text-[#E2783F] w-[36px] h-[40px]  my-8 mx-5'/>
                    <h2 className='w-10 mx-5 text-[#FFFFFF] font-manrope text-[16px] font-[700] semibold -my-5 '>SELECTED LOCATIONS</h2>
                    <p className=' mx-5 w-[160px]  text-[#FFFFFF] text-[14px] font-manrope font-[400] my-18 '>Prime real estate in high-growth corridors.</p>
                </div>

                <div className="contain w-[22%] h-[300px] bg-[#00132D] rounded-xl transition-transform duration-300 ease-out hover:scale-101">
                    <FiTrendingUp  className='text-[#E2783F] w-[36px] h-[40px]  my-8 mx-5'/>
                    <h2 className='w-10 mx-5 text-[#FFFFFF] font-manrope text-[16px] font-[700] semibold -my-5 '>INVESTMENT VALUE</h2>
                    <p className=' mx-5 w-[160px]  text-[#FFFFFF] text-[14px] font-manrope font-[400] my-18 '>Proven track record of capital appreciation. </p>
                </div>

                <div className="contain w-[22%] h-[300px] bg-[#00132D] rounded-xl transition-transform duration-300 ease-out hover:scale-101">
                    <BiBuildingHouse  className='text-[#E2783F] w-[36px] h-[40px]  my-8 mx-5'/>
                    <h2 className='w-10 mx-5 text-[#FFFFFF] font-manrope text-[16px] font-[700] semibold -my-5 '>MODERN DESIGN</h2>
                    <p className=' mx-5 w-[160px]  text-[#FFFFFF] text-[14px] font-manrope font-[400] my-18 '>
                        Cinematic architectural aesthetics .</p>
                </div>

                <div className="contain w-[22%] h-[300px] bg-[#00132D] rounded-xl transition-transform duration-300 ease-out hover:scale-101">
                    <BiLineChartDown  className='text-[#E2783F] w-[36px] h-[40px]  my-8 mx-5'/>
                    <h2 className='w-10 mx-5 text-[#FFFFFF] font-manrope text-[16px] font-[700] semibold -my-5 '>MARKET POSITION</h2>
                    <p className=' mx-5 w-[160px]  text-[#FFFFFF] text-[14px] font-manrope font-[400] my-18 '>Strategic alignment with market demand.</p>
                </div>

                <div className="contain w-[22%] h-[300px] bg-[#00132D] rounded-xl transition-transform duration-300 ease-out hover:scale-101">
                    <FiAward  className='text-[#E2783F] w-[36px] h-[40px]  my-8 mx-5'/>
                    <h2 className='w-10 mx-5 text-[#FFFFFF] font-manrope text-[16px] font-[700] semibold -my-5 '>TRUSTED STANDARDS</h2>
                    <p className=' mx-5 w-[160px]  text-[#FFFFFF] text-[14px] font-manrope font-[400] my-18 '>   ISO certified construction processes.</p>
                </div>
            </div> 
        </div>
    </div>
  {/*///////////////////////////////////////////////////////////////////////////  */}
    <div className="sec7 w-full h-[900px] bg-[#000E24] my-20">
      <div className="container w-[80%] mx-auto flex gap-[10%]">
        <div className="info-img w-[45%] h-screen py-20">
           <p className='font-inter font-[600] semibold text-[12px] tracking-[1.2px] text-[#FF6A1A]'>ESTABLISHED 1978</p>
           <h2 className="my-5 w-[600px] font-Bodoni font-[700] text-[72px] text-[#FFFFFF] -tracking-[1.44px] leading-[79px]">A Legacy of Structural Brilliance</h2>
           <p className="w-[484px] font-inter font-[400] text-[18px] text-[#C5C6CE] ">For over four decades, Rock Developments has been the cornerstone of architectural innovation in Egypt, bridging
              the gap between historical grandeur and futuristic efficiency.</p>
            <div className="img w-[400px] h-[300px] bg-[#0B1F3B99] my-10 relative">
               
               {/* 2. تم تغيير src ليكون مربوط بـ State وإضافة تأثير انتقال للصورة */}
               <img src={timelineImage} alt="" className='absolute top-0 h-70 w-95 left-2 top-2.5 transition-all duration-500 ease-in-out object-cover' />
            
            </div>

        </div>
        <div className="info-sec7 w-[45%] h-screen ">
         <div className="relative my-40 h-[600px] flex flex-col justify-between py-15 pl-5">
  
              {/* 1. الخط نفسه: بيبدأ شفاف من فوق، وبرتقالي في النص، وشفاف من تحت */}
          <div className="absolute -top-35 left-[27px] w-[2px] h-[900px] bg-gradient-to-b from-transparent via-[#FF6A1A] to-transparent z-0"></div>

            <div 
              className="relative z-10 flex items-center gap-10 cursor-pointer"
              onMouseEnter={() => setTimelineImage(img7)}
            >
               <div className="w-4 h-4 bg-[#FF6A1A] rounded-full shadow-[0_0_15px_#FF6A1A] shrink-0 "></div>
                  <div className="absolute left-10 -top-2">
                    <p className="text-[#FFFFFF] font-Bodoni font-[400] text-[24px] "> 1978 </p>
                    <p className='text-[#FF6A1A]  font-Bodoni font-[400] text-[16px] py-2'>The Foundation</p>
                    <p className='w-[525px] font-inter font-[400] text-[#C5C6CE] text-[16px]'>
                        Founded with a vision to revolutionize the Egyptian real estate
                        market through superior craftsmanship and uncompromising quality.
                    </p>
                  </div>   
             </div>

             <div 
              className="relative z-10 flex items-center gap-10 cursor-pointer"
              onMouseEnter={() => setTimelineImage(img3)} // استبدل img3 بالصورة المناسبة لسنة 1995
             >
               <div className="w-4 h-4 bg-[#FF6A1A] rounded-full shadow-[0_0_15px_#FF6A1A] shrink-0 "></div>
                  <div className="absolute left-10 -top-2">
                    <p className="text-[#FFFFFF] font-Bodoni font-[400] text-[24px] "> 1995 </p>
                    <p className='text-[#FF6A1A]  font-Bodoni font-[400] text-[16px] py-2'>Expanding Horizons</p>
                    <p className='w-[525px] font-inter font-[400] text-[#C5C6CE] text-[16px]'>
                       Expansion into large-scale residential communities, setting
                      new standards for suburban living across Cairo and beyond.
                    </p>
                  </div>   
             </div>

            <div 
              className="relative z-10 flex items-center gap-10 cursor-pointer"
              onMouseEnter={() => setTimelineImage(img5)} // استبدل img5 بالصورة المناسبة للوقت الحاضر
            >
               <div className="w-4 h-4 bg-[#FF6A1A] rounded-full shadow-[0_0_15px_#FF6A1A] shrink-0 "></div>
                  <div className="absolute left-10 -top-2">
                    <p className="text-[#FFFFFF] font-Bodoni font-[400] text-[24px] "> Present </p>
                    <p className='text-[#FF6A1A]  font-Bodoni font-[400] text-[16px] py-2'>Redefining Luxury</p>
                    <p className='w-[525px] font-inter font-[400] text-[#C5C6CE] text-[16px]'>
                        Integrating smart-tech and sustainable engineering to create
                        future-proof destinations for the next generation of leaders.
                    </p>
                  </div>   
             </div>

          </div>
        </div>

      </div>
    </div>
    {/* ////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
     <div className="sec8 w-full h-screen">
        <div className="container w-[80%] mx-auto">
            <div className="head-sec3 my-50">
                <p className='py-2 font-inter font-[400] font-[#FF6A1A] text-[24px] text-[#FF6A1A] tracking-[1.6px] leading-[24px]'>MEDIA CENTER</p>
                <h2 className='font-inter font-[700] text-[48px] text-[#000616] bold'>Latest News & Insights</h2>
            </div>

            <div className="img-sec3 flex gap-10 -my-40">
              <div className="img3 w-[30%] h-[450px] relative group cursor-pointer">
    
                 <div className="relative w-full h-[350px] overflow-hidden rounded-md">
                   <img src={img8} alt=""className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'/>
                 </div>
                 <div className="info">
                   <p className='font-inter font-[400] text-[#FF6A1A] text-[16px] tracking-[0.8px] semibold py-3'>CORPORATE </p> 
                   <p className='w-[380px] font-inter font-[400] text-[20px] text-[#00132D]'>Rock Developments expands presence in the New Capital</p>
                   <p className="w-[380px] font-inter font-[400] text-[16px] text-[#979797]">The company announces a new commercial landmark focused on sustainability and green tech</p>
                 </div>
             </div>

             <div className="img3 w-[30%] h-[450px] relative group cursor-pointer">
    
                 <div className="relative w-full h-[350px] overflow-hidden rounded-md">
                   <img src={img81} alt=""className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'/>
                 </div>
                 <div className="info">
                   <p className='font-inter font-[400] text-[#FF6A1A] text-[16px] tracking-[0.8px] semibold py-3'>LIFESTYLE </p> 
                   <p className='w-[380px] font-inter font-[400] text-[20px] text-[#00132D]'>Rock Vera: Bringing Italian Soul to New Cairo</p>
                   <p className="w-[380px] font-inter font-[400] text-[16px] text-[#979797]">How architectural heritage influenced the design of our latest award-winning residential community...</p>
                 </div>
             </div>


             <div className="img3 w-[30%] h-[450px] relative group cursor-pointer">
    
                 <div className="relative w-full h-[350px] overflow-hidden rounded-md">
                   <img src={img82} alt=""className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110'/>
                 </div>
                 <div className="info">
                   <p className='font-inter font-[400] text-[#FF6A1A] text-[16px] tracking-[0.8px] semibold py-3'>SUSTAINABILITY </p> 
                   <p className='w-[380px] font-inter font-[400] text-[20px] text-[#00132D]'>Rock For People: Building for a Greener Tomorrow</p>
                   <p className="w-[380px] font-inter font-[400] text-[16px] text-[#979797]">Our commitment to 100% renewable energy sourcing for all new developments by 2030...</p>
                 </div>
             </div>
          </div>
        </div>
     </div>
   {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <div className="sec9 w-full h-screen my-40">
        <div className="container w-[80%] mx-auto flex gap-80">
            <div className="info ">
               <p className='font-Poppins font-[500] text-[20px] text-[#00132D] Medium tracking-[1.9px]'>TESTIMONIALS</p>
               <p className="py-5 w-[415px] font-Poppins font-[600] text-[39px] semibold text-[#00132D]  ">Look What Our Customers Say!</p>
               <p className="w-[415px] text-[#00132D] font-Poppins font-[400] text-[16px]">Fusce venenatis tellus a felis scelerisque, non pulvinar est pellentesque.</p>
               <div className="flex gap-8 my-10">
                 <p className=" w-15 h-15 rounded-[999px] border border-[#00132D] text-[55px] "> <IoIosArrowRoundBack className='my-1 mx-auto text-[#00132D]'/></p> 
                 <p className=" w-15 h-15 rounded-[999px] border text-[55px] border-[#00132D]"> <IoIosArrowRoundForward className='my-1 mx-auto text-[#00132D'/></p>
               </div>
            </div>

            <div className="contain w-[500px] h-[350px] bg-white rounded-2xl shadow-[0_20px_30px_rgb(0,0,0,0.09)] relative">
              <p className=" absolute -z-10 w-15 h-15 rounded-[999px] text-[55px] bg-gradient-to-b from-[#1E1E1E] to-transparent opacity-[0.5] -top-8 -left-5  "></p> 
               <p className="text-[#00132D] text-[50px] mx-10 my-3"><ImQuotesLeft /></p>
               <p className="mx-10 w-[380px] text-[#00132D] font-Poppins font-[500] text-[20px]">
                I highly recommend Jodi J. Appleby. She was attentive to our needs and worked tirelessly to find us the perfect home. We couldn't be happier with our new place!
               </p>
               <p className="line w-[80%] h-[1px] bg-[#D4D4D4] my-10 mx-auto"></p>
               <div className="flex">
                 <img src={img9} alt=""className='w-15 h-15 rounded-[999px] -my-5 mx-10'/>
                 <p className='font-Poppins font-[500] text-[20px] text-[#00132D] -mx-6'>Barbara D. Smith</p>
                 <p className='text-[#FFC700] text-[14px] flex justify-center gap-1 my-2 mx-20'>
                  <FaStar/><FaStar/><FaStar/><FaStar/><FaStar className='text-[#D4D4D4]'/>
                </p>
               </div>
            </div>
        </div>
      </div>
      {/* ///////////////////////////////////////////////////////////////////////////////////////////////////// */}
       
        <div className="footer -my-120 h-[450px]">
             <div className="flex gap-20">

            <div className="w-[600px] h-[450px] bg-[#00132D] p-10 relative"
             style={{clipPath: "path('M 0 0 L 480 0 C 650 120, 450 300, 350 450 L 0 450 Z')"  }}>
               <img src={img1} alt="" className='w-[225px] mx-10 ' />
               <p className="w-[304px] font-inter font-[300] text-[16px] text-[#FFFFFF] mx-10 my-10">
                 tA luxurious life is not just about a prime location or elegant design…
                 It’s about a complete lifestyle.
               </p>
               <div className="flex gap-2 mx-10 text-[#FFFFFF] text-[25px]">
                  <FaFacebook/>
                  <FaLinkedin/>
                  <FaTwitter/>
                  <FaInstagram/>
               </div>
            </div>
            <div className="info-footer py-25">
                <p className='text-[#00132D] font-Poppins font-[600] text-[24px] '>Navigation</p>
                <p className='text-[#00132D] font-Poppins font-[500] text-[16px] py-4 '>Home</p>
                <p className='text-[#00132D] font-Poppins font-[500] text-[16px] '>Projects</p>
                <p className='text-[#00132D] font-Poppins font-[500] text-[16px] py-4'>Previous work</p>
                <p className='text-[#00132D] font-Poppins font-[500] text-[16px] '>offers</p>
                <p className='text-[#00132D] font-Poppins font-[500] text-[16px] py-4'>Media & News </p>
            </div>
            <div className="info-footer py-28">
                <p className='text-[#00132D] font-Poppins font-[600] text-[24px] '>Company</p>
                <p className='text-[#00132D] font-Poppins font-[500] text-[16px] py-4 '>About us</p>
                <p className='text-[#00132D] font-Poppins font-[500] text-[16px] '>Our mission and vision</p>
                <p className='text-[#00132D] font-Poppins font-[500] text-[16px] py-4'>Our team</p>
            </div>
            <div className="info-footer py-28">
                <p className='text-[#00132D] font-Poppins font-[600] text-[24px] '>Support</p>
                <p className='text-[#00132D] font-Poppins font-[500] text-[16px] py-4 '>Contact us</p>
            </div>
            <div className="info-footer py-28 ">
                <p className='text-[#00132D] font-Poppins font-[600] text-[24px]'>Subscribe</p>
                 <input type="text" placeholder='Email' className='bg-[#93A1A436] px-5 rounded-sm my-3'/>
                 <button className='block bg-[#00132D] w-[132px] h-[40px] font-inter font-[400] text-[18px] text-[#FFFFFF] rounded-xl my-3'>Subscribe</button>
            </div>
           </div>
          
        </div>
  
    </>
  )
}