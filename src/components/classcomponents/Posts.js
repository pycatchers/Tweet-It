import { Component } from 'react';
import axios from 'axios';


class Posts extends Component{
  constructor(props){
    super(props)
    this.state = {
      id: 1,
      response: null,
      loading: false
    }
  }

  componentDidMount(){
    console.log('componentDidMount');
    this.getPost()
  } 

  async getPost(){
    this.setState({
      loading: true
    })
    // const response = await fetch('https://jsonplaceholder.typicode.com/posts/' + this.state.id)
    // const responseJson = await response.json();

    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + this.state.id)
    const responseJson = response.data

    this.setState({
      response: responseJson,
      loading: false
    })
  }

  componentDidUpdate(oldProps, oldState){
    // check prev state values with new state values and do update
    if (oldState.id !== this.state.id){
      this.getPost()
    }
  }

  componentWillUnmount(){
    // called when disappears
    console.log('componentWillUnmount')
  }

  handleDecrement = () => {
    console.log('handleDecrement')
    this.setState({
      id: this.state.id - 1
    })
  }

  handleIncrement = () => {
    console.log('handleIncrement')
    this.setState({
      id: this.state.id + 1
    })
  }


  render(){
    return(
      <div style={{marginTop: 50, marginLeft: 50}}>
        <button onClick={this.handleDecrement}>-</button>
        {this.state.id}
        <button onClick={this.handleIncrement}>+</button>
        <div>
          Title: {this.state.loading === true ?  'Loading...' : this.state.response?.title}
        </div>
      </div>
    )
  }
}



export default Posts;
