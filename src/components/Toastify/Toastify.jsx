import React from "react";
import { Bounce, ToastContainer } from "react-toastify";
import "./Toastify.scss"
const Toastify = () => {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        className="notification"
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
        // style={{ zIndex: "1000", top: "100px" }}
        limit={5}
      />
    </>
  );
};

export default Toastify;
