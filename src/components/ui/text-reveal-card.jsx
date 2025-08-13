'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { twMerge } from 'tailwind-merge';
import { cn } from '@/app/lib/utils';

export const TextRevealCard = ({ text, revealText, children, className }) => {
  const [widthPercentage, setWidthPercentage] = useState(0);
  const cardRef = useRef(null);
  const [left, setLeft] = useState(0);
  const [localWidth, setLocalWidth] = useState(0);
  const [isMouseOver, setIsMouseOver] = useState(false);

  useEffect(() => {
    if (cardRef.current) {
      const { left, width: localWidth } = cardRef.current.getBoundingClientRect();
      setLeft(left);
      setLocalWidth(localWidth);
    }
  }, []);

  function mouseMoveHandler(event) {
    event.preventDefault();
    const { clientX } = event;
    if (cardRef.current) {
      const relativeX = clientX - left;
      setWidthPercentage((relativeX / localWidth) * 100);
    }
  }

  function mouseLeaveHandler() {
    setIsMouseOver(false);
    setWidthPercentage(0);
  }

  function mouseEnterHandler() {
    setIsMouseOver(true);
  }

  function touchMoveHandler(event) {
    event.preventDefault();
    const clientX = event.touches[0].clientX;
    if (cardRef.current) {
      const relativeX = clientX - left;
      setWidthPercentage((relativeX / localWidth) * 100);
    }
  }

  return (
    <div
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      onMouseMove={mouseMoveHandler}
      onTouchStart={mouseEnterHandler}
      onTouchEnd={mouseLeaveHandler}
      onTouchMove={touchMoveHandler}
      ref={cardRef}
      className={cn('w-full relative overflow-hidden', className)}
    >
      {children}

      <div className="h-24 sm:h-28 md:h-32 lg:h-36 relative overflow-hidden">
        {/* Revealed Text on Hover */}
        <motion.div
          style={{ width: '100%' }}
          animate={
            isMouseOver
              ? {
                  opacity: widthPercentage > 0 ? 1 : 0,
                  clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`,
                }
              : {
                  clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`,
                }
          }
          transition={isMouseOver ? { duration: 0 } : { duration: 0.4 }}
          className="absolute z-20 will-change-transform"
        >
          <p
            style={{
              fontSize: 'clamp(1.8rem, 7vw, 10rem)',
              //   textShadow: '1px 1px 10px rgba(0,0,0,0.1)',
              color: '#FFFFFF',
              WebkitTextStroke: '1px #BBB7EB',
              textStroke: '1px #BBB7EB',
            }}
            className="font-bold text-center leading-tight"
          >
            {revealText}
          </p>
        </motion.div>

        {/* Base Text */}
        <div className="overflow-hidden absolute top-[1px] w-full [mask-image:linear-gradient(to_bottom,transparent,white,transparent)]">
          <p
            style={{
              fontSize: 'clamp(1.8rem, 7vw, 10rem)',
              //   textShadow: '1px 1px 10px rgba(0,0,0,0.1)',
              color: '#FFFFFF',
              WebkitTextStroke: '1px transparent',
              background: 'linear-gradient(90deg, #BBB7EB, #3F9FBB)',
              WebkitBackgroundClip: 'text',
            }}
            className="font-bold text-center leading-tight"
          >
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

export const TextRevealCardTitle = ({ children, className }) => {
  return <h2 className={twMerge('text-white text-lg mb-2', className)}>{children}</h2>;
};

export const TextRevealCardDescription = ({ children, className }) => {
  return <p className={twMerge('text-[#a9a9a9] text-sm', className)}>{children}</p>;
};
