import AdminDashboard from "@/components/AdminDashboard";
import GuestDashboard from "@/components/GuestDashboard";
import { UserContext } from "@/contexts/UserContext";
import styles from "@/styles/Details.module.css"
import { useContext } from "react";

const Details = () => {
    const {user} = useContext(UserContext);
    return <>
    {user && 
        <>
            {user.isAdmin ? <AdminDashboard/> : <GuestDashboard/>}
        </> 
    }
    </>
};

export default Details;