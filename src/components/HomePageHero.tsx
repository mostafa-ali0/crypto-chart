import React from 'react'

export default function HomePageHero() {
  return (
    <div className="bg-black h-[93vh] relative">
    <h2 className="ml-[13vw] text-7xl pt-[200px] text-white">
      Welcome to <span className="text-slate-900 bg-slate-100 shadow-xl p-4 hover:blur-sm cursor-default">MoToken</span>
    </h2>
    <h3 className="text-3xl text-slate-300 ml-[13.5vw] mt-4">Crypto made easy</h3>
    <div className="h-[400px] w-[400px] bg-white rounded-[50%] absolute top-[275px] left-[65vw] flex justify-center items-center text-9xl rounded-br-none	">💸</div>
  </div>
  )
}
