import React, { Component } from 'react'
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
        this.setState(() => ({
            query: query.trim()
        }))
    }

    clearQuery = () => {
        this.updateQuery('')
    }


    render() {

        const showingContacts = this.state.query === ''
            ? this.props.contacts
            : this.props.contacts.filter((c) => {
                return c.name.toLowerCase().includes(this.state.query.toLowerCase())
            })

        return (

            <div className='list-contacts'>

                <div className='list-contacts-top'>
                    <input className='search-contacts'
                        type='text'
                        placeholder='Search Contacts'
                        value={this.state.query}
                        onChange={(e) => this.updateQuery(e.target.value)}
                    />
                </div>
                {showingContacts.length !== this.props.contacts.length && (
                    <div className='showing-contacts'>
                        <span>
                            Now showing { showingContacts.length } of { this.props.contacts.length }
                        </span>
                        <button onClick={ this.clearQuery}> Show All </button>
                     </div>
                )}
                <ol className="contact-list">
                    {showingContacts.map((contact) => (
                        <li key={contact.id} className='contact-list-item'>
                            <div className='contact-avatar'
                                style={{
                                    backgroundImage: `url(${contact.avatarURL})`
                                }}>
                            </div>
                            <div className="contact-details">
                                <p> {contact.name} </p>
                                <p> {contact.handle} </p>

                            </div>

                            <button className="contact-remove" onClick={() => this.props.onDeleteContact(contact)}>
                                Remove
                        </button>
                        </li>
                    ))}

                </ol>
            </div>

        )
    }
}



export default ListContacts