import { UserContext } from "@/contexts/UserContext";
import styles from "@/styles/Contact.module.css"
import { useContext } from "react";

const Contact = () => {
    const {user} = useContext(UserContext);
    return <>
        {user ? 
        <>
          <p className={styles.details}>Should there be any problems or in case you have any further questions, you can contact is directly.</p>
          <h4 className={styles.title}>Our phone numbers are:</h4>
          <p className={styles.details}>Maike: 0049 163/8778205</p>
          <p className={styles.details}>Mihai: 0049 162/2490129</p>
          <h4 className={styles.title}>Our email addresses are:</h4>
          <p className={styles.details}>Maike: maike.butenuth@gmail.com</p>
          <p className={styles.details}>Mihai: mihai.mazareanu@gmail.com</p>
        </> 
        : 
        <>
          <p className={styles.details}>If you want to organize a direct home exchange with us, please look for us on the home exchange <a href="https://www.homeexchange.com/" target="_blank" rel="noreferrer"> website</a>. This is our profile:</p>
          <p className={styles.details}><a href="https://www.homeexchange.com/holiday-home/2112863" target="_blank" rel="noreferrer">M&M Residence</a></p>
          </>}
        </>
};

export default Contact;