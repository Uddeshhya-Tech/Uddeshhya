"use client"
import { ArrowRight, X } from "lucide-react"
import { useState, useRef, useId, useEffect } from "react"
import PropTypes from "prop-types"

// Image Popup Component
const ImagePopup = ({ isOpen, onClose, image, title }) => {
  // Close popup when Escape key is pressed
  useEffect(() => {
    if (!isOpen) return;

    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    
    window.addEventListener('keydown', handleEscKey);
    
    // Prevent body scrolling when popup is open
    document.body.style.overflow = 'hidden';
    
    return () => {
      window.removeEventListener('keydown', handleEscKey);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-2 sm:p-4">
    <div className="w-full max-w-7xl sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] relative pt-8 sm:pt-12 md:pt-16">
      <button
        onClick={onClose}
        className="absolute top-9 right-2 sm:top-12 sm:right-16 md:top-20 md:right-6 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
        aria-label="Close popup"
      >
        <X size={20} className="text-white sm:hidden" />
        <X size={24} className="text-white hidden sm:block" />
      </button>
      
      <div className="bg-black/40 p-2 sm:p-3 md:p-4 rounded-lg">
        <h2 className="text-white text-lg sm:text-xl md:text-2xl font-medium mb-2 sm:mb-3 md:mb-4">{title}</h2>
        <div className="overflow-hidden rounded-md">
          <img
            src={image}
            alt={title}
            className="w-full h-auto object-contain max-h-[60vh] sm:max-h-[65vh] md:max-h-[70vh]"
            loading="eager"
          />
        </div>
      </div>
    </div>
  </div>
  );
};

ImagePopup.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

const Slide = ({ slide, index, current, handleSlideClick, openPopup }) => {
  const slideRef = useRef(null)
  const xRef = useRef(0)
  const yRef = useRef(0)
  const frameRef = useRef()

  useEffect(() => {
    const animate = () => {
      if (!slideRef.current) return

      const x = xRef.current
      const y = yRef.current

      slideRef.current.style.setProperty("--x", `${x}px`)
      slideRef.current.style.setProperty("--y", `${y}px`)

      frameRef.current = requestAnimationFrame(animate)
    }

    frameRef.current = requestAnimationFrame(animate)

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current)
      }
    }
  }, [])

  const handleMouseMove = (event) => {
    const el = slideRef.current
    if (!el) return

    const r = el.getBoundingClientRect()
    xRef.current = event.clientX - (r.left + Math.floor(r.width / 2))
    yRef.current = event.clientY - (r.top + Math.floor(r.height / 2))
  }

  const handleMouseLeave = () => {
    xRef.current = 0
    yRef.current = 0
  }

  const imageLoaded = (event) => {
    event.currentTarget.style.opacity = "1"
  }

  const { src, button, title } = slide

  return (
    <div className="[perspective:1200px] [transform-style:preserve-3d]">
      <li
        ref={slideRef}
        className="flex flex-1 flex-col items-center justify-center relative text-center text-white opacity-100 transition-all duration-300 ease-in-out w-[70vmin] h-[70vmin] mx-[4vmin] z-10 "
        onClick={() => handleSlideClick(index)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: current !== index ? "scale(0.98) rotateX(8deg)" : "scale(1) rotateX(0deg)",
          transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
          transformOrigin: "bottom",
        }}
      >
        <div
          className="absolute top-0 left-0 w-full h-full bg-[#1D1F2F] rounded-[1%] overflow-hidden transition-all duration-150 ease-out"
          style={{
            transform: current === index ? "translate3d(calc(var(--x) / 30), calc(var(--y) / 30), 0)" : "none",
          }}
        >
          <img
            className="absolute inset-0 w-[120%] h-[120%] object-cover opacity-100 transition-opacity duration-600 ease-in-out"
            style={{
              opacity: current === index ? 1 : 0.5,
            }}
            alt={title}
            src={src}
            onLoad={imageLoaded}
            loading="eager"
            decoding="sync"
          />
          {current === index && <div className="absolute inset-0 bg-black/30 transition-all duration-1000" />}
        </div>

        <article
          className={`relative p-[4vmin] transition-opacity duration-1000 ease-in-out ${
            current === index ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <h2 className="text-lg md:text-2xl lg:text-4xl font-semibold relative">{title}</h2>
          <div className="flex justify-center">
            <button 
              className="mt-6 px-4 py-2 w-fit mx-auto sm:text-sm text-black bg-white h-12 border border-transparent text-xs flex justify-center items-center rounded-2xl hover:shadow-lg transition duration-200 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
              onClick={(e) => {
                e.stopPropagation(); // Prevent triggering slide click
                openPopup(slide);
              }}
            >
              {button}
            </button>
          </div>
        </article>
      </li>
    </div>
  )
}

Slide.propTypes = {
  slide: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  current: PropTypes.number.isRequired,
  handleSlideClick: PropTypes.func.isRequired,
  openPopup: PropTypes.func.isRequired
}

const CarouselControl = ({ type, title, handleClick }) => {
  return (
    <button
      className={`w-10 h-10 flex items-center mx-2 justify-center bg-neutral-200 dark:bg-neutral-800 border-3 border-transparent rounded-full focus:border-[#6D64F7] focus:outline-none hover:-translate-y-0.5 active:translate-y-0.5 transition duration-200 ${
        type === "previous" ? "rotate-180" : ""
      }`}
      title={title}
      onClick={handleClick}
    >
      <ArrowRight className="text-neutral-600 dark:text-neutral-200" />
    </button>
  )
}

CarouselControl.propTypes = {
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
}

export default function Carousel({ slides }) {
  const [current, setCurrent] = useState(0)
  const [popupVisible, setPopupVisible] = useState(false)
  const [activeSlide, setActiveSlide] = useState(null)

  const handlePreviousClick = () => {
    const previous = current - 1
    setCurrent(previous < 0 ? slides.length - 1 : previous)
  }

  const handleNextClick = () => {
    const next = current + 1
    setCurrent(next === slides.length ? 0 : next)
  }

  const handleSlideClick = (index) => {
    if (current !== index) {
      setCurrent(index)
    }
  }
  
  const openPopup = (slide) => {
    setActiveSlide(slide)
    setPopupVisible(true)
  }
  
  const closePopup = () => {
    setPopupVisible(false)
  }

  const id = useId()

  return (
    <>
      <div className="relative w-[70vmin] h-[70vmin] mx-auto" aria-labelledby={`carousel-heading-${id}`}>
        <ul
          className="absolute flex mx-[-4vmin] transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateX(-${current * (100 / slides.length)}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <Slide 
              key={index} 
              slide={slide} 
              index={index} 
              current={current} 
              handleSlideClick={handleSlideClick}
              openPopup={openPopup}
            />
          ))}
        </ul>

        <div className="absolute flex justify-center w-full top-[calc(100%+1rem)]">
          <CarouselControl type="previous" title="Go to previous slide" handleClick={handlePreviousClick} />
          <CarouselControl type="next" title="Go to next slide" handleClick={handleNextClick} />
        </div>
      </div>
      
      {/* Image Popup */}
      {activeSlide && (
        <ImagePopup 
          isOpen={popupVisible}
          onClose={closePopup}
          image={activeSlide.src}
          title={activeSlide.title}
        />
      )}
    </>
  )
}

Carousel.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.object).isRequired,
};