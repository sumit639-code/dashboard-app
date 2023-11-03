import React from 'react'
import '@/style/mainpage.css';
import Sidebar from '@/components/sidebar';

const main = () => {
  return (
    <div className='main'>
      <div className='main-box'>
        <Sidebar/>
      </div>

    </div>
  )
}

export default main;