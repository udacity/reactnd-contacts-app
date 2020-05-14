import React, { Component } from "react";
import ListContacts from "./ListContacts";
import * as ContactsAPI from './utils/ContactsAPI'
import CreateContact from './CreateContact'

class App extends Component {
  state = {
    contacts: [],
    screen:"list"
  }
  componentDidMount() {
    ContactsAPI.getAll()
      .then((contacts) => {
        this.setState(() => ({
          contacts
        }))
      })
    }
  

  removeContact = (contact) => {
    this.setState((currentState) => ({
      contacts: currentState.contacts.filter((item) => {
        return item.id !== contact.id;
      }),
    }));
    ContactsAPI.remove(contact)
  };

  render() {
    return (
      <div>
        {this.state.screen === "list" && (<ListContacts
          deleteContact={this.removeContact}
          contacts={this.state.contacts}
        />)}
        {this.state.screen === "create" && (<CreateContact />)}
      </div>
    );
  }
}

export default App;
