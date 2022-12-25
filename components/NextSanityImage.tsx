import React from 'react'
import Image from 'next/image'

interface NextSanityImageProps {
    image: any
    imageProps: any
}
export default function NextSanityImage({image, imageProps}:NextSanityImageProps) {
  return (
    <Image
			{...imageProps}
            style={{width: '100%', height: '100%' }}
			placeholder="blur"
			blurDataURL={image.asset.metadata.lqip}
            objectFit='cover'
		/>
  )
}