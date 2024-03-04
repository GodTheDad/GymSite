import React from 'react'
import { useState } from 'react';
import './Form.css'

const Forms = () => {
    let signupInfo ={};
    const [name, setName] = useState("");
    const [email, setMail] = useState("");
    const [Age, setAge] = useState("");
    const [password, setPass] = useState("");
    const AddNewRecord = async (name, Age, email, password) => {
        console.log(name)
        const signupparameters = {
            'MemberName':name,
            'MemberAge':Age,
            'MemberEmail': email,
            'MemberPass':password ,
            'MemberSub': false,
        }
      
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(signupparameters)
        }
        console.log( JSON.stringify(signupparameters));
        const response = await fetch('http://localhost:5050/members/create', options);
        const jsonResponse = await response.json();
        console.log(JSON.stringify(jsonResponse));
        return jsonResponse;
      };
    const handleSubmit = (event) => {
        event.preventDefault();
       AddNewRecord(name, Age, email,password);
    }
  return (
    <form onSubmit={handleSubmit}>
      <div className='BigChungus'>
      <div>
        <input className='Textfeild Name'
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <input className='Textfeild Email'
          type="text" 
          value={email}
          onChange={(e) => setMail(e.target.value)}
        />
        </div>
        <div>
        <div>
        <input  className='Textfeild Pass1'
          type="text" 
          value={Age}
          onChange={(e) => setAge(e.target.value)}
        />
        </div>
        <input className='Textfeild Pass2'
          type="text" 
          value={password}
          onChange={(e) => setPass(e.target.value)}
        />
        </div>
      
      <input type="submit" />
      </div>
    </form>
  )
}

export default Forms