import React, { Component } from "react";
import ListContacts from "./ListContacts";


class App extends Component {
  state = {
  contacts: [
      {
        "id": "michael",
        "name": "Michael Jackson",
        "handle": "michael@reacttraining.com",
        "avatarURL": "http://localhost:5001/michael.jpg"
      },
      {
        "id": "rian",
        "name": "Ryan Florence",
        "handle": "ryan@reacttraining.com",
        "avatarURL": "http://localhost:5001/ryan.jpg"
      },
      {
        "id": "tyler",
        "name": "Tyler McGinnis",
        "handle": "tyler@reacttraining.com",
        "avatarURL": "http://localhost:5001/tyler.jpg"
      }
    ]
  }

removeContact = (contact) => {
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
        onDeleteContact= {this.removeContact}
        />
      </div>
    );
  }
}

export default App;
