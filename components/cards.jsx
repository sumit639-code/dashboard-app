import React from 'react';
import Carddata from '@/data/data.json';


const cards = () => {
  console.log(Carddata);
  return (
    <>
    <div className="cards">
        {Carddata.map((dat)=>{
          return <>
            <div className='cardbox' key={dat.id} style={{backgroundColor:dat.color}}>
              <span className="circle">

              </span>
              <span className="cost">{dat.cost}</span>
              <span className="tit">{dat.title}</span>
              <span className="time">{dat.time}</span>
            </div>
          </>
        })}
    </div>
    </>
  )
}

export default cards