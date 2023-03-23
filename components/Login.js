import { PageContext } from "@/contexts/PageContext";
import { UserContext } from "@/contexts/UserContext";
import { useRouter } from "next/router";
import { useContext, useRef, useState } from "react";
import styles from "./Login.module.css"

const Login = () => {
const {user, setUser} = useContext(UserContext);
const {handleClickLink} = useContext(PageContext);
const [overlay, setOverlay] = useState(false);
const [showPassword, setShowPassword] = useState(false);
const [loginFailed, setLoginFailed] = useState(false);
const [loginFilter, setLoginFilter] = useState({
    username: "",
    password: "",
  });
const router = useRouter();
const loginRef = useRef(null);

const toggleOverlay = () => {
setOverlay(!overlay);
loginRef.current?.reset();
setLoginFailed(false)
}

const handleLogin = (event) => {
event.preventDefault();
const getUser = async () => {
    try {
        const urlToFetch = `/api/users?username=${loginFilter.username}&password=${loginFilter.password}`;
        const response = await fetch(urlToFetch);
        if (response.ok) {
            const data = await response.json();
            if (data.password !== loginFilter.password) {
                setLoginFailed(true);
                setUser(null);
            } else {
              setUser(data);
              toggleOverlay();
              router.push("details");
              loginRef.current?.reset();
            }
        }
    }
    catch {setLoginFailed(true)}
};
getUser();
handleClickLink("details");
loginRef.current?.reset();
};

const handleLogout = () => {
  setUser(null);
  handleClickLink("home");
  router.push("/");
  loginRef.current?.reset();
}

return (<>
    <button className={styles["btn-modal"]} onClick={user? handleLogout : toggleOverlay}>{user ? "Logout" : "Login"}</button>
    {overlay && 
        <div className={styles["modal"]}>
            <div className={styles["overlay"]} onClick={toggleOverlay}></div>
            <div className={styles["modal-content"]}>
                <form ref={loginRef} onSubmit={handleLogin}>
                    <fieldset className={styles["username-fieldset"]}>
                        <label className={styles["styled-label"]} htmlFor="username">Username</label>
                        <input id="username" type="text" required name="username" placeholder="Type your username..." value={loginFilter.username} onChange={event => {setLoginFilter({...loginFilter, username: event.target.value})}}/>
                    </fieldset>
                    <fieldset className={styles["password-fieldset"]}>
                    <label className={styles["styled-label"]}>Password</label>
                    <input type={showPassword ? "text" : "password"} required name="password" placeholder="Type your password..." value={loginFilter.password} onChange={event => {setLoginFilter({...loginFilter, password: event.target.value})}}/>
                    <i className={styles["styled-icon"]} onClick={()=>setShowPassword(!showPassword)}>
                    {showPassword ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        preserveAspectRatio="xMidYMid meet"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M2 5.27L3.28 4L20 20.72L18.73 22l-3.08-3.08c-1.15.38-2.37.58-3.65.58c-5 0-9.27-3.11-11-7.5c.69-1.76 1.79-3.31 3.19-4.54L2 5.27M12 9a3 3 0 0 1 3 3a3 3 0 0 1-.17 1L11 9.17A3 3 0 0 1 12 9m0-4.5c5 0 9.27 3.11 11 7.5a11.79 11.79 0 0 1-4 5.19l-1.42-1.43A9.862 9.862 0 0 0 20.82 12A9.821 9.821 0 0 0 12 6.5c-1.09 0-2.16.18-3.16.5L7.3 5.47c1.44-.62 3.03-.97 4.7-.97M3.18 12A9.821 9.821 0 0 0 12 17.5c.69 0 1.37-.07 2-.21L11.72 15A3.064 3.064 0 0 1 9 12.28L5.6 8.87c-.99.85-1.82 1.91-2.42 3.13Z"
                        />
                      </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1rem"
                    height="100%"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M12 9a3 3 0 0 1 3 3a3 3 0 0 1-3 3a3 3 0 0 1-3-3a3 3 0 0 1 3-3m0-4.5c5 0 9.27 3.11 11 7.5c-1.73 4.39-6 7.5-11 7.5S2.73 16.39 1 12c1.73-4.39 6-7.5 11-7.5M3.18 12a9.821 9.821 0 0 0 17.64 0a9.821 9.821 0 0 0-17.64 0Z"
                    />
                  </svg>
                )}</i>
                </fieldset>
                {loginFailed && <p className={styles["error"]}>User not found</p>}
                <button className={styles["btn-login"]} type="submit">Login</button>
                <button className={styles["close-modal"]} onClick={toggleOverlay}>X</button>
            </form>
            </div>
    </div>}
</>)
}

export default Login;