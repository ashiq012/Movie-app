import React from 'react'
import { useState } from 'react';

const Filehandle = () => {
    const [data, setdata] = useState({
        name: "",
        email: "",
        password: ""
    });
    const dataCollect = (e) => {
        console.log(e.target); // Add this line
        const { name, value } = e.target;
        setdata({ ...data, [name]: value })
    }
    const OnSubmit = (e) => {
        e.preventDefault();
        console.log(data)
        alert('ho gya')
        setdata({
            name: "",
            email: "",
            password: ""
        })
    }
    return (
        <>
            <form action="" onSubmit={OnSubmit} style={{ margin: '10px', gap: '20px' }}>
                <div>
                    name {""} <input
                        type="text"
                        value={data.name}
                        name="name"
                        onChange={dataCollect}
                        style={{ border: "2px solid black" }} />
                </div>
                <div>
                    email {""} <input
                        type="email"
                        value={data.email}
                        name="email"
                        onChange={dataCollect}
                        style={{ border: "2px solid black" }} />
                </div>
                <div>
                    password {""} <input
                        type="password"
                        value={data.password}
                        name="password"
                        onChange={dataCollect}
                        style={{ border: "2px solid black" }} />
                </div>
                <div>
                    <button
                        type="submit">
                        submit</button>
                </div>
            </form>
        </>
    )
}
export default Filehandle;