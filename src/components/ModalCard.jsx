import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
// import ModalCardCameraPos from './ModalCardCameraPos'

const ModalCard = ({ card }) => {
  return (
    <Link href={card?.url} className='group shadow-lg border border-gray-100 rounded-md flex-1 min-w-[300px] md:max-w-[351px]'>
      <div className=" border border-primary-color rounded-md ">
        <div className=" aspect-video overflow-hidden rounded-md relative bg-secondary">
          <Image src={card?.img} alt={card?.title} fill={true} className='group-hover:scale-125 transition-all w-full h-full object-center' />
          {/* <ModalCardCameraPos /> */}
        </div>
        <div className="p-3">
          <h3 className=' text-primary-color font-bold text-xl capitalize'>{card?.title}</h3>
        </div>
      </div>
    </Link>
    // <Link href={card?.url} className='group  p-2 shadow-lg border border-gray-100 rounded-md flex-1 min-w-[300px] mx-auto'>
    //   <div className=" border border-primary-color rounded-md ">
    //     <div className=" aspect-video overflow-hidden rounded-md relative bg-secondary">
    //       <Image src={card?.img} alt={card?.title} width={100} height={100} className='group-hover:scale-125 transition-all w-full h-full object-center' />
    //       <ModalCardCameraPos />
    //     </div>
    //     <div className="p-4">
    //       <h3 className=' text-primary-color font-bold text-xl capitalize'>{card?.title}</h3>
    //       <p className=' text-secondary text-sm'>{card?.description}</p>
    //     </div>
    //   </div>
    // </Link>
  )
}

export default ModalCard