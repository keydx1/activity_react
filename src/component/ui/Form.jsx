import {useState} from "react"

export default function Form(){

    //usestate
    const [name, setName] = useState("");
    //event
    function handleSubmit (e) {
        e.preventDefault();
        console.log(name);
    }
    return (
        <form method="POST" onSubmit={handleSubmit}>
            <input  
                value={name}
                onChange= {(e) => setName(e.target.value)}
                placeholder="input mo na"
            />
            <button>Submit</button>
        </form>
    )
}