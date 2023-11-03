import React from 'react'
import '@/style/mainpage.css';
import Sidebar from '@/components/sidebar';
import Maindash from '@/components/maindash';

const main = () => {
  return (
    <div className='main'>
      <div className='main-box'>
        <Sidebar/>
        <Maindash/>
      </div>

    </div>
  )
}

export default main;