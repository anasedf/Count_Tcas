import React, { useState } from 'react';
import Count from '../../layout/Count';

import './ContentStyle.css';

function Content() {

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
    <section id='content'>

      <section className='container'>
        {parseInt(time.TGAT.days) >= 10 && (
        <section className='-card'>
          <section className='-head'>TGAT</section>
          <section className='-box'>
            <section className='-time'>
              <span className='-days'>{time.TGAT.days}</span>
              <span>วัน</span>
            </section>
            <span className='-detail'>8 ธันวาคม 2567</span>
          </section>
        </section>
        )}
      </section>

      <section className='container'>
        <section className='-card'>

          <section className='-head'>TPAT1</section>

          <section className='-box'>
            <section className='-time'>
              <span className='-days'>{time.TPAT1.days}</span>
              <span>วัน</span>
            </section>
            <span className='-detail'>14 ธันวาคม 2567</span>
          </section>
        </section>
      </section>

      <section className='container'>
        <section className='-card'>

          <section className='-head'>TPAT2</section>

          <section className='-box'>
            <section className='-time'>
              <span className='-days'>{time.TPAT2.days}</span>
              <span>วัน</span>
            </section>
            <span className='-detail'>7 ธันวาคม 2567</span>
          </section>
        </section>
      </section>

      <section className='container'>
        <section className='-card'>

          <section className='-head'>TPAT3</section>

          <section className='-box'>
            <section className='-time'>
              <span className='-days'>{time.TPAT3.days}</span>
              <span>วัน</span>
            </section>
            <span className='-detail'>8 ธันวาคม 2567</span>
          </section>
        </section>
      </section>

      <section className='container'>
        <section className='-card'>

          <section className='-head'>TPAT4</section>

          <section className='-box'>
            <section className='-time'>
              <span className='-days'>{time.TPAT4.days}</span>
              <span>วัน</span>
            </section>
            <span className='-detail'>9 ธันวาคม 2567</span>
          </section>
        </section>
      </section>

      <section className='container'>
        <section className='-card'>

          <section className='-head'>TPAT5</section>

          <section className='-box'>
            <section className='-time'>
              <span className='-days'>{time.TPAT5.days}</span>
              <span>วัน</span>
              <span className='-detail'>7 ธันวาคม 2567</span>
            </section>
          </section>
        </section>
      </section>

      <Count onTimeChange={setTime} />

    </section>

  )
}

export default Content