import {useState} from "react"
import axios from 'axios';

export default function List(){
    const[users, setUsers] = useState([]);
    const[loading, setLoading] = useState(true);

    useEffect(()=> {
        const fetchUsers = async () => {
            try{
                const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                const data = await response.json();
                setUsers(data); 
            }

            catch(error){
                console.error('Error fetching data.', error.message);
            }

        };
        fetchUsers();
    }, []);

    if (loading) return <p>Loading...</p>

    return (

        <ul>
            {users.map(user => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>

    );
}