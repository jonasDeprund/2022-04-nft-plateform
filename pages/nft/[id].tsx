import React from 'react'
import { ThirdwebSDK } from '@thirdweb-dev/sdk'
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react'
import { useAddress, useDisconnect, useMetamask } from '@thirdweb-dev/react'
import { sanityClient, urlFor } from '../../sanity'
import { Collection } from '../../typings'
import { url } from 'inspector'
import { GetServerSideProps } from 'next'

interface Props {
  collection: Collection
}

function NFTDropPage({ collection }: Props) {
  // Auth
  const connectWithMetamask = useMetamask()
  const address = useAddress()
  const disconnect = useDisconnect()
  // ---

  return (
    <div className="flex h-screen flex-col lg:grid lg:grid-cols-10">
      {/* Left part */}
      <div className="bg-gradient-to-br from-cyan-800 to-rose-500 lg:col-span-4">
        <div className="flex flex-col items-center justify-center py-2 lg:min-h-screen">
          <div className="w-44 rounded-xl object-cover lg:h-96 lg:w-72">
            <div className="rounded-xl bg-gradient-to-br from-yellow-400 to-purple-600 p-2">
              <img
                className="w-44 rounded-xl object-cover lg:h-96 lg:w-72"
                src={urlFor(collection.previewImage).url()}
                alt=""
              />
            </div>
            <div className="sapce-y-2 p-5 text-center">
              <h1 className="text-4xl font-bold text-white">
                {collection.nftCollectionName}
              </h1>
              <h2 className="text-xl text-gray-300">
                {collection.description}
              </h2>
            </div>
          </div>
        </div>
      </div>

      {/* Right part */}
      <div className="flex flex-1 flex-col p-12 lg:col-span-6">
        {/* Header */}
        <header className="flex items-center justify-between">
          <h1 className="w-52 cursor-pointer text-xl font-extralight sm:w-80">
            The{' '}
            <span className="font-extrabold underline decoration-pink-600/50">
              {' '}
              Papafam{' '}
            </span>{' '}
            NFT market place
          </h1>
          <button
            onClick={() => (address ? disconnect() : connectWithMetamask())}
            className="rounded-full bg-rose-400 px-4 py-2 text-xs font-bold text-white lg:py-3 lg:px-5 lg:text-base"
          >
            {address ? 'Signed Out' : 'Sign In'}
          </button>
        </header>
        <hr className="my-2 border" />
        {address && (
          <p className="text-center text-sm text-rose-400">
            You're logged in with wallet {address.substring(0, 5)}...
            {address.substring(address.length - 5)}
          </p>
        )}
        {/* Content */}
        <div className="mt-10 flex flex-1 flex-col items-center space-y-6 text-center lg:justify-center lg:space-y-0">
          <img
            className="w-80 object-cover pb-10 lg:h-40"
            src={urlFor(collection.mainImage).url()}
            alt=""
          />
          <h1 className="text-3xl font-bold lg:text-5xl lg:font-extrabold">
            {collection.title}
          </h1>
          <p className="pt-2 text-xl text-green-500">13 / 21 NFT's claim</p>
        </div>
        {/* Mint button */}
        <button className="mt-10 h-16 w-full rounded-full bg-red-600 font-bold text-white">
          Mint NFT (0.01) ETH
        </button>
      </div>
    </div>
  )
}

export default NFTDropPage

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const query = `*[_type == "collection" && slug.current == $id][0]{
    _id,
    title,
    address,
    description,
    nftCollectionName,
    mainImage{
      asset
    },
    previewImage{
      asset
    },
    slug{
      current
    },
    creator->{
      _id,
      name,
      address,
      slug{
        current
      },
    },
  }`
  const collection = await sanityClient.fetch(query, {
    id: params?.id,
  })

  if (!collection) {
    return {
      notFound: true,
    }
  }
  return {
    props: {
      collection,
    },
  }
}
