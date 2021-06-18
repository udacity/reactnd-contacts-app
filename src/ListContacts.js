import React from 'react'

const ListContacts = (props) => {
    return (
      <>
        {props.contacts.map( contact => {
            return (
              <div key={contact.id}>
                <img src={contact.avatarURL} alt=''/>
              </div>
            )
          })}
        </>
    )
}

export default ListContacts