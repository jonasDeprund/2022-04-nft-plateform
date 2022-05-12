import React from 'react'

function NFTDropPage() {
  return (
    <div className="flex h-screen flex-col lg:grid lg:grid-cols-10">
      {/* Left part */}
      <div className="bg-gradient-to-br from-cyan-800 to-rose-500 lg:col-span-4">
        <div className="flex flex-col items-center justify-center py-2 lg:min-h-screen">
          <div className="w-44 rounded-xl object-cover lg:h-96 lg:w-72">
            <div className="rounded-xl bg-gradient-to-br from-yellow-400 to-purple-600 p-2">
              <img src="https://links.papareact.com/8sg" alt="" />
            </div>
            <div className="sapce-y-2 p-5 text-center">
              <h1 className="text-4xl font-bold text-white">Jojo Apes</h1>
              <h2 className="text-xl text-gray-300">A collection of Apes</h2>
            </div>
          </div>
        </div>
      </div>

      {/* Right part */}
      <div>
        {/* Header */}
        <h1 className="w-52 cursor-pointer text-xl font-extralight sm:w-80">
          The{' '}
          <span className="font-extrabold underline decoration-pink-600/50">
            {' '}
            Papafam{' '}
          </span>{' '}
          NFT market place
        </h1>
        <button>Sign In</button>
        {/* Content */}
        {/* Mint button */}
      </div>
    </div>
  )
}

export default NFTDropPage
