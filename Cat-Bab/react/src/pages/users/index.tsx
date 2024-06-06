import {useEffect} from 'react'
import {getUsers} from "../../API/apiUrl"

const Users = () => {
    const fetchUsers = async () =>{
        await getUsers()
        .then((response:any) =>{
            console.log(response.data)
        })
        .catch((error: any) => {
            console.log(error)
        })
    }

    useEffect(()=>{
        fetchUsers();
    }, [])


  return (
    <div>Users</div>
  )
}

export default Users