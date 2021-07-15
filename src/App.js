import React, { Component } from 'react';
import ListContacts from './ListContacts'
import * as ContactsAPI from './utils/ContactsAPI'

// contacts: [
//       {
//         "id": "michael",
//         "name": "Michael Isgrigg",
//         "handle": "@michael_isgrigg",
//         "avatarURL": "http://localhost:5001/michael.jpg"
//       },
//       {
//         "id": "ryan",
//         "name": "Ryan Kalehoff",
//         "handle": "@ryankalehoff",
//         "avatarURL": "http://localhost:5001/ryan.jpg"
//       },
//       {
//         "id": "tyler",
//         "name": "Tyler McGinnis",
//         "handle": "@tylermcginnis",
//         "avatarURL": "http://localhost:5001/tyler.jpg"
//       },
//     ]

class App extends Component {
  state = {
    contacts: []
  }

  componentDidMount() {
    ContactsAPI.getAll()
      .then((contacts) => {
        this.setState(() => ({
          contacts
        }))
      })
  }
  removeContact = contact => {
    this.setState((currentState) => ({ 
      contacts: currentState.contacts.filter((c) => {
        return c.id !== contact.id
      })
    }))
    ContactsAPI.remove(contact)
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
