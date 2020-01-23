import React, { useState } from 'react';
import PurchaseModal from "./PurchaseModal";

export default () => {
  const [isVideoModalOpen, setIsVideoOpen] = useState(true);

  return (
    <>
      {isVideoModalOpen && <PurchaseModal closeModal={() => setIsVideoOpen(false)}/>}
      <div className={"pretend-video-player"} onClick={() => setIsVideoOpen(!isVideoModalOpen)} />
    </>
  )
}
