import React,  { Component } from 'react';
import 'tachyons'
import 'axios'
import Navbar from './components/NavBar/NavBar'
import Form from './components/Form/Form'
import CodeBlock from './components/CodeBlock/CodeBlock'
import axios from 'axios';

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
    this.onButtonSubmit = this.onButtonSubmit.bind(this)
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
    event.preventDefault();
    const { info } = this.state
    var params = {
      account_name: info.account_name,
      requester: info.requester,
      team_ownership:info.team_ownership,
      ticket_id: info.ticket_id,
      description: info.description,
      ou: info.ou,
      provision_vpc: info.provision_vpc,
      centralnet: info.centralnet,
      account_type: info.account_type,
      cidr_size: info.cidr_size
    }
    // We can use fetch as well.
    axios.post('https://account-creator.com/api/create-account', params).then(
      response => {
        console.log(response.data)
      }
    ).catch( err => {
      console.log("There was an error:", err)
    })
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
