import { useEffect, useState } from "react"
import ContactForm from "../components/ContactForm";
import styles from "../styles/Contact.module.css"


export default function Contact() {
  return (
    <div className="page">
      <ContactForm/>
    </div>
  );
}