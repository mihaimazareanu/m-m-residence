import { UserContext } from '@/contexts/UserContext';
import React, { useState, useEffect, useContext } from 'react';
import Register from './Register';
import { ReloadContext } from '@/contexts/ReloadContext';
import styles from "./AdminDashboard.module.css";

function AdminDashboard() {
    const [users, setUsers] = useState([]);
    const {user} = useContext(UserContext);
    const {reload, setReload} = useContext(ReloadContext);

    
    useEffect(() => {
        const getUsers = async () => {
            try {
                const response = await fetch(`/api/users/${user._id}/guests`);
                    if (response.ok) {
                        const data = await response.json();
                        setUsers(data);
                        setReload(false);
                    } else {
                        throw new Error(`Fetch failed with Status: ${response.status}`);
                    }
            } catch (error) {
                  alert(error.message);
            }
        }
        reload ? getUsers() : "";
    }, [reload]);

    const handleDelete = async (username, id) => {
        try {
                const response = await fetch(`/api/users/${id}`, {
                    method: "DELETE",
                });
            if (response.ok) {
                alert(`User ${username} was successfully deleted`);
                setReload(true);
            } else {
                throw new Error(`Fetch failed with Status: ${response.status}`);
            }
        } catch (error) {
            alert(error.message);
        }
    }

  return (
    <>
    <h3 className={styles.title}>This is a list with the current users:</h3>
    {users ? <div  key={user.id} className={styles.users}>
    {users.map((user) => {
            return (
                <p className={styles["user-details"]} key={user._id}>{user.firstName} {user.partner && `& ${user.partner}`}
                  {!user.isAdmin && 
                  <button className={styles.delete} onClick={() => handleDelete(user.username, user._id)}>X</button>
                  }
                </p>
            );
        })}
        </div> :
        <p>Users list loading...</p>}
    <Register/>
    </>
  )
}

export default AdminDashboard;