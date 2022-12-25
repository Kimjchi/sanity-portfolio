import { createClient, createCurrentUserHook } from "next-sanity"
import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId: process.env.NEXT_PUBLIC_SANITY_ID || "",
    apiVersion: "2022-11-13",
    useCdn: process.env.NODE_ENV == "production",
}

export const sanityClient = createClient(config);

export const urlFor = (source: SanityImageSource) => imageUrlBuilder(config).image(source)

export const useCurrentUser = createCurrentUserHook(config)