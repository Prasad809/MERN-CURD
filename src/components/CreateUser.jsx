import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateUsers() {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [age, setAge] = useState()
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3030/createStd", { name, email, age })
            .catch(err => console.log(err))
        navigate('/')
    }
    return (
        <div>
            <div className="row">
                <div className="col-4"></div>
                <div className="col-4">
                    <h1>This is CreateUsersData</h1>
                    <div>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="Name">FullName</label>
                                <input type="text" className="form-control"
                                    placeholder="Enter Your Name"
                                    onChange={(e) => setName(e.target.value)} />
                                <label htmlFor="Email">Email</label>
                                <input type="text" className="form-control"
                                    placeholder="Enter Your Valid Email"
                                    onChange={(e) => setEmail(e.target.value)} />
                                <label htmlFor="Age">Age</label>
                                <input type="text" className="form-control"
                                    placeholder="Enter Your Age"
                                    onChange={(e) => setAge(e.target.value)} />
                                <input type="submit" className="btn btn-success" />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-4"></div>
            </div>

        </div>
    )
}
export default CreateUsers;