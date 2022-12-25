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