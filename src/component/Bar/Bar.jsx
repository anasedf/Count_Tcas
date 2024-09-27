import React, { useState } from 'react';
import Count from '../../layout/Count';
import './BarStyle.css';

function Bar() {
  const [time, setTime] = useState({
    TCAS: { days: '00', hours: '00', minutes: '00', seconds: '00' },
    TGAT: { days: '00', hours: '00', minutes: '00', seconds: '00' },
    TPAT1: { days: '00', hours: '00', minutes: '00', seconds: '00' },
    TPAT2: { days: '00', hours: '00', minutes: '00', seconds: '00' },
    TPAT3: { days: '00', hours: '00', minutes: '00', seconds: '00' },
    TPAT4: { days: '00', hours: '00', minutes: '00', seconds: '00' },
    TPAT5: { days: '00', hours: '00', minutes: '00', seconds: '00' },

  });

  return (
    <section id="bar">
      <section className="-box">
        <section className="-up">
          UP COMMING
        </section>

        <section className="-now">
          <div className="-text">
            เปิดระบบ ลงทะเบียน tacs วันที่ 28 ต.ค. 2567 เวลา 09.00 น.
          </div>
          <div className="-time">
            <div className="countdown-box">{time.TCAS.days}</div>
            <div className="countdown-box">{time.TCAS.hours}</div>
            <div className="countdown-box">{time.TCAS.minutes}</div>
            <div className="countdown-box">{time.TCAS.seconds}</div>
          </div>
        </section>
      </section>

      {/* ใช้ Time ที่นี่ */}
      <Count onTimeChange={setTime} />
    </section>
  );
}

export default Bar;
