import React, { Component } from "react";
import PropTypes from "prop-types";

class ListContacts extends Component {
  static propTypes = {
    deleteContact: PropTypes.func.isRequired,
    contacts: PropTypes.array.isRequired,
  };

  state = {
    query: "",
  };

  updateQuery = (query) => {
    this.setState(() => ({
      query: query.trim(),
    }));
  };

  render() {

    const {query} = this.state
    const {contacts, deleteContact} = this.props

    const showingContacts = query === "" 
          ? contacts 
          : contacts.filter((c) => (c.name.toLowerCase().includes(query.toLowerCase())
          ))
         
    
    return (
      <div className="list-contacts">
        <div className="list-contacts-top">
          <input
            className="search-contacts"
            type="text"
            placeholder="search contacts"
            value={query}
            onChange={(event) => this.updateQuery(event.target.value)}
          />
        </div>
        <div>
          <ol className="contact-list">
            {showingContacts.map((contact) => (
              <li key={contact.id} className="contact-list-item">
                <div
                  className="contact-avatar"
                  style={{ backgroundImage: `url(${contact.avatarURL})` }}
                />
                <div className="contact-details">
                  <p>{contact.name}</p>
                  <p>{contact.handle}</p>
                </div>
                <button
                  onClick={() => deleteContact(contact)}
                  className="contact-remove"
                >
                  Remove
                </button>
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

// class ListContacts extends Component {
//   render() {
//     return (
//       <ol className="contact-list">
//         {this.props.contacts.map((contact) => (
//           <li key={contact.id} className="contact-list-item">
//             <div
//               className="contact-avatar"
//               style={{ backgroundImage: `url(${contact.avatarURL})` }}
//             />
//             <div className="contact-details">
//               <p>{contact.name}</p>
//               <p>{contact.handle}</p>
//             </div>
//             <button className='contact-remove'>
//                 Remove
//             </button>
//           </li>
//         ))}
//       </ol>
//     );
//   }
// }

export default ListContacts;
