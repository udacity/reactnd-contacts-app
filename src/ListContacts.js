import React, { Component } from 'react';

class ListConatacts extends Component {
  render () {
    console.log('Props', this.props)
    return (
      <ol className='contact-list'>

      </ol>
    )
  }
}

export default ListConatacts;
