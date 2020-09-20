import React, { Component } from "react";
import ReactDOM from "react-dom";
import TravelForm from "./Container.js"
import MemeApp from "./MemeApp.js"
import App from "./App";
/*class App extends React.Component {
  constructor() {
    super();
    this.state = {
      logged: false
    };
  }
  render() {
    return (
      <div>
        <Header name="Rejaul" />
        <Greeting />
        <p>
          {this.state.logged ? "you are logged in" : "you are not logged in"}
        </p>
      </div>
    );
  }
}
class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome {this.props.name}!</h1>
      </div>
    );
  }
}
class Greeting extends React.Component </errorcomponent>{
  render() {
    const x = new Date();
    const hour = x.getHours();
    let greeting = "Good Morning";
    if (hour > 12) {
      greeting = "Good After noon!!";
    } else if (4 < hour < 12) {
      greeting = "Good Night!!!";
    }

    return (
      <div>
        <h2>{greeting}</h2>
      </div>
    );
  }
}


class Counter extends React.Component{
  constructor(props){
    super()
    this.state ={
      counter:0,
      seed:0,
      intializing:true,
    }
    
    this.decrement = () => this.setState({counter:this.state.counter -1})
    this.increment = () => this.setState({counter:this.state.counter +1})
  }
  
  static getDerivedStateFromProps(props,state){
    console.log("this is called")
    if(props.seed && state.seed !== props.seed){
      return {
        seed:props.seed,
        counter:props.seed,
      }
    }
    return null
  }
  componentDidMount(){
    setTimeout(() => {
      this.setState({intializing:false});
    }, 1000);
  }
  componentDidUpdate(){
    console.log("component Updated")
  }
  componentWillUnmount(){
    console.log("component unmounted Rejaul")
  }
  
  shouldComponentUpdate(nextprop,nextstate){
    if(nextprop.ignorePrope && this.props.ignorePrope !== nextprop.ignorePrope){
      console.log("component should ---- not rendered")
      return false
    }
    console.log("component should render")
    return true

  }
  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log("snap shote is called here")
    console.log(prevState.counter)
    return null
  }
  componentDidCatch(error,info){
    console.log("this is caught")
  }
  render(){
    console.log("component render")
    if(this.state.intializing){
      return (
        <div>
          <h2>Loading...</h2>
        </div>
      )
    }
    return (
      <div align="center" className = "counter">
        <h1 align="center">Counter : {this.state.counter}</h1>
        <button onClick={this.increment}>Increment</button>&nbsp;&nbsp;&nbsp;&nbsp;
        <button onClick={this.decrement}>Decrement</button>
      </div>
    )
  }
}

class Newapp extends React.Component{
  constructor(){
    super()
    this.state ={
      mount: true,
      ignorePrope:0,
      initializing:true,
      seed:40,
    }
    this.mountcounter = ()=> this.setState({mount:true})
    this.unmountcounter = ()=> this.setState({mount:false})
    this.ignorePrope = ()=>this.setState({ignorePrope:Math.random()})
    this.generateseed = ()=>{this.setState({seed:Number.parseInt(Math.random()*100)})
    console.log(this.state.seed)
  }
  }
  componentDidMount(){
    setTimeout(() => {
      this.setState({initializing:false})  
    }, 700);
    
  }
  render(){
    if(this.state.initializing){
      return (
        <div>
            <h2>wait! setting up Environment for U..... </h2>
        </div>
      )
    }
    return (<div>
      <button onClick={this.mountcounter} disabled={this.state.mount}>Mount Counter</button>
        &nbsp;&nbsp;&nbsp;&nbsp;
      <button onClick={this.unmountcounter} disabled={!this.state.mount}>UnMount Counter</button>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <button onClick={this.ignorePrope}>Ignore Prope</button>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <button onClick={this.generateseed}>Generate Seed</button>
      {this.state.mount?<Counter ignorePrope = {this.state.ignorePrope} seed={this.state.seed}/>:null}
    </div>)
  }
}
class Authenticate extends React.Component{
  constructor(){
    super()
    this.state ={
      logout:true,
    }
    this.login = () => this.setState({logout:false});
    this.logout = () => this.setState({logout:true});
  }
  render(){
    if(this.state.logout){
      return  <div>
      <p>You are not Log in Yet</p>
      <button onClick={this.login}>Log IN</button>
      </div>
    }

    return  (<div>
      <p>You are not Log Out Yet</p>
      <button onClick={this.logout}>Log Out</button>
    </div>)
    
  }
}
class Testpromise extends React.Component{
  constructor(){
    super()
    this.state={
      loading:true,
      character:{}
    }
  }
  componentDidMount(){
    fetch("https://swapi.dev/api/starships/9/")
      .then(response => response.json())
      .then(data => this.setState({
        loading:false,
        character:data,
      }))
  }
  randomobj = {
    fk:1,
    sk:2,
    tk:3,
  }
  
  render(){
    let detail =[]
    for(let key in this.state.character){
    detail.push(<p>{key} : {this.state.character[key]}</p>)
    }
    if(this.state.loading){
      return (<div>
        <p>Loading....</p>
      </div>)
    }
    return <div>
      {detail}
    </div>
  }
}
class Myform extends React.Component{
  constructor(){
    super()
    this.state={
      firstname:"",
      lastname:"",
      friendly: false,
      detail:"",
      gender:"",
      favouritecolor:"Blue"
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event){
    const {name,value,type,checked} = event.target
    type === "checkbox"?this.setState({friendly:checked}) :this.setState({[name]:value});
    
  }
  render(){
    return (
      <div>
        <form>
          <input 
            onChange={this.handleChange}
            type="text" 
            name="firstname" 
            placeholder="First Name" 
            value={this.state.firstname}
            />
            <br/>
          <input 
            onChange={this.handleChange} 
            type="text" 
            name="lastname" 
            placeholder="Last Name"
            value = {this.state.lastname}
            />
           <br/>
          <textarea
            onChange={this.handleChange}
            name="detail" 
            placeholder="Enter Text"
            value = {this.state.detail}
            />
            <br/>Friendly
            <input 
            onChange={this.handleChange} 
            type="checkbox" 
            name="friendly" 
            placeholder="Last Name"
            checked = {this.state.friendly}
            
            />
            <br/>
            <input 
            onChange={this.handleChange} 
            type="radio" 
            name="gender"
            value = "Male"
            checked = {this.state.gender === "Male"}
            /> Male
            <input 
            onChange={this.handleChange} 
            type="radio" 
            name="gender"
            value = "Female"
            checked = {this.state.gender === "Female"}
            /> Female<br/>
            Favourite Color:-
            <select
              onChange={this.handleChange} 
              name="favouritecolor"
              value = {this.state.favouritecolor}            
            >
              <option>Blue</option>
              <option>Red</option>
              <option>Green</option>
            </select>
            
        </form>
          <p>detail : {this.state.detail}</p>
          <p>{this.state.firstname} {this.state.lastname}</p>
          <p>Gender:{this.state.gender}</p>
          <p>your Color: {this.state.favouritecolor}</p>
      </div>
    )
  }
  
}*/

const rootElement = document.getElementById("root");
ReactDOM.render(
  <div align="center">
    <MemeApp/>
  </div>,
  rootElement
);
