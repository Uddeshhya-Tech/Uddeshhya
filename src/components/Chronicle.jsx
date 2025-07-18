"use client"

import { useState, useEffect } from "react"
import { collection, getDocs } from "firebase/firestore"
import { db } from "../firebase.js" // Assuming you have a Firebase config file
import Carousel from "./DemoCar.jsx"

export default function CarouselDemo() {
  const [slideData, setSlideData] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchChronicles = async () => {
      try {
        setLoading(true)
        const chroniclesCollection = collection(db, "chronicles")
        const chroniclesSnapshot = await getDocs(chroniclesCollection)
        
        const chroniclesData = chroniclesSnapshot.docs.map(doc => {
          const data = doc.data()
          return {
            id: doc.id,
            title: data.month + " "+data.year || "Untitled",
            button:  "Full Screen", 
            src: data.imageUrl || "https://images.unsplash.com/photo-1590041794748-2d8eb73a571c",
            // You can add other fields you might need
            description: data.description,
            date: data.date
          }
        })
        
        setSlideData(chroniclesData)
        setLoading(false)
      } catch (err) {
        console.error("Error fetching chronicles:", err)
        setError("Failed to load chronicles data. Please try again later.")
        setLoading(false)
      }
    }

    fetchChronicles()
  }, [])

  // Default data in case the fetch fails or while loading
  const defaultSlides = [
    {
      title: "Mystic Mountains",
      button: "Explore Component",
      src: "https://images.unsplash.com/photo-1494806812796-244fe51b774d?q=80&w=3534&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Urban Dreams",
      button: "Explore Component",
      src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    }
  ]

  return (
    <div className="bg-custom-gradient min-h-1/2">
      <h1 className="text-4xl lg:text-5xl font-bold pb-4 pt-8 mt-16 lg:py-6 text-center md:text-end px-0 md:px-28">
        Our <span className="text-[#E74646]">Chronicles</span>
      </h1>
      <div className="relative overflow-hidden w-full h-full pb-20">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#E74646]"></div>
          </div>
        ) : error ? (
          <div className="text-center text-red-500 p-4">
            {error}
            <div className="mt-4">
              <Carousel slides={defaultSlides} />
            </div>
          </div>
        ) : slideData.length > 0 ? (
          <Carousel slides={slideData} />
        ) : (
          <div className="text-center p-4">
            <p>No chronicles found. Check back soon!</p>
            <div className="mt-4">
              <Carousel slides={defaultSlides} />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}