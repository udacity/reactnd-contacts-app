import React, {Component} from 'react'
import { Link } from 'react-router-dom'
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

  clearQuery = () => {
    this.updateQuery('')
  }

  render() {
    const { query } = this.state
    const { contacts, onDeleteContact, onNavigate } = this.props

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
          <Link
            // href='#create'
            to='/create'
            // onClick={onNavigate}
            className='add-contact'
          >Add contact</Link>
        </div>

        {/* When a user is typing into input field aka query, the contacts.length will be different, in other words, we want to know if we're filtering out any contacts, if so, display the bar with showing # out of how many contacts */}
        {/* using logical && for if condition below */}
        {showingContacts.length !== contacts.length && ( // true && ... do something if true
          <div className='showing-contacts'>
            <span>Now showing {showingContacts.length} of {contacts.length}</span>
            <button onClick={this.clearQuery}>Show All</button>
          </div>
        )}

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