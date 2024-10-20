// import {
//   Popover,
//   PopoverTrigger,
//   PopoverContent,
// } from '@/components/ui/popover'

// import { urlForImage } from '@/sanity/lib/utils'

// export default function Gallery({ block }: any) {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4 md:p-6">
//       {block.images.map((image: any, key: number) => (
//         <Popover key={key}>
//           <PopoverTrigger asChild>
//             <img
//               src={
//                 urlForImage(image)
//                   ?.width(300)
//                   ?.height(300)
//                   ?.fit('clip')
//                   ?.url() as string
//               }
//               alt={image.alt}
//               width="300"
//               height="300"
//               className="object-cover w-full rounded-lg overflow-hidden"
//               style={{ aspectRatio: '300/300', objectFit: 'cover' }}
//             />
//           </PopoverTrigger>
//           <PopoverContent className="w-auto">
//             <img
//               src={
//                 urlForImage(image)
//                   ?.width(500)
//                   ?.height(500)
//                   ?.fit('clip')
//                   ?.url() as string
//               }
//               alt={image.alt}
//               width="500"
//               height="500"
//               className="object-cover rounded-lg overflow-hidden"
//               style={{ aspectRatio: '500/500', objectFit: 'cover' }}
//             />
//           </PopoverContent>
//         </Popover>
//       ))}

//       <Popover>
//         <PopoverTrigger asChild>
//           <img
//             src="/placeholder.svg"
//             alt="Gallery Image 1"
//             width="300"
//             height="300"
//             className="object-cover w-full rounded-lg overflow-hidden"
//             style={{ aspectRatio: '300/300', objectFit: 'cover' }}
//           />
//         </PopoverTrigger>
//         <PopoverContent className="w-auto">
//           <img
//             src="/placeholder.svg"
//             alt="Gallery Image 1"
//             width="500"
//             height="500"
//             className="object-cover rounded-lg overflow-hidden"
//             style={{ aspectRatio: '500/500', objectFit: 'cover' }}
//           />
//         </PopoverContent>
//       </Popover>
//       <Popover>
//         <PopoverTrigger asChild>
//           <img
//             src="/placeholder.svg"
//             alt="Gallery Image 2"
//             width="300"
//             height="300"
//             className="object-cover w-full rounded-lg overflow-hidden"
//             style={{ aspectRatio: '300/300', objectFit: 'cover' }}
//           />
//         </PopoverTrigger>
//         <PopoverContent className="w-auto">
//           <img
//             src="/placeholder.svg"
//             alt="Gallery Image 2"
//             width="500"
//             height="500"
//             className="object-cover rounded-lg overflow-hidden"
//             style={{ aspectRatio: '500/500', objectFit: 'cover' }}
//           />
//         </PopoverContent>
//       </Popover>
//       <Popover>
//         <PopoverTrigger asChild>
//           <img
//             src="/placeholder.svg"
//             alt="Gallery Image 3"
//             width="300"
//             height="300"
//             className="object-cover w-full rounded-lg overflow-hidden"
//             style={{ aspectRatio: '300/300', objectFit: 'cover' }}
//           />
//         </PopoverTrigger>
//         <PopoverContent className="w-auto">
//           <img
//             src="/placeholder.svg"
//             alt="Gallery Image 3"
//             width="500"
//             height="500"
//             className="object-cover rounded-lg overflow-hidden"
//             style={{ aspectRatio: '500/500', objectFit: 'cover' }}
//           />
//         </PopoverContent>
//       </Popover>
//       <Popover>
//         <PopoverTrigger asChild>
//           <img
//             src="/placeholder.svg"
//             alt="Gallery Image 4"
//             width="300"
//             height="300"
//             className="object-cover w-full rounded-lg overflow-hidden"
//             style={{ aspectRatio: '300/300', objectFit: 'cover' }}
//           />
//         </PopoverTrigger>
//         <PopoverContent className="w-auto">
//           <img
//             src="/placeholder.svg"
//             alt="Gallery Image 4"
//             width="500"
//             height="500"
//             className="object-cover rounded-lg overflow-hidden"
//             style={{ aspectRatio: '500/500', objectFit: 'cover' }}
//           />
//         </PopoverContent>
//       </Popover>
//     </div>
//   )
// }

'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { urlForImage } from '@/sanity/lib/utils'

export default function Gallery({ block }: any) {
  const [isOpen, setIsOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  // const images = [
  //   '/placeholder.svg',
  //   '/placeholder.svg',
  //   '/placeholder.svg',
  //   '/placeholder.svg',
  //   '/placeholder.svg',
  // ]
  const images = block.images.map((image: any) => urlForImage(image))
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    )
  }
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    )
  }
  const handleClose = () => {
    setIsOpen(false)
  }
  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 justify-between">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg cursor-pointer"
            onClick={() => {
              setCurrentIndex(index)
              setIsOpen(true)
            }}
          >
            <img
              src={image}
              alt={`Image ${index + 1}`}
              width={600}
              height={600}
              className="object-cover w-full h-60 transition-all group-hover:scale-105"
              style={{ aspectRatio: '600/600', objectFit: 'cover' }}
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <MicroscopeIcon className="w-8 h-8 text-white" />
            </div>
          </div>
        ))}
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80">
          <div className="relative w-full max-w-5xl mx-4 sm:mx-6 md:mx-8 lg:mx-12 xl:mx-16">
            <img
              src={images[currentIndex]}
              alt={`Image ${currentIndex + 1}`}
              width={1200}
              height={800}
              className="object-contain w-full h-auto"
              style={{ aspectRatio: '1200/800', objectFit: 'cover' }}
            />
            <div className="absolute top-4 right-4">
              <Button
                variant="ghost"
                size="sm"
                className="bg-gray-900/50 hover:bg-gray-900/75 text-white"
                onClick={handleClose}
              >
                <XIcon className="w-5 h-5" />
              </Button>
            </div>
            <div className="absolute inset-y-1/2 flex justify-between w-full px-4">
              <Button
                variant="ghost"
                size="sm"
                className="bg-gray-900/50 hover:bg-gray-900/75 text-white"
                onClick={handlePrevious}
              >
                <ChevronLeftIcon className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="bg-gray-900/50 hover:bg-gray-900/75 text-white"
                onClick={handleNext}
              >
                <ChevronRightIcon className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

function ChevronLeftIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15 18-6-6 6-6" />
    </svg>
  )
}

function ChevronRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}

function MicroscopeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 18h8" />
      <path d="M3 22h18" />
      <path d="M14 22a7 7 0 1 0 0-14h-1" />
      <path d="M9 14h2" />
      <path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" />
      <path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
    </svg>
  )
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
