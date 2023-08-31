import {useState} from 'react';
import '../index.css'
import { Link } from "react-router-dom";

const url = 'http://192.168.0.104:5001/api/auth/register';

const Register = () => {
	const [inputs, setInputs] = useState({
		username: '',
		email: '',
		password: ''
	})
	const onchange = (e) => {
		setInputs({...inputs, [e.target.name]: e.target.value});
	}

	const onSubmit = async (e) => {
		e.preventDefault();
		const body = { Username: inputs.username, Email: inputs.email, Password: inputs.password}
		console.log(body);
		const newuser = await fetch(url, 
			{
				method: 'POST',
				headers: {
					"content-type": 'application/json'
				},
				body: JSON.stringify(body)
			}
		)
		const json = await newuser.json();
		console.log(json);
	}

	return (
		<div className='form-page'>
			<div className='form'>
			<form onSubmit={e => onSubmit(e)} className='forms'>
				{/* <label>Register</label> */}
				<input name="username" placeholder="username" value={inputs.username}
					onChange={e => onchange(e)}
				/>
				<input 
					name="email" 
					placeholder="example@example.com"
					value={inputs.email}
					onChange={e => onchange(e)}
				/>
				<input
					name="password"
					value={inputs.password}
					onChange={e => onchange(e)}
					type="password"
					placeholder='password'
					/>
				<button>Register</button>
				<p className='message'>Already registered <Link to={'/login'} className='alink'>Login</Link></p>
				
			</form>
			</div>
		</div>
	)
}

export default Register;
