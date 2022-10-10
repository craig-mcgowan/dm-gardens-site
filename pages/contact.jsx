import styles from "../styles/Contact.module.css"

export default function Contact() {
  return (
    <>
      <h2>Page Under Construction</h2>
      <form action="" method="get" className={styles.form}>
        <fieldset className={styles.fieldset}> 
          <legend>Contact Dan Miller Gardens</legend>
          <label htmlFor="email">Your Email: </label>
          <input type="email" name="email" id="email" />
          <label htmlFor="phone">Your Phone Number:</label>
          <input type="tel" name="phone" id="phone" />
          <p>Preferred contact method:</p>
          <div>
            <label htmlFor="radioEmail">Email</label>  
            <input type="radio" name="contactPref" id="radioEmail" value="email" />
            <label htmlFor="radioCall">Phone Call</label>  
            <input type="radio" name="contactPref" id="radioCall" value="call"/>
            <label htmlFor="radioText">Text Message</label>  
            <input type="radio" name="contactPref" id="radioText" value="text"/> 
          </div>
          <label htmlFor="subject">Subject:</label>
          <input type="text" name="subject" id="subject" />
          <label htmlFor="body">Message:</label>
          <textarea name="body" id="body" />
          <input type="submit" value="Submit" />
        </fieldset>
      </form>
    </>
  )
}