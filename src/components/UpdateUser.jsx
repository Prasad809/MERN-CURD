import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

function UpdateUsers() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [age, setAge] = useState()
    const navigate = useNavigate()
    const { id } = useParams()
    useEffect(() => {
        axios.get("http://localhost:3030/getStd/" + id)
            .then(res => {
                setName(res.data.name)
                setEmail(res.data.email)
                setAge(res.data.age)
            })
            .catch(err => console.log(err))
    }, [])
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.put('http://localhost:3030/updateStd/' + id, { name, email, age })
            .catch(err => console.log(err))
        navigate('/')
    }
    return (
        <div>
            <div className="row">
                <div className="col-4"></div>
                <div className="col-4">
                    <h1>This is UpdateUsersData</h1>
                    <div>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="Name">FullName</label>
                                <input type="text" className="form-control"
                                    placeholder="Enter Your Name"
                                    onChange={(e) => setName(e.target.value)}
                                    value={name} />
                                <label htmlFor="Email">Email</label>
                                <input type="text" className="form-control"
                                    placeholder="Enter Your Valid Email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    value={email} />
                                <label htmlFor="Age">Age</label>
                                <input type="text" className="form-control"
                                    placeholder="Enter Your Age"
                                    onChange={(e) => setAge(e.target.value)}
                                    value={age} />
                                <input type="submit" className="btn btn-success" value='Update' />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-4"></div>
            </div>

        </div>
    )
}
export default UpdateUsers;