import React from "react";
import "./styles.css";
import Todo from "./Todo.js";
import Joke from "./Joke.js";
import Jokesdata from "./Jokesdata";
import Product from "./Products";
const productdata = [
  {
    id: 1,
    name: "Allinson"
  },
  {
    id: 2,
    name: "Alvarado Street Bakery"
  },
  {
    id: 3,
    name:
      "Bimbo Bakeries USA – Arnold, Ball Park, Beefsteak, Bimbo, Brownberry, EarthGrains, Entenmann's, Eureka! Baking Company, Francisco, Freihofer's, Grandma Sycamore’s Homemade Bread, J.J. Nissen, Mrs. Baird's, Old Country, Oroweat, Sara Lee, Stroehmann's, Thomas', Tía Rosa, Weber's"
  },
  {
    id: 4,
    name: "Bond Bread"
  },
  {
    id: 5,
    name: "Bost's Bread"
  }
];

const tododata = [
  {
    id: 1,
    text: "feed dog",
    complete: true
  },
  {
    id: 2,
    text: "wash cloth",
    complete: false
  },
  {
    id: 3,
    text: "take bath",
    complete: false
  },
  {
    id: 4,
    text: "go for a walk with dog. ",
    complete: false
  },
  {
    id: 5,
    text: "go for a walk with dog. ",
    complete: false
  }
];
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoitems: tododata,
    };
    this.Hadleclick = this.Handleclick.bind(this);
  }
  Handleclick(id) {
    
    console.log("this is called");
    this.setState((prevState) => {
      const updatetodo = prevState.todoitems.map((todo) => {
        if (todo.id === id ) {
          todo.complete = !todo.complete;
          
        }
        
        console.log("runned")
        return todo;
      });
      console.log("runned outer")
      return {
        todoitems: updatetodo
      };
    });
    
  }
  render() {
    const components = Jokesdata.map((joke) => (
      <Joke key={joke.id} q={joke.question} a={joke.answer} />
    ));
    const products = productdata.map((product) => (
      <Product key={product.id} name={product.name} />
    ));
    const todolist = this.state.todoitems.map((item) => (
      <Todo key={item.id} item={item} HandleClick={this.Hadleclick} />
    ));
    return (
      <div>
        <div className="App">
          <h2>This is our To Do List</h2>
          {todolist}
        </div>
        <h3 align="center">Props for jokes</h3>
        {components}
        <h3 style={{ alignContent: "center" }} align="center">
          Product List
        </h3>
        <ul>{products}</ul>
      </div>
    );
  }
}
