import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styles from "../styles/ContactForm.module.css";

const ContactForm = (props) => {
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
      <h2>Request a Quote</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
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
