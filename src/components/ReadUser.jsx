import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function ReadUser() {
    const [users, setUsers] = useState({})
    const { id } = useParams()
    useEffect(() => {
        axios.get("http://localhost:3030/getStd/" + id)
            .then(res => {
                setUsers(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            <div className="row">
                <div className="col-4"></div>
                <div className="col-4">
                    <h1>Information About the Student</h1>
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Student Info</h5>
                            <h5>Your Id is : {users._id}</h5>
                            <h5 className="card-text">Welcome to Mr. {users.name} to Our Orgonization</h5>
                            <h5 className="card-text">Your Age is : {users.age}</h5>
                            <h5 className="card-text">We will Share Our Orgonization Information to your Email: {users.email}</h5>
                        </div>
                    </div>
                </div>
                <div className="col-4"></div>
            </div>
        </div>
    )
}

export default ReadUser