import { Inter } from 'next/font/google'
import './globals.css'
import '@/style/mainpage.css';
import Sidebar from '@/components/sidebar';


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body ><div className='main'>
      <div className='main-box'>
        <Sidebar/>
        {children}
      </div>

    </div></body>
    </html>
  )
}
