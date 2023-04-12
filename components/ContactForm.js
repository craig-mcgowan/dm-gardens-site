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
    <section className={styles.contactForm} id="Contact">
      <h2>Request a Quote</h2>
      <form
        onSubmit={handleSubmit(sendEmail)}
        method="post"
        className={styles.form}
      >
        <fieldset className={styles.fieldset}>
          {/* <legend>Contact Dan Miller Gardens</legend> */}
          <label className={styles.labels} htmlFor="name">
            Your Name:
            <input
              type="text"
              placeholder="e.g. John Smith"
              autoComplete="name"
              {...register("name", { required: true })}
            />
          </label>
          <label className={styles.labels} htmlFor="email">
            Your Email:
            <input
              type="email"
              placeholder="name@email.com"
              autoComplete="email"
              {...register("email", { required: true })}
            />
          </label>
          <label className={styles.labels} htmlFor="phone">
            Your Phone Number:
            <input
              type="tel"
              placeholder="555-555-5555"
              autoComplete="phone"
              {...register("phone", { required: false })}
            />
          </label>
          <p className={styles.prefChoicesLabel}>Preferred contact method:</p>
          <div className={styles.prefChoices}>
            <label className={styles.radioBtn}>
              <input type="radio"  {...register("contactPref")} value="email" />
              Email
            </label>
            <label className={styles.radioBtn}>
              <input type="radio" {...register("contactPref")} value="call" />
              Phone Call
            </label>
            <label className={styles.radioBtn}>
              <input type="radio" {...register("contactPref")} value="text" />
              Text Message
            </label>
          </div>
          <label className={styles.labels} htmlFor="subject">
            Subject:
            <input
              type="text"
              placeholder="What kind of service are you looking for?"
              autoComplete="subject"
              {...register("subject", { required: true })}
            />
          </label>
          <label className={styles.labels} htmlFor="message">
            Message:
            <textarea
              placeholder="Tell me a little more about your project"
              className={styles.textarea}
              {...register("message", { required: true })}
            />
          </label>
          <button
            disabled={isSubmitting}
            className={isSubmitSuccessful ? styles.submitted : styles.submit}
          >
            {isSubmitting ? "Saving" : "Submit"}
          </button>
        </fieldset>
      </form>
    </section>
  );
};

export default ContactForm;
