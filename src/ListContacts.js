import React, { Component } from "react";

class ListContacts extends Component {
  render() {
    return (
      <ol className="contact-list">
        {this.props.contacts.map((person) => (
          <li key={person.id}>{person.name}</li>
        ))}
      </ol>
    );
  }
}

export default ListContacts;
