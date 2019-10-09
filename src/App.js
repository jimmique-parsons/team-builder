import React, { useState } from 'react';
import './App.css';
import Form from './components/Form.js';

function App() {
  const [ teamMemberList, setTeamMemberList ] = useState(
    [{
      name: 'Jimmique', 
      email: 'jimmique.parsons@gmail.com', 
      role: 'Full Stack Developer'
    }]
  );

  const addNewMember = (member) => {
    setTeamMemberList([...teamMemberList, member]);
  };

  return (
    <div className="App">
      {teamMemberList.map( teamMember => {
        return (
          <div>
            <p>Name: {teamMember.name}</p>
            <p>Email: {teamMember.email}</p>
            <p>Role: {teamMember.role}</p>
          </div>
        )
      })}
      <Form addNewMember={addNewMember} />
    </div>
  );
}

export default App;
