import React from 'react'

const OutLineBtn = ({ icon, title }) => {
  return (
    <span className="text-orange-400 w-fit rounded-full mb-2 mt-2 font-thin text-sm border border-[#FEB55E] flex flex-row items-center">
      {icon}
      <span className="pl-2 pr-2 py-1 ">{title}</span>
    </span>
  )
}

export default OutLineBtn
