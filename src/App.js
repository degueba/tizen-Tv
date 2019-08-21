import React, { useEffect, useState, Component } from 'react';

import { Link } from "react-router-dom";

import logo from './logo.svg';
import './App.css';

import axios from 'axios';




const item = {
  width: '100%',
  height: '80px',
  marginBottom: '30px',
  lineHeight: '80px',
  backgroundColor: '#ccc'
}


const items = async () => {
  let postsApi = await axios.get('https://jsonplaceholder.typicode.com/posts')

  return postsApi;
}

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
       posts: []
    }
  }


  componentWillMount(){ 
    let postArr = [];

    items().then(resp => {
      resp.data.map(it => {
        postArr.push(<Link to={`/item/${it.id}`} key={it.id}><div className='item' focusable >{it.title}</div></Link>)
      });

      this.setState({posts: postArr})
      this.initCaph()
    }); 
  }

  initCaph(){
    window.$.caph.focus.activate()  
  }

  componentWillReceiveProps(){
    console.log('did mount..')
  }

  render(){
    console.log('renderizou...');

    return (
      <div className="App">
        <h1>Lista</h1>
        <ul className="list">
          {this.state && this.state.posts}
        </ul>
      </div>
    );
  }
}

export default App;
