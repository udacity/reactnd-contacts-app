import React, { Component } from "react";

class ListContacts extends Component {
  render() {
    return (
      <ol className="contact-list">
        {this.props.contacts.map((contact) => (
          <li key={contact.id}>
            <div
              className="contact-avatar"
              style={{ backgroundImage: `url(${contact.avatarURL})` }}
            />
            <div className="contact-details">
              {contact.name}
              {contact.handle}
            </div>
            <button className="contact-remove">remove</button>
          </li>
        ))}
      </ol>
    );
  }
}

export default ListContacts;
