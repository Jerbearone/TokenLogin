import { useState } from "react"

export default function SignUpForm({token, setToken}) {
   const [userName, setUserName] = useState("");
   const [password, setPassword] = useState("");
   const [error, setError] = useState(null);

   const setNameChange = (e) => {
    console.log(e.target.value)
    setUserName(e.target.value)

   }

   const setPassChanged = (e)=>{
    console.log(e.target.value);
    setPassword(e.target.value);

   }

   const handleSubmit=async (event) => {
    event.preventDefault();
    console.log("submit handler");
    try {
        const url = "https://fsa-jwt-practice.herokuapp.com/signup"
        const response = await fetch(url, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({username: userName, password: password})
        });
        const data = await response.json();
        console.log(data);
        console.log("token:" + data.token)
        setToken(data.token);

    }catch(error){
        console.log(error);
        setError(error.message);
    }
   }
    return (
        <div>
            <h2>
                Sign Up!
            </h2>
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <label>
                    Username: <input value={userName} onChange={setNameChange}></input>
                </label>
                <label>
                    Password: <input value={password} onChange={setPassChanged}></input>
                </label>
                <button>Submit</button>
            </form>


        </div>
        )
}