import { useState } from "react";

export default function Authenticate({token, setToken}) {
    const [successMessage, setSuccessMessage] = useState(null);
    const [error, setError] = useState(null);

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
            setSuccessMessage(data.message);
            console.log(successMessage);


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
            {error && <p>{error}</p>}
            <button onClick={handleAuthClick}>Authenticate Token</button>

        </div>

    )
}