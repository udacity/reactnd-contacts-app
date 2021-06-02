import React, { Component } from 'react' //class import
//mport React from 'react' //stateless import
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'



//stateless
/*function ListContacts(props) {
    { console.log('props: ', props) }
    return (
        <ol className='contact-list'>
            {props.contacts.map((contact) => (
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
                        onClick={() => props.onDeleteContact(contact)}
                        className='contact-remove'>
                        Remove
                    </button>
                </li>
            ))}
        </ol>
    )
}*/




//class
/*class ListContacts extends Component {
    render() {
        //check props
        //console.log(this.props)
        return (
            <ol className='contact-list'>
                {this.props.contacts.map((contact) => (
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
                        <button className='contact-remove'>
                            Remove
                        </button>
                    </li>
                ))}
            </ol>
        )
    }
}*/


//controlled component
class ListContacts extends Component {
    static propTypes = {
        contacts: PropTypes.array.isRequired,
        onDeleteContact: PropTypes.func.isRequired,

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
        //check props
        console.log('ListContacts Props: ', this.props)

        const { query } = this.state
        const { contacts, onDeleteContact } = this.props

        const showingContacts = query === ''
            ? contacts
            : contacts.filter((c) => (
                c.name.toLowerCase().includes(query.toLocaleLowerCase())
            ))

        console.log('props: ', this.props)
        return (
            <div className='list-contacts'>
                {/*JSON.stringify(this.state)*/}
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
                    >Add Contact</Link>

                </div>

                {showingContacts.length !== contacts.length && (
                    <div className='showing-contacts'>
                        <span>Now showing {showingContacts.length} of
                            {contacts.length}
                        </span>
                        <button
                            onClick={this.clearQuery}
                        >Show all</button>
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
                                onClick={() => onDeleteContact(contact)}
                                className='contact-remove'>
                                Remove
                    </button>
                        </li>
                    ))}
                </ol>
            </div>

        )
    }
}


/*ListContacts.propTypes = {
    contacts: PropTypes.array.isRequired,
    onDeleteContact: PropTypes.func.isRequired,

}*/

export default ListContacts