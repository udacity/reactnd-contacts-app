import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class ListContacts extends Component {
    static propTypes = {
        contacts: PropTypes.array.isRequired,
        onDelete: PropTypes.func.isRequired,
    }
    state = {
        query: ''
    }

    updateQuery = (query) => {
        this.setState(() => ({
            query: query.trim()
        }))
    }
    clearQuery = () => {
        this.updateQuery('')
    }
    render() {
        const { query } = this.state
        const { contacts, onDelete } = this.props;

        const showingContacts = query === ''
            ? contacts
            : contacts.filter((c) => (
                c.name.toLowerCase().includes(query.toLowerCase())
            ))
        return (
            <div className='list-contacts'>
                <div className='list-contacts-top'>
                    <input
                        className='search-contacts'
                        type='text'
                        placeholder='Search Contacts'
                        value={query}
                        onChange={(event) => this.updateQuery(event.target.value)}
                    />
                    <Link 
                    to='/create'
                    className='add-contact'
                    >
                        Add Contact
                    </Link>
                </div>

                {showingContacts.length !== contacts.length &&(
                    <div className = 'showing-contacts'>
                        <span>
                            Now Showing {showingContacts.length} of {contacts.length}
                        </span>
                        <button onClick={this.clearQuery}>Show All</button>
                    </div>
                )}

                <ol className='contact-list'>
                    {showingContacts.map((contact) => (
                        <li key={contact.id} className='contact-list-item'>
                            <div
                                className='contact-avatar'
                                style={{
                                    backgroundImage: `url(${contact.avatarURL})`
                                }}
                            ></div>
                            <div className='contact-details'>
                                <p>{contact.name}</p>
                                <p>{contact.handle}</p>
                            </div>
                            <button
                                onClick={() => onDelete(contact)}
                                className='contact-remove'>
                            </button>
                        </li>
                    ))}
                </ol>
            </div>

        )

    }
}

export default ListContacts