import React from 'react'

function NFTDropPage() {
  return (
    <div className="flex h-screen flex-col">
      {/* {Left part} */}
      <div className="bg-gradient-to-br from-cyan-800 to-rose-500">
        <div className="flex flex-col items-center justify-center py-2 lg:min-h-screen">
          <div className="w-44 rounded-xl object-cover lg:h-96 lg:w-72">
            <div className="rounded-xl bg-gradient-to-br from-yellow-400 to-purple-600 p-2">
              <img src="https://links.papareact.com/8sg" alt="" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-white">Jojo Apes</h1>
              <h2 className="text-xl text-gray-300">A collection of Apes</h2>
            </div>
          </div>
        </div>
      </div>

      {/* {Right part} */}
      <div></div>
    </div>
  )
}

export default NFTDropPage
