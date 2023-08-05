import { useState } from "react";

export default function Authenticate({token, setToken}) {
    const [successMessage, setSuccessMessage] = useState(null);
    const [error, setError] = useState(null);
    const [userName, setUserName] = useState(null);

    const handleAuthClick = async() => {
        console.log("handling auth...");
        console.log("current Token...: " + token)
        try{
            const url = "https://fsa-jwt-practice.herokuapp.com/authenticate"
            const response = await fetch(url, {
                method: "GET",
                headers: {"Content-Type": "application/json", Authorization: `Bearer ${token}`},
            });
            const data = await response.json();
            console.log(data);
            setSuccessMessage(data.message);
            console.log("successMessage: " + data.message);
            //set user name after authenticate
            setUserName(data.data.username)
        }catch(error){
            setError(error.message);
        }
    }
    return (
        <div>
            <h2>
                Authenticate!
            </h2>
            {successMessage && <p>Info Successfully Sent!</p>}
            {userName && <p>You have been authenticated {userName}!</p>}
            {error && <p>{error}</p>}
            <button onClick={handleAuthClick}>Authenticate Token</button>

        </div>

    )
}