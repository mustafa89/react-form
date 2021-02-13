import React,  { Component } from 'react';
import 'tachyons'
import Navbar from './components/NavBar/NavBar'
import Form from './components/Form/Form'
import CodeBlock from './components/CodeBlock/CodeBlock'

class App extends Component {
  constructor () {
    super()
    this.state = {
      info: { 
        account_name: '',
        requester: '',
        team_ownership:'',
        ticket_id: '',
        description: '',
        ou:'',
        provision_vpc:'',
        centralnet:'',
        account_type:'',
        cidr_size:''
    }
  }
   
  }

  onInputChange = (event) => {
    const target = event.target;
    const value =  target.value;
    const name = target.name;
    const info = this.state.info;
    info[name] = value;
    
    this.setState({
      info
    });
  }

  onButtonSubmit = (event) => {
    console.log(this.state)
    event.preventDefault();
  }
  
  render() {
    return(
      <div>
        <Navbar />
        <Form 
        onInputChange={this.onInputChange} 
        onButtonSubmit={this.onButtonSubmit}
        info={this.state.info}
         />
        <CodeBlock />
      </div>
    )
  }
}

export default App;
