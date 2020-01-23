import React, { useState } from 'react';

export default ({  }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(1);

  const nextImage = () => {
    if(currentImageIndex < 4){
      setCurrentImageIndex(currentImageIndex+1);
    }
  };

  const previousImage = () => {
    if(currentImageIndex > 1){
      setCurrentImageIndex(currentImageIndex-1);
    }
  }

  return (
    <div className={"gallery"}>
      <div className={"images-wrapper"}>
        <div className={"image-wrapper"} style={{backgroundImage: `url(/product-images/img${currentImageIndex}.png)`}}>
        </div>
        <div className={"desktop-side-images"}>
          <img src={"/product-images/img1.png"} onClick={() => setCurrentImageIndex(1)} />
          <img src={"/product-images/img2.png"} onClick={() => setCurrentImageIndex(2)} />
          <img src={"/product-images/img3.png"} onClick={() => setCurrentImageIndex(3)} />
          <img src={"/product-images/img4.png"} onClick={() => setCurrentImageIndex(4)} />
        </div>
      </div>
      <button onClick={previousImage}>PreviousImage</button>
      <button onClick={nextImage}>Next</button>
    </div>
  )
};
