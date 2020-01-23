import React from 'react';

export default ({ closeModal }) => {

  return (
    <>
      <div className={"modal-backdrop"} onClick={e => {
        e.stopPropagation();
        closeModal();
      }} />
      <div className={"purchase-modal"}>
        THIS IS THE PURCHASE MODAL
      </div>
    </>
  )
}
