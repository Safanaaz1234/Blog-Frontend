import TopBar from "../topbar/TopBar";
import "./contact.css";
import { useState } from "react";
function Contact() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
    console.log(!isOpen);
  };
  return (
    <>
      <TopBar />
      <div className="contact">
        <div
          className={`contact-container ${isOpen ? "open" : ""}`}
          onClick={handleOpen}
        >
          <h2>
            <center>Contact Us</center>
          </h2>
          <br />
          <br />
          {!isOpen && <center>Click on this card to get the details</center>}
          {isOpen && (
            <div className="contact-details">
              <p>Email: 8451031656safa@gmail.com</p>
              <p>Phone: 8451031656</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Contact;
