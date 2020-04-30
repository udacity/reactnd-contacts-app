import React, {Component} from "react"

class ListContacts extends Component {
     render (){
        console.log("props:", this.props)
        return(
         <ol className='contact-list'>
            <li></li>
         </ol>  
        )
    }
}

export default ListContacts