import React, { useState } from "react";
import "./Delete.css";
import Modal from "./Modal";


function Delete() {
  const [modalOpen, setModalOpen] = useState(false);

  

  return (
    <div className="App">
      <button
        className="openModalBtn"
        onClick={() => {
          setModalOpen(true);
        }}
      >
        Delete
      </button>

      {modalOpen && <Modal setOpenModal={setModalOpen} />}
    </div>
  );
}

export default Delete;