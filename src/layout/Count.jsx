import React, { useEffect, useRef, useState } from 'react';

const Count = ({ onTimeChange }) => {
  let interval = useRef();

  const [dates, setDates] = useState({
    TCAS: '',
    TGAT: '',
    TPAT1: '',
    TPAT2: '',
    TPAT3: '',
    TPAT4: '',
    TPAT5: '',
  });

  const fetchDates = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/dates'); // ดึงข้อมูลจาก API
      const data = await response.json();
      setDates({
        TCAS: new Date(data.TCAS).getTime(),
        TGAT: new Date(data.TGAT).getTime(),
        TPAT1: new Date(data.TPAT1).getTime(),
        TPAT2: new Date(data.TPAT2).getTime(),
        TPAT3: new Date(data.TPAT3).getTime(),
        TPAT4: new Date(data.TPAT4).getTime(),
        TPAT5: new Date(data.TPAT5).getTime(),
      });
    } catch (error) {
      console.error('Error fetching dates:', error);
    }
  };

  const startTimer = () => {
    interval.current = setInterval(() => {
      const now = new Date().toLocaleString('en-US', { timeZone: 'Asia/Bangkok' });
      const currentTimeInThailand = new Date(now).getTime();

      const distanceTCAS = dates.TCAS - currentTimeInThailand;
      const distanceTGAT = dates.TGAT - currentTimeInThailand;
      const distanceTPAT1 = dates.TPAT1 - currentTimeInThailand;
      const distanceTPAT2 = dates.TPAT2 - currentTimeInThailand;
      const distanceTPAT3 = dates.TPAT3 - currentTimeInThailand;
      const distanceTPAT4 = dates.TPAT4 - currentTimeInThailand;
      const distanceTPAT5 = dates.TPAT5 - currentTimeInThailand;

      const calculateTimeLeft = (distance) => {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        return { days, hours, minutes, seconds };
      };

      const timeTCAS = calculateTimeLeft(distanceTCAS);
      const timeTGAT = calculateTimeLeft(distanceTGAT);
      const timeTPAT1 = calculateTimeLeft(distanceTPAT1);
      const timeTPAT2 = calculateTimeLeft(distanceTPAT2);
      const timeTPAT3 = calculateTimeLeft(distanceTPAT3);
      const timeTPAT4 = calculateTimeLeft(distanceTPAT4);
      const timeTPAT5 = calculateTimeLeft(distanceTPAT5);

      if (
        timeTCAS < 0 &&
        timeTGAT < 0 &&
        timeTPAT1 < 0 &&
        timeTPAT2 < 0 &&
        timeTPAT3 < 0 &&
        timeTPAT4 < 0 &&
        timeTPAT5 < 0
      ) {
        clearInterval(interval.current);
      } else {
        onTimeChange({
          TCAS: timeTCAS,
          TGAT: timeTGAT,
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
    fetchDates(); // ดึงข้อมูลจาก API เมื่อ component ถูก mount
  }, []);

  useEffect(() => {
    if (dates.TCAS) {
      startTimer(); // เริ่มจับเวลาหลังจากได้ข้อมูลวันที่แล้ว
    }
    return () => {
      clearInterval(interval.current);
    };
  }, [dates]);

  return null;
};

export default Count;
