import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { Link } from 'react-router-dom';
import Logo from '../img/logo.png';

export default function Header() {
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();

  // مراقبة حركة الـ Scroll
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    
    // لو إنت في أول الصفحة، أظهر الهيدر دايماً
    if (latest <= 0) {
      setIsHidden(false);
      return;
    }
    
    // لو بتعمل Scroll لتحت وعديت 50 بيكسل، اخفي الهيدر
    // لو بتعمل Scroll لفوق، أظهره تاني
    if (latest > previous && latest > 50) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }
  });

  const navLinks = [
    { name: 'HOME', href: '/' },
    { name: 'OUR Developments', href: '#OUR Developments' },
    { name: 'rock for people', href: '#rock for people' },
    { name: 'media center', href: '#media center' },
  ];

  return (
    <motion.header 
      // الأنيميشن المبدئي أول ما تفتح الصفحة
      initial={{ y: -100, opacity: 0 }}
      // الأنيميشن بيتغير بناءً على حالة الـ Scroll
        animate={{ 
        y: isHidden ? -100 : 0, 
        opacity: isHidden ? 0 : 1 
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="text-[#C4C7C8]  w-full fixed top-0 left-0 z-50 bg-[white]"
    >
      <div className="container mx-auto px-4 md:px-8 h-20 md:h-24 flex items-center justify-between">
        <Link to="/" className="flex items-center z-1">
          <img src={Logo} alt="rock Logo" className="h-12 md:h-16 w-auto object-contain transition-transform duration-200 hover:scale-105 invert"/>
        </Link>

       <nav className="hidden md:flex items-center gap-8 text-base font-semibold">
          {navLinks.map((item) => (
            <a 
              key={item.name}
              href={item.href}
              className={`pb-1 transition-all duration-200 uppercase font-grotesk text-[14px] text-[#001237] tracking-[1.4px] ${
                // تم تعديل Home لتصبح HOME لتتطابق مع المصفوفة فوق
                item.name === 'HOME' 
                  ? 'text-[#F6921E] border-b-2 border-[#F6921E] font-bold' 
                  : 'text-[#001237]' // تم وضع لون افتراضي صالح بدلاً من text-[]
              }`}
            >
              {item.name}
            </a>    
          ))}
        </nav>
        <button className="relative w-[146px] h-[50px] tracking-[1.4px] font-grotesk font-[600] bg-[#001237] text-[16px] text-[#FFFFFF] px-6 py-2.5  regular shadow-md hover:shadow-lg transition-all duration-300 transform active:translate-y-0 cursor-pointer">
           contact us
        </button>
      </div>    
    </motion.header>
  );
}