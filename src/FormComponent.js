import React from "react"

function TravelComponent(props){
    return (<div>
        <form>
          <input 
            type = "text"
            name = "firstname"
            placeholder = "First Name"
            value = {props.data.firstname}
            onChange = {props.handleChange}
          /><br/>
          <input 
            type = "text"
            name = "lastname"
            placeholder = "Last Name"
            value = {props.data.lastname}
            onChange = {props.handleChange}
          /><br/>
          <input 
            type = "text"
            name = "age"
            placeholder = "Age"
            value = {props.data.age}
            onChange = {props.handleChange}
          /><br/>
          isVegan? 
          <input 
            type = "checkbox"
            name = "isVegan"
            checked = {props.data.isVegan}
            onChange = {props.handleChange}
          /><br/>
          isDiabetic?
          <input 
            type = "checkbox"
            name = "isDiabetic"
            checked = {props.data.isDiabetic}
            onChange = {props.handleChange}
          /><br/>
          isLactosetol
          <input 
            type = "checkbox"
            name = "isLactosetol"
            checked = {props.data.isLactosetol}
            onChange = {props.handleChange}
          /><br/>
          <br/><br/>
          <button type="submit">Submit</button>
        </form>
        <hr></hr>
        <h1>you have enterd these</h1>
        First Name:-{props.data.firstname}<br/>
        Last Name:-{props.data.lastname}<br/>
        Age:-{props.data.age}
      </div>)
}

export default TravelComponent;