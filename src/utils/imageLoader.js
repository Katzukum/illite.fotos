/**
 * Utility to load images from the public/images folders using manifests.
 */

export const loadImages = async (category) => {
  try {
    const response = await fetch(`/images/${category}/manifest.json`);
    if (!response.ok) throw new Error(`Failed to load manifest for ${category}`);
    const filenames = await response.json();
    return filenames.map(name => `/images/${category}/${name}`);
  } catch (error) {
    console.error(`Error loading images for ${category}:`, error);
    return [];
  }
};

export const loadRandomImages = async (category, count) => {
  const allImages = await loadImages(category);
  if (allImages.length === 0) return [];
  
  const shuffled = [...allImages].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export const loadPublishedWorks = async () => {
  try {
    const response = await fetch('/images/published/metadata.json');
    if (!response.ok) throw new Error('Failed to load published works metadata');
    const metadata = await response.json();
    
    return Object.entries(metadata).map(([filename, data]) => ({
      src: `/images/published/${filename}`,
      ...data
    }));
  } catch (error) {
    console.error('Error loading published works:', error);
    return [];
  }
};
