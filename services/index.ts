import { sanityClient, urlFor } from "./sanity";

export interface RawPhoto {
    _id: string,
    _updatedAt: string,
    mainImage: any
}

export interface Photo {
    id: string,
    updatedAt: string
    imageUrl: string
    image: any
}

export interface RawProject {
    _id: string,
    _updatedAt: string,
    mainImage: any
    body: any
    href?: string
    title: string
}

export interface Project {
    id: string,
    updatedAt: string
    imageUrl: string
    image: any
    body: any
    link?: string
    title: string
}

export async function getPhotos(): Promise<Photo[]> {
    const query = `*[_type == "photo"]| order(_updatedAt desc){
        _id,
        _updatedAt,
        mainImage{
            asset->{
                ...,
                metadata
            }
        }
      }`

    const data: RawPhoto[] = await sanityClient.fetch(query);
    
    return data.map((d) => ({
        id: d._id, 
        updatedAt: d._updatedAt,
        image: d.mainImage,
        imageUrl: ""
    }))
}

export async function getDrawings(): Promise<Photo[]> {
    const query = `*[_type == "drawing"]| order(_updatedAt desc){
        _id,
        _updatedAt,
        mainImage{
            asset->{
                ...,
                metadata
            }
        }
      }`

    const data: RawPhoto[] = await sanityClient.fetch(query);
    
    return data.map((d) => ({
        id: d._id, 
        updatedAt: d._updatedAt,
        image: d.mainImage,
        imageUrl: ""
    }))
}

export async function getProjects(): Promise<Project[]> {
    const query = `*[_type == "project"]| order(_updatedAt asc){
        _id,
        _updatedAt,
        mainImage{
            asset->{
                ...,
                metadata
            }
        },
        body,
        href,
        title
      }`

    const data: RawProject[] = await sanityClient.fetch(query);
    
    return data.map((d) => ({
        id: d._id, 
        updatedAt: d._updatedAt,
        image: d.mainImage,
        imageUrl: "",
        body: d.body,
        link: d.href,
        title: d.title
    }))
}