import React, { useEffect, useState, Component } from 'react';
import logo from './logo.svg';
import './App.css';


import { Link } from "react-router-dom";

import axios from 'axios';

const item = {
  width: '100%',
  height: '80px',
  marginBottom: '30px',
  lineHeight: '80px',
  backgroundColor: '#ccc'
}


const items = async (id) => {
  let postsApi = await axios.get(`https://jsonplaceholder.typicode.com/posts${id ? `/${id}`: ''}`)

  return postsApi;
}


class Item extends Component {
  constructor(props){
    super(props);

    this.state = {
       item: ''
    }
  }

  initCaph(){
    window.$.caph.focus.activate()  
  }

  componentWillMount(){
      let {id} = this.props.match.params;
      
      items(id).then(resp => {
        this.setState({item: <div id={resp.data.id} className='item' focusable >{resp.data.title}</div>})
        this.initCaph()
      }); 
  }

  render(){
    console.log('renderizou...');

    return (
      <div className="App">
        <Link to="/" focusable>Voltar</Link>
        
        <h1>Item</h1>
        <div className="item" focusable>
          {this.state && this.state.item}
        </div>
      </div>
    );
  }
}

export default Item;
