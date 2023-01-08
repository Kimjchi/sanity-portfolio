import { SanityImageObject } from '@sanity/image-url/lib/types/types';
import { ImageUrlBuilder, useNextSanityImage } from 'next-sanity-image';
import Head from 'next/head'
import { useState } from 'react';
import NextSanityImage from '../components/NextSanityImage';
import Modal from '../components/Modal';
import { getPhotos, Photo } from '../services'
import { sanityClient } from '../services/sanity';


interface HomeProps {
  photos: Photo[]
}

const Home = ({
  photos
}: HomeProps) => {
  const [isModalHidden, setIsModalHidden] = useState<boolean>(true);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const myCustomImageBuilder = (imageUrlBuilder: ImageUrlBuilder, options: any) => {
    return imageUrlBuilder.width(options.width || Math.min(options.originalImageDimensions.width, 800)).fit('max');
};

  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>KIM</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='text-4xl container font-semibold text-center px-16 my-28'>
      Jérémy Kim is a lazy, trying to be creative, French Full Stack Developer based (currently) in Paris.
      </div>      
      <div className='grid grid-cols-2 grid-flow-dense'>
        {
          photos.map(photo => 
            {
              const imageProps = useNextSanityImage(
                sanityClient,
                photo.image as SanityImageObject,
                    { imageBuilder: myCustomImageBuilder }
              );
              if (imageProps)
                return (
                  <span className='flex hover:cursor-pointer relative'key={photo.id} style={{
                    gridRowEnd: `span ${getSpanEstimate(imageProps.height)}`,
                }}>
                    <NextSanityImage 
                      key={photo.id} 
                      image={photo.image}   
                      imageProps={imageProps}     
                    />
                    <span className='absolute w-full h-full bg-black bg-opacity-0 hover:bg-opacity-20' onClick={() => {setIsModalHidden(false); setSelectedPhoto(photo)}}/>
                  </span>
              )
          }
          )
        }
      </div>
      {!isModalHidden && <Modal setIsHidden={setIsModalHidden}>
        <ModalBody selectedPhoto={selectedPhoto} />
      </Modal>}
    </div>
  )
}

export default Home

function getSpanEstimate(size: number) {
  if (size > 716) {
    return 2
  }
  return 1
}

export const getServerSideProps = async () => {
  const photos = await getPhotos() || [];
  
  return {
    props: {
      photos
    }
  }
}

interface ModalBodyProps {
  selectedPhoto: Photo | null
}

function ModalBody ({selectedPhoto}: ModalBodyProps) {
  const myCustomImageBuilder = (imageUrlBuilder: ImageUrlBuilder, options: any) => {
    return imageUrlBuilder.width(options.originalImageDimensions.width).fit('max');
};
  const selectedImageProps = useNextSanityImage(
    sanityClient,
    selectedPhoto?.image as SanityImageObject,
    { imageBuilder: myCustomImageBuilder }
  )
  return <div className='modalBody flex justify-center'>
    <NextSanityImage 
      key={selectedPhoto?.id} 
      image={selectedPhoto?.image}   
      imageProps={selectedImageProps}     
    />
</div>
}