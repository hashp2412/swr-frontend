import React from 'react'

const ImageSection = () => {
  return (
    <>
     <div className='w-full h-[14rem] bg-yellow-100 flex'>
       <div className='w-[16.7%] h-full'>
        <img src='/student1.JPG' className='w-full h-full object-cover' alt=''/>
       </div>
       <div className='w-[16.7%] h-full'>
       <img src='/student2.JPG' className='w-full h-full object-cover' alt=''/>
       </div>
       <div className='w-[16.7%] h-full'>
       <img src='/student4.JPG' className='w-full h-full object-cover' alt=''/>
       </div>
       <div className='w-[16.7%] h-full'>
       <img src='/student2.JPG' className='w-full h-full object-cover' alt=''/>
       </div>
       <div className='w-[16.7%] h-full'>
       <img src='/student4.JPG' className='w-full h-full object-cover' alt=''/>
       </div>
       <div className='w-[16.7%] h-full'>
       <img src='/student1.JPG' className='w-full h-full object-cover' alt=''/>
       </div>
     </div>
    </>
  )
}

export default ImageSection;