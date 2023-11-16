import React from 'react'

const BlueFiller = () => {
  return (
    <div className='bg-bluefiller w-full h-[12rem]'>
      <div className='w-full h-[2.25rem] flex justify-center factoriathin uppercase text-[#31261d] text-2xl'>
        <span className='bg-[#68ace5] px-2 factoriabook '>explore</span>
      </div>
      <div className='w-[60%] mx-[30%] flex mt-8 h-[3rem]'>
        <div className='proximanovabold text-white text-lg   border-r-2 border-[#68ace5] px-6 hover:bg-[#68ace5] transition-all py-2'>Dentistry</div>
        <div className='proximanovabold text-white text-lg px-6 border-l-2 border-r-2 border-[#68ace5] hover:bg-[#68ace5] transition-all py-2'>Management</div>
        <div className='proximanovabold text-white text-lg px-6 border-l-2 border-r-2 border-[#68ace5] hover:bg-[#68ace5] transition-all py-2'>Engineering</div>
        <div className='proximanovabold text-white text-lg px-6 border-l-2 border-r-2 border-[#68ace5] hover:bg-[#68ace5] transition-all py-2'>Nursing</div>
        <div className='proximanovabold text-white text-lg px-6 border-l-2  border-[#68ace5] hover:bg-[#68ace5] transition-all py-2'>Pharmacy</div>

      </div>
    </div>
  )
}

export default BlueFiller;