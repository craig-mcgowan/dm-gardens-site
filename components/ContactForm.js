import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styles from "../styles/ContactForm.module.css";
import emailjs from "@emailjs/browser";
function getStaticProps() {
  return {
    props: {
      publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
      serviceID: process.env.NEXT_PUBLIC_SERVICE_ID,
      templateID: process.env.NEXT_PUBLIC_TEMPLATE_ID,
    },
  };
}

const ContactForm = (props) => {


  const sendEmail = (data) => {
    const templateID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
    const publicKey= process.env.NEXT_PUBLIC_PUBLIC_KEY
    const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID
    console.log( publicKey)
    
    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        data,
        "2keBwGdc-OeKRLha8"
      )
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
  };


  const emptyForm = {
    name: "",
    email: "",
    phone: "",
    contactPref: "email",
    subject: "",
    body: "",
  };

  const {
    register,
    reset,
    handleSubmit,
    watch,
    formState: { isSubmitting, isSubmitSuccessful, isSubmitted },
  } = useForm({ defaultValues: emptyForm });

  // const [formData, setFormData] = useState(emptyForm)
  const onSubmit = async (data) => {
    const res = await fetch("/api/form", {
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });
    const result = await res.json();
    console.log(result);
  };
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <>
      <h2>Request a Free Quote</h2>
      <form
        onSubmit={handleSubmit(sendEmail)}
        method="post"
        className={styles.form}
      >
        <fieldset className={styles.fieldset}>
          {/* <legend>Contact Dan Miller Gardens</legend> */}
          <label htmlFor="name">Your Name: </label>
          <input
            type="text"
            autoComplete="name"
            {...register("name", { required: true })}
          />
          <label htmlFor="email">Your Email: </label>
          <input
            type="email"
            autoComplete="email"
            {...register("email", { required: true })}
          />
          <label htmlFor="phone">Your Phone Number:</label>
          <input
            type="tel"
            autoComplete="phone"
            {...register("phone", { required: false })}
          />
          <p>Preferred contact method:</p>
          <div>
            <label htmlFor="radioEmail">Email</label>
            <input type="radio" {...register("contactPref")} value="email" />
            <label htmlFor="radioCall">Phone Call</label>
            <input type="radio" {...register("contactPref")} value="call" />
            <label htmlFor="radioText">Text Message</label>
            <input type="radio" {...register("contactPref")} value="text" />
          </div>
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            autoComplete="subject"
            {...register("subject", { required: true })}
          />
          <label htmlFor="message">Message:</label>
          <textarea
            className={styles.textarea}
            {...register("message", { required: true })}
          />
          <button
            disabled={isSubmitting}
            className={isSubmitSuccessful ? styles.submitted : styles.submit}
          >
            {isSubmitting ? "Saving" : "Submit"}
          </button>
        </fieldset>
      </form>
    </>
  );
};

export default ContactForm;
