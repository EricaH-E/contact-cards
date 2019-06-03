import React from 'react';
import PropTypes from 'prop-types'
import './App.css';


class Card extends React.Component{
  render(){
      const email = this.props.email === '' ? "N/A":this.props.email;
    return (
      <div className ="card">
        <h3>{this.props.name}</h3>
        <p>Mobile: {this.props.mobile}</p>
        <p>Email: {email}</p>
      </div>
    )
  }
}

class ContactCards extends React.Component {
  render(){
    const contacts = [];
    this.props.cards.forEach(card => {
      contacts.push(
          <Card  name ={card.name} mobile = {card.mobile} email = {card.email}/>
      );
     });

    return(
      <div>
        <header><h1>Contact Cards</h1></header>
        <div className="wrapper">{contacts}</div>
      </div>
    )
  }

}

ContactCards.propTypes = {
    name: PropTypes.string.isRequired ,
    mobile: PropTypes.number.isRequired,
    email: PropTypes.string
}

class App extends React.Component{
  render(){
      const CARDS = [
        {name:'Sarah Jones', mobile: 5551234, email:'sarahj@email.com'},
        {name:'Peter Watkins', mobile: 5554321, email:'peterw@email.com'},
        {name:'Ana Wintor', mobile: 5559876, email:''}
      ]
    
    return(
      <div>
        <ContactCards cards={CARDS} />
      </div>
  
  )
}
}

export default App;
