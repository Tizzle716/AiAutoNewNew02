import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Initialize the Sanity client
export const sanityClient = createClient({
  projectId: 'vgztws2n',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-05-03',
});

// Initialize the image URL builder
const builder = imageUrlBuilder(sanityClient);

// Helper function to generate image URLs
export function urlFor(source: any) {
  return builder.image(source);
}