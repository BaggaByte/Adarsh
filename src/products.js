// Automatically load all images from the gallery folders.
// You can simply drop your images into the corresponding folder:
// src/assets/gallery/living, src/assets/gallery/outdoor, src/assets/gallery/chandeliers
const imageFiles = import.meta.glob('./assets/gallery/**/*.{png,jpg,jpeg,webp,avif}', { 
  eager: true, 
  query: '?url',
  import: 'default'
})

export const products = Object.keys(imageFiles).map((path, index) => {
  // Extract category and filename from the path
  // path example: './assets/gallery/living/Amber Arc Floor Lamp.png'
  const pathParts = path.split('/')
  const filename = pathParts.pop()
  const category = pathParts.pop() // The folder name (e.g., 'living')

  // Create a clean name from the filename
  const cleanName = filename.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " ")

  return {
    id: index + 1,
    category: category,
    // Note: Since names are generated from files, English and Hindi will use the same filename.
    // Ensure you name your files nicely (e.g., "Crystal Chandelier.png")
    name: { en: cleanName, hi: cleanName },
    image: imageFiles[path],
  }
})
