import React from 'react'

const ListContacts = (props) => {
    return (
      <ol className='contacts-list'>
        {props.contacts.map( contact => (
            (
              <li key={contact.id} className='contact-list-item'> 
                <div
                  className='contact-avatar'
                  style={{ //first bracket says lets go into JS, 2nd bracket makes it an object
                    backgroundImage: `url(${contact.avatarURL})`
                  }}
                ></div>
                <div className='contact-details'>
                  <p>{contact.name}</p>
                  <p>{contact.handle}</p>
                </div>
                <button 
                  onClick={() => props.onDeleteContact(contact)}
                  className='contact-remove'>
                  Remove
                </button>
              </li>
            )
        ))}
        </ol>
    )
}

export default ListContacts