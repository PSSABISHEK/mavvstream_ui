import React, { Component } from 'react';
import { Button, Col, Container, Form, FormControl, Row } from 'react-bootstrap';
import NavbarBefore from './Components/NavbarBefore';

import './App.css'

import "bootstrap/dist/css/bootstrap.css";
import QueryTemplate from './Components/QueryTemplate';

class App extends Component {
  constructor(props) {
    super(props);
  }
  state = { 
    queryArray: []
  }

  handleAddQuery = () => {
    this.setState({
      queryArray: [...this.state.queryArray, <QueryTemplate/>]
    })
  }

  render() { 
    return ( 
      <div>
        <NavbarBefore/>
        <Container className="main-div">
          <Button onClick={this.handleAddQuery}>Add</Button>
        </Container>
        {this.state.queryArray.map((item, i) => (item))}
      </div>
    );
  }
}
 
export default App;