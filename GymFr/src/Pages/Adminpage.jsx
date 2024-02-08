import React, {useState, useEffect}from 'react'
import './Admin.css'
import Members from '../dummydata'
const Adminpage = () => {
  const [members, setMember] = useState([]);

  const fetchMembers = () => {
    
    return fetch("http://localhost:5050/members")
          .then((response) => response.json())
          .then((data) => setMember(data));
  }
  useEffect(() => {
    fetchMembers();
  },[])
  console.log(members)
  return (
    <>
      <div class="container">
      <table>
        <thead>
          
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Email</th>
          <th>Subscribed</th>
        </tr>
        </thead>
        <tbody>
        {members.map((member) => {
          let substatus;
          if (member.MemberSub== false){substatus = "No"} else{substatus = "Yes"}
          return(
            <tr>
              <td>{member.MemberName}</td>
              <td>{member.MemberAge}</td>
              <td>{member.MemberEmail}</td>
              <td>{substatus}</td>
            </tr>
          )
        })
    
        }
        </tbody>
      </table>
      </div>
    </>
  )
}

export default Adminpage