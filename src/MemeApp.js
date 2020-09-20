import React from "react"
import Header from "./Header"
import "./styles.css";
import MemeGenerator from "./MemeGenerator"
function MemeApp(){
    return(
        <div>
            <Header/>
            <MemeGenerator/>
        </div>
    )
}
export default MemeApp