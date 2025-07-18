import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../utils/cn";

type Card = {
  id: number;
  content: JSX.Element | React.ReactNode | string;
  className: string;
  thumbnail: string;
};

const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  const [selected, setSelected] = useState<number | null>(null);
  const isMobileView = window.innerWidth <= 768; // Adjust breakpoint as needed

  const handleCardInteraction = (cardId: number) => {
    if (isMobileView) {
      setSelected(selected === cardId ? null : cardId); // Toggle selection on click for mobile view
    } else {
      setSelected(cardId); // Set selected card on hover for desktop view
    }
  };

  return (
    <div className="w-full h-full pb-4 grid grid-cols-1 grid-rows-12 md:grid-cols-3 max-w-7xl mx-auto gap-4 relative">
      {cards.map((card, i) => (
        <motion.div
          key={i}
          className={cn(card.className, "relative overflow-hidden rounded-xl")}
          whileHover={!isMobileView ? { scale: 1 } : undefined} // Scale on hover only in desktop view
          whileTap={isMobileView ? { scale: 1.05 } : undefined} // Scale on tap/click in mobile view
          onTap={() => handleCardInteraction(card.id)} // Handle click/tap event for mobile view
          onHoverStart={() => !isMobileView && setSelected(card.id)} // Set hovered state on desktop hover
          onHoverEnd={() => !isMobileView && setSelected(null)} // Clear hovered state on desktop hover end
          layout
        >
          <BlurImage card={card} />
          {selected === card.id && <SelectedCard selected={card} />}
        </motion.div>
      ))}
    </div>
  );
};

const BlurImage = ({ card }: { card: Card }) => {
  const [loaded, setLoaded] = useState(false);
  
  return (
    <img
      src={card.thumbnail}
      height={500}
      width={500}
      onLoad={() => setLoaded(true)}
      className={cn(
        "object-cover absolute inset-0 h-full w-full transition duration-200",
        loaded ? "blur-none" : "blur-md"
      )}
      alt="thumbnail"
    />
  );
};

const SelectedCard = ({ selected }: { selected: Card }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: "-50%", // Center horizontally
        y: "100%", // Start from bottom
      }}
      animate={{
        opacity: 1,
        x: "-50%", // Center horizontally
        y: "-10%", // Move to the middle
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-transparent  text-white p-4 rounded-lg shadow-lg"
      style={{
        maxWidth: "100%",
        width: "80%", // Adjust as needed
        textAlign: "center",
      }}
    >
      {selected.content}
    </motion.div>
  );
};

export default LayoutGrid;
