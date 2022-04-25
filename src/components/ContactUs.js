import React from "react";
import mail from "../images/mail.png";
import address from "../images/address.png";
import phone from "../images/phone.png";

/**
 * Author: Joe Woods
 * A simple component to hold the ContactUs information
 */

export default function ContactUs() {
  return (
    <main>
      <div className="Contact--landing">
        <div>
          <img className="contactLogos" src={mail} alt="Mail" /> <b>Address</b>
          <p>PO BOX 1000, Hays, Ks 67601</p>
        </div>
        <div>
          <img className="contactLogos" src={phone} alt="Phone" />
          <b>Phone</b>
          <p>800-534-9017</p>
        </div>
        <div>
          <img className="contactLogos" src={address} alt="Address" />
          <b>Email</b>
          <p>customerservice@swapit</p>
        </div>
      </div>
    </main>
  );
}
