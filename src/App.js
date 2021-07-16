import React, { Component } from 'react';
import ListContacts from './ListContacts'
import * as ContactsAPI from './utils/ContactsAPI'
import CreateContact from './CreateContact'

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
    contacts: [],
    screen: 'create'
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
        {this.state.screen === 'list' && (<ListContacts 
          contacts={this.state.contacts} 
          onDeleteContact={this.removeContact}
        />
        )}
        {this.state.screen === 'create' && (
          <CreateContact />
        )}
      </div>
    );
  }
}

export default App;
