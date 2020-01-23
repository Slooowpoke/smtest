import React, { useState } from 'react';
import PurchaseModal from "./PurchaseModal";
import { AnimatePresence } from "framer-motion";

export default () => {
  const [isVideoModalOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <AnimatePresence>
        {isVideoModalOpen && <PurchaseModal closeModal={() => setIsVideoOpen(false)}/>}
      </AnimatePresence>

      <div className={"pretend-video-player"} onClick={() => setIsVideoOpen(!isVideoModalOpen)} />
    </>
  )
}
