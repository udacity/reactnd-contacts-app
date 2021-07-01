import React, { Component } from 'react';
import ListContacts from './ListContacts'

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
      },
    ]
  }

  removeContact = contact => {
    this.setState((currentState) => ({ 
      contacts: currentState.contacts.filter((c) => {
        return c.id !== contact.id
      })
    }))
  }
  render() {
    return (
      <div>
        <ListContacts 
          contacts={this.state.contacts} 
          onDeleteContact={this.removeContact}
        />
      </div>
    );
  }
}

export default App;
