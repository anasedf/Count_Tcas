import React, { useEffect, useRef, useState } from 'react';

const Count = ({ onTimeChange }) => {
  let interval = useRef();

  const startTimer = () => {
    const dateTCAS = new Date('October 28, 2024 09:00:00').getTime(); 
    const dateTGAT = new Date('December 8, 2024 09:00:00').getTime();
    const dateTPAT1 = new Date('December 14, 2024 09:00:00').getTime();
    const dateTPAT2 = new Date('December 7, 2024 09:00:00').getTime();
    const dateTPAT3 = new Date('December 8, 2024 09:00:00').getTime();
    const dateTPAT4 = new Date('December 9, 2024 09:00:00').getTime();
    const dateTPAT5 = new Date('December 7, 2024 09:00:00').getTime();


    interval.current = setInterval(() => {
      const now = new Date().toLocaleString('en-US', { timeZone: 'Asia/Bangkok' });
      const currentTimeInThailand = new Date(now).getTime();

      const distanceTCAS  = dateTCAS  - currentTimeInThailand;
      const distanceTGAT  = dateTGAT  - currentTimeInThailand;
      const distanceTPAT1 = dateTPAT1 - currentTimeInThailand;
      const distanceTPAT2 = dateTPAT2 - currentTimeInThailand;
      const distanceTPAT3 = dateTPAT3 - currentTimeInThailand;
      const distanceTPAT4 = dateTPAT4 - currentTimeInThailand;
      const distanceTPAT5 = dateTPAT5 - currentTimeInThailand;


      const calculateTimeLeft = (distance) => {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        return { days, hours, minutes, seconds };
      };

      const timeTCAS  = calculateTimeLeft(distanceTCAS);
      const timeTGAT  = calculateTimeLeft(distanceTGAT);
      const timeTPAT1 = calculateTimeLeft(distanceTPAT1);
      const timeTPAT2 = calculateTimeLeft(distanceTPAT2);
      const timeTPAT3 = calculateTimeLeft(distanceTPAT3);
      const timeTPAT4 = calculateTimeLeft(distanceTPAT4);
      const timeTPAT5 = calculateTimeLeft(distanceTPAT5);


      if (timeTCAS < 0 && 
        timeTGAT < 0 &&  
        timeTPAT1 < 0 && 
        timeTPAT2 < 0 &&  
        timeTPAT2 < 0 &&  
        timeTPAT3 < 0 &&  
        timeTPAT4 < 0 &&  
        timeTPAT5 < 0 
      ) {
        clearInterval(interval.current);
      } else {
        onTimeChange({ 
          TCAS : timeTCAS,
          TGAT : timeTGAT,
          TPAT1: timeTPAT1,
          TPAT2: timeTPAT2,
          TPAT3: timeTPAT3,
          TPAT4: timeTPAT4,
          TPAT5: timeTPAT5,
        });
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    }
  }, []);

  return null;
};

export default Count;
