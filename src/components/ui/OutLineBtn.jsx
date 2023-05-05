import React from 'react'

const OutLineBtn = ({ title }) => {
  return (
    <span className="w-fit rounded-2xl mb-2 mt-2 font-thin text-sm border border-rose-600 flex flex-row justify-between">
      <span className="pr-2 pl-1 py-1  ">Icon</span>
      <span className="pl-2 pr-1 py-1 ">{title}</span>
    </span>
  )
}

export default OutLineBtn
