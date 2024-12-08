import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Users(){
    const [users,setUsers]=useState([])
    const {id}=useParams()
    useEffect(()=>{
        axios.get("http://localhost:3030")   
        .then(res=>setUsers(res.data))
        .catch(err=>console.log(err))
    },[])
    const handleDelete =(id)=>{
        axios.delete('http://localhost:3030/deleteStd/'+id)
        .catch(err=>console.log(err))
        window.location.reload()
    }
    return(
        <div>
            <div>
                <h1>Create,Update,Read,Delete Operation By Using MERN FullStack</h1>
            </div>
            <div>
                <span><Link className="btn btn-primary" to={'/create'}>Add + </Link></span>
            <table className="table table-striped">
            <thead>
                    <tr  className="table-info">
                        <th>Id of the Student</th>
                        <th>Name of the Student</th>
                        <th>Email of the Student</th>
                        <th>Age of the Student</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user)=><tr key={user._id}>
                        <td>{user._id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.age}</td>
                        <td>
                            <Link className="btn btn-info" to={`/read/${user._id}`}>Read</Link>
                            <Link className="btn btn-primary" to={`/update/${user._id}`}>Edit</Link>
                            <button className="btn btn-danger" onClick={(e)=>handleDelete(user._id)}>Delete</button>
                        </td>
                    </tr>)}
                </tbody>
            </table>
            </div>
        </div>
    )
}
export default Users;