import React from 'react'

const OutLineBtnHero = ({ myStyle, icon, title }) => {
  return (
    <span
      className={`${myStyle} customRbg text-white w-fit rounded-full mb-2 mt-2 font-thin text-sm border border-[#FFFFFF] flex flex-row items-center`}
    >
      {icon}
      <span className="pl-2 pr-2 py-1 ">{title}</span>
    </span>
  )
}

export default OutLineBtnHero
