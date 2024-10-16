import React from 'react'
import { Link } from 'react-router-dom'

const DetailCard = ({link, title, description, imageSrc, color}) => {
  return (
    <Link to={link} className={`p-8 ${color} w-[50%] flex justify-between items-center hover:cursor-pointer`}>  
    <div className="max-w-[60%] flex flex-col gap-6 text-white text-xl">
      <div className="text-[32px] font-bold">{title}</div>
      <div>
       {description}
      </div>
    </div>
    <div className="">
        <img
          src={imageSrc}
          className="lg:h-[180px] h-[150px] flex-1"
          alt="logo"
        />
    </div>
  </Link>
  )
}

export default DetailCard
