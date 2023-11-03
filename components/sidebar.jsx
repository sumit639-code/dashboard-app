import React from 'react'
import '@/style/sidebar.css'
import Image from 'next/image'
const sidebar = () => {
  return (
    <>
        <div className="sidebar">
            <span className="title">
                <Image></Image>
            </span>
        </div>
    </>
  )
}

export default sidebar