import React from 'react';
import Product from "./Product";
import { motion } from "framer-motion"

export default ({ closeModal }) => {
  // TODO We would fetch the data in from somewhere else and pass it in here to make this reusable
  const data = {
    productName: "Gym King Core Origin T-Shirt",
    productPrice: "£30", // We would also do some currency format for local currency
    productDescription: `
      Take it back to basics with this men's Core Origin T-Shirt made from Gym King. Made from soft cotton fabric with 
      added stretch to boost comfort, this regular fit tee features a crew neckline and short sleeves.
    `
  };
  return (
    <>
      <div className={"modal-backdrop"} onClick={e => {
        e.stopPropagation();
        closeModal();
      }} />
      <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ transform: "scale(1)" }}
        exit={{ transform: "scale(0)" }}
        className="purchase-modal"
      >
        <Product data={data} closeModal={closeModal}/>
      </motion.div>
    </>
  )
}
