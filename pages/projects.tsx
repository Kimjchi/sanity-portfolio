import Link from 'next/link'
import { SanityImageObject } from '@sanity/image-url/lib/types/types';
import { useNextSanityImage } from 'next-sanity-image';
import React, { useState } from 'react'
import Modal, { ModalSize } from '../components/Modal';
import NextSanityImage from '../components/NextSanityImage';
import { getProjects, Project } from '../services';
import { sanityClient } from '../services/sanity';

interface ProjectsProps {
    projects: Project[];
}

export default function projects({projects}: ProjectsProps){
  const [isModalHidden, setIsModalHidden] = useState<boolean>(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  return (
    <div className='container mx-auto px-5 mb-16'>
        <div className='grid md:grid-cols-2 grid-cols-1 gap-5'>
        {
          projects.map(project => 
            {
              const imageProps = useNextSanityImage(
                sanityClient,
                project.image as SanityImageObject,
              );
              if (imageProps)
                return (
                  <span className='flex relative' key={project.id} >
                    <NextSanityImage 
                      key={project.id} 
                      image={project.image}   
                      imageProps={imageProps}     
                    />
                    <span className='cursor-pointer absolute w-full h-full bg-black bg-opacity-0 hover:bg-opacity-20' onClick={() => {setIsModalHidden(false); setSelectedProject(project)}}/>
                  </span>
              )
          }
          )
        }
        </div>
        {!isModalHidden && <Modal setIsHidden={setIsModalHidden} size={ModalSize.half} isCenteredVertically>
        <ModalBody selectedProject={selectedProject} />
      </Modal>}
    </div>
  )
}

export const getServerSideProps = async () => {
    const projects = await getProjects() || [];
    
    return {
      props: {
        projects
      }
    }
}

interface ModalBodyProps {
    selectedProject: Project | null
  }
  
  function ModalBody ({selectedProject}: ModalBodyProps) {

    return <div className='modalBody flex justify-center flex-col text-center px-5 py-8'>
        <h2 className='font-semibold text-3xl'>{selectedProject?.title}</h2>
        <div className='py-5 text-sm'>
            {selectedProject?.body.map((data: any) => 
                data.children.map((child: any) => 
                    <p>{child.text}</p>
                )
            )}
        </div>
        {selectedProject && selectedProject.link && <Link href={selectedProject?.link}>
            <div className='text-sm mx-auto border rounded-lg mt-3 mb-5 text-center w-20 px-2 py-2 hover:bg-gray-100 cursor-pointer'>
                LINK
            </div>
        </Link>}
    </div>
  }