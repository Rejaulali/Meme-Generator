import React from "react"
import TravelComponent from "./FormComponent.js"
class TravelForm extends React.Component{
    constructor(){
      super()
      this.state = {
        firstname:"",
        lastname:"",
        age:"",
        isVegan: false,
        isDiabetic: false,
        isLactosetol: false,
        
      }
      this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event){
      const {name,value,type,checked} = event.target;
      type === "checkbox" ?
      this.setState(prevState =>{ 
        return{
                [name]:checked
          }
      }):
      this.setState({
        [event.target.name]:value,
      });
    }
    render(){
        return (
            <TravelComponent handleChange={this.handleChange} data = {this.state}/>
        )
      
    }
  }
  export default TravelForm;