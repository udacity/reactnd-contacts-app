import React, { Component } from 'react';
import ListContacts from './ListContacts'

const contacts = 

class App extends Component {
  state = {
    contacts: [
      {
        "id": "michael",
        "name": "Michael Isgrigg",
        "handle": "@michael_isgrigg",
        "avatarURL": "http://localhost:5001/michael.jpg"
      },
      {
        "id": "ryan",
        "name": "Ryan Kalehoff",
        "handle": "@ryankalehoff",
        "avatarURL": "http://localhost:5001/ryan.jpg"
      },
      {
        "id": "tyler",
        "name": "Tyler McGinnis",
        "handle": "@tylermcginnis",
        "avatarURL": "http://localhost:5001/tyler.jpg"
      }
];
  }
  render() {
    return (
      <div>
        <ListContacts contacts={contacts}/>
      </div>
    );
  }
}

export default App;
