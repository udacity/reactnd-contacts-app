import React, { Component } from 'react';
import ListContacts from './ListContacts'
import * as ContactAPI from './utils/ContactsAPI'
class App extends Component {

  state = {
    contacts: [ ]
  }

  componentDidMount(){
    ContactAPI.getAll()
    .then( contacts => { 
      this.setState(({
        contacts
      }))
    })
  }

  removeContact = (contact) => {

    this.setState((currentState) => ({
      contacts: currentState.contacts.filter((current) => {
        return current.id !== contact.id
      })
    }))

    ContactAPI.remove(contact)
}

render() {

  return (
    <div>
      <ListContacts onDeleteContact={this.removeContact} contacts={this.state.contacts} />
    </div>
  );
}
}

export default App;
