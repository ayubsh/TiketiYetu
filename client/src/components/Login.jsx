import { useState } from 'react'
import { Link } from "react-router-dom";


const url = 'http://192.168.0.104:5001/api/auth/login';

const Login = () => {
    const [inputs, setInputs] = useState({
        email: '',
        password: ''
    });

    const onchange = (e) => {
        setInputs({...inputs, [e.target.name]: e.target.value});
    }

    const submitform = async (e) => {
        e.preventDefault();
        const body = {
            Email: inputs.email,
            Password: inputs.password
        }
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(body)
        });

        const json = await res.json();
        console.log(json)
    }
    return (
        <div className="form-page">
            <div className="form">
                <form className="forms" onSubmit={e => submitform(e)}>
                    {/* <label>Login</label> */}
                    <input name="email" placeholder="email" type="text" value={inputs.email} 
                        onChange={e => onchange(e)}
                    />
                    <input name="password" placeholder="password" type="password" value={inputs.password}
                        onChange={e => onchange(e)}
                    />
                    <button>Login</button>
                    <p className="message">Not register <Link to={'/register'} className="alink">Register</Link></p>
                </form>
            </div>
        </div>
    )
}

export default Login;