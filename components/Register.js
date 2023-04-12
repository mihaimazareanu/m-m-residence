import { ReloadContext } from '@/contexts/ReloadContext';
import { UserContext } from '@/contexts/UserContext';
import passwordGenerator from 'password-generator';
import React, { useContext, useState } from 'react'
import styles from "./Register.module.css"

function Register() {
    const {user} = useContext(UserContext);
    const [overlay, setOverlay] = useState(false);
    const [password, setPassword]= useState("");
    const {setReload} = useContext(ReloadContext);

    const createPassword = () => {
        const characters = /[a-zA-Z0-9!@#$%^&*()_+-=]+/;
        const generatedPassword = passwordGenerator(8, false, characters);
        setPassword(generatedPassword);
      };
      
    const toggleOverlay = () => {
        setOverlay(!overlay);
        }

    const handleRegister = async (event) =>{
        event.preventDefault();
        try {
          const data = Object.fromEntries(new FormData(event.target));
          
          const body = {
            firstName: data.firstName,
            lastName: data.lastName,
            partner: data.partner,
            username: data.username,
            password: password,
          };
          
          const response = await fetch(`api/users/${user._id}/guests`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
          });
          console.log(response);
          if (response.ok) {
            alert(`User ${data.username} has been successfully added`);
            event.target.reset();
            setPassword("");
            toggleOverlay();
            setReload(true);
          } else {
            throw new Error(`Fetch failed with Status: ${response.status}`);
          }
        } catch (error) {
            console.log(error);
          alert(error.message);
        }
    }

    return (
    <div>
      {user?.isAdmin && <button className={styles["btn-add"]} onClick={toggleOverlay}>Add new users</button>}
      {overlay && 
        <div className={styles.modal}>
            <div className={styles.overlay} onClick={toggleOverlay}></div>
            <div className={styles["modal-content"]}>
              <div className={styles.register}>
                <form onSubmit={(event)=>handleRegister(event)}>
                    <fieldset className={styles["firstName-fieldset"]}>
                        <label className={styles["styled-label"]} htmlFor="firstName">First Name</label>
                        <input id="firstName" type="text" required name="firstName" placeholder="Type a first name..."/>
                    </fieldset>
                    <fieldset className={styles["lastName-fieldset"]}>
                        <label className={styles["styled-label"]} htmlFor="lastName">Last Name</label>
                        <input id="lastName" type="text" name="lastName" placeholder="Type a last name..." />
                    </fieldset>
                    <fieldset className={styles["partner-fieldset"]}>
                        <label className={styles["styled-label"]} htmlFor="partner">Partner&apos;s First Name</label>
                        <input id="partner" type="text" name="partner" placeholder="Type a first name..." />
                    </fieldset>
                    <fieldset className={styles["username-fieldset"]}>
                        <label className={styles["styled-label"]} htmlFor="username">Username</label>
                        <input id="username" type="text" required name="username" placeholder="Type your username..." />
                    </fieldset>
                    <button type="button" className={styles["btn-add"]} onClick={createPassword}>Generate password</button>
                    <fieldset className={styles["password-fieldset"]}>
                    <p>Password </p>
                    <p>{password}</p>
                    </fieldset>
                <button className={styles["btn-add"]} type="submit">Add new user</button>
                <button className={styles["close-modal"]} onClick={toggleOverlay}>X</button>
            </form>
            </div>
            </div>
    </div>}
    </div>
  )
}

export default Register;
