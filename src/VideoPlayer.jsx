import React, { useState } from 'react';
import PurchaseModal from "./PurchaseModal";


export default () => {
  const [isVideoModalOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      {isVideoModalOpen && <PurchaseModal closeModal={() => setIsVideoOpen(false)}/>}
      <div className={"pretend-video-player"} onClick={() => setIsVideoOpen(!isVideoModalOpen)} />
    </>
  )
}
