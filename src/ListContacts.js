import React, {Component} from 'react'
import PropTypes from 'prop-types'

class ListContacts extends Component {
  static propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired
  }

  state = {
    query: ''
  }

  updateQuery = (query) => {
    this.setState(()=> ({
      query: query.trim()
    }))
  }

  render() {
    const { query } = this.state
    const { contacts, onDeleteContact } = this.props

    // sticking the input field onto components state to trigger re-render on input then filter that input to perform working search
    const showingContacts = query === ''
      ? contacts
      : contacts.filter(contact => (
        contact.name.toLowerCase().includes(query.toLowerCase())
      ))

    return (
      <div className = 'list-contacts'>
        {/* {JSON.stringify(this.state)} */}
        <div className= 'list-contacts-top'>
          <input 
            className='search-contacts'
            type="text" 
            placeholder='Search Contacts'
            value={query}
            onChange={(event)=> {this.updateQuery(event.target.value)}}
            // To recap how user input affects the ListContacts component's own state:
            // 1. The user enters text into the input field.
            // 2. The onChange event listener invokes the updateQuery() function.
            // 3. updateQuery() then calls setState(), merging in the new state to update the component's internal state.
            // 4. Because its state has changed, the ListContacts component re-renders.            
          />
        </div>
        <ol className='contacts-list'>
          {showingContacts.map( contact => (
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
                    onClick={() => onDeleteContact(contact)}
                    className='contact-remove'>
                    Remove
                  </button>
                </li>
              )
          ))}
          </ol>
      </div>
    )
  }
}
// const ListContacts = (props) => {
//     return (
//       <ol className='contacts-list'>
//         {props.contacts.map( contact => (
//             (
//               <li key={contact.id} className='contact-list-item'> 
//                 <div
//                   className='contact-avatar'
//                   style={{ //first bracket says lets go into JS, 2nd bracket makes it an object
//                     backgroundImage: `url(${contact.avatarURL})`
//                   }}
//                 ></div>
//                 <div className='contact-details'>
//                   <p>{contact.name}</p>
//                   <p>{contact.handle}</p>
//                 </div>
//                 <button 
//                   onClick={() => props.onDeleteContact(contact)}
//                   className='contact-remove'>
//                   Remove
//                 </button>
//               </li>
//             )
//         ))}
//         </ol>
//     )
// }

// ListContacts.propTypes = {
//   contacts: PropTypes.array.isRequired,
//   onDeleteContact: PropTypes.func.isRequired
// }

export default ListContacts