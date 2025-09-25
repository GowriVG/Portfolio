import React from 'react'
import { DiRedis } from "react-icons/di"
import { RiReactjsLine } from "react-icons/ri"
import { SiMongodb, SiHtml5, SiCss3, SiJavascript, SiAngular} from "react-icons/si"
import { SiDotnet } from "react-icons/si"


import { TbBrandNextjs } from "react-icons/tb"
import { FaNodeJs } from "react-icons/fa"

const Technologies = () => {
  return (
    <div className="pb-24">
      <h2 className='my-3 text-center text-4xl'>Technologies</h2>
       <div className="w-50 h-1 bg-purple-500 mx-auto mt-4"></div>
      <div className="my-3 overflow-x-auto flex flex-nowrap gap-4 py-4 scroll-smooth scrollbar-thin">
        <div className="flex-shrink-0 p-4">
          <SiHtml5 className="text-7xl text-orange-600" />
        </div>
        <div className="flex-shrink-0 p-4">
          <SiCss3 className="text-7xl text-blue-600" />
        </div>
        <div className="flex-shrink-0 p-4">
          <SiJavascript className="text-7xl text-yellow-400" />
        </div>
        <div className="flex-shrink-0 p-4">
          <SiAngular className="text-7xl text-red-600" />
        </div>
        <div className="flex-shrink-0 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </div>
        <div className="flex-shrink-0 p-4">
          <TbBrandNextjs className="text-7xl" />
        </div>
        <div className="flex-shrink-0 p-4">
          <SiMongodb className="text-7xl text-cyan-500" />
        </div>
        <div className="flex-shrink-0 p-4">
          <DiRedis className="text-7xl text-red-700" />
        </div>
        <div className="flex-shrink-0 p-4">
          <FaNodeJs className="text-7xl text-green-500" />
        </div>
        {/* <div className="flex-shrink-0 p-4">
          <SiCsharp className="text-7xl text-green-600" />
        </div> */}

        <div className="flex-shrink-0 p-4">
          <SiDotnet className="text-7xl text-green-600" title="C#" />
        </div>

      </div>
    </div>
  )
}

export default Technologies
