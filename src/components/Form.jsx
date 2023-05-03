import React from 'react';
import { useState } from 'react';
import { Routes, useNavigate } from 'react-router-dom' ;

function Form() {
    const [style, setStyle] = useState('valid');
    const [labelStyle, setLabelStyle] = useState('validLabel');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    function handleEmail(e) {
        setEmail(e.target.value);

    }
    function handlePassword(e) {
        setPassword(e.target.value);
    }
    function handleForm() {
        const regex = /^\D*\d{5}\D*$/;
        if ((email.trim() === '' || !email.includes('@')) || regex.test(password) === false) {
            setStyle('inValid');
            setLabelStyle('inValidLabel')
        }
        else{
            localStorage.setItem('email', email);
            localStorage.setItem('password', password);
            setStyle('valid');
            setLabelStyle('validLabel');
        }
    }
    return (
        <form action="#" className='form'>
            {/* For Email */}
            <label htmlFor="email" className={labelStyle}>Your Email</label>
            <input type="email"
                id='email'
                placeholder='Enter your email'
                value={email}
                onChange={handleEmail}
                className={`${style} inputField`} />

            {/* For Password */}
            <label htmlFor="password" className={labelStyle}>Your password (5 digits)</label>
            <input type="password"
                id='password'
                placeholder='Enter your password'
                value={password}
                onChange={handlePassword}
                className={`${style} inputField`} />
            <button onClick={handleForm} type="submit" className='btn'>LOGIN</button>
        </form>
    )
}

export default Form