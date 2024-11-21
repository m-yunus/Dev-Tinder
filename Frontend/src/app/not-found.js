import Footer from '@/Components/layout/Footer'
import Header from '@/Components/layout/Header'
import React from 'react'

const NotFound = () => {
  return (
    <>
   <Header/>

   <main>
   <div className="flex items-center justify-center h-screen bg-black">
    <div className="text-center text-white">
      <h1 className="text-6xl font-bold">404</h1>   
      <p className="text-2xl">Page Not Found</p>
      <p className="text-lg">Sorry, the page you are looking for could not be founds
      </p>
    </div>
  </div>
   </main>
   <Footer/>
   </>
  )
}

export default NotFound