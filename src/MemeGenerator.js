import React from "react"
class MemeGenerator extends React.Component{
    constructor(){
        super()
        this.state ={
            toptext:"",
            bottomtext:"",
            randomimg:"https://i.imgflip.com/1bij.jpg",
            allimage:[]

        }
        this.handlememe = this.handlememe.bind(this)
        this.memegenerate = this.memegenerate.bind(this)
    }
    handlememe(event){
        const {name, value} = event.target;
        this.setState({
            [name]:value,
        })
    }
    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
            .then(resposne => resposne.json())
            .then(data =>{
                const {memes} = data.data;
                console.log(memes[0])
                this.setState({
                    allimage:memes,
                })
            })
    }
    memegenerate(event){
        let memeindex = Math.floor(Math.random()*this.state.allimage.length)
        this.setState({
            randomimg:this.state.allimage[memeindex].url
        })
        event.preventDefault();
    }
    render(){
        return (
            <div className="meme">
                <form>
                    <input
                        type="text"
                        name="toptext"
                        placeholder="Top Text"
                        onChange={this.handlememe}
                        value={this.state.toptext}
                       
                    />
                    <button onClick={this.memegenerate}>GEN</button>
                    <input
                        type="text"
                        name="bottomtext"
                        placeholder="Bottom Text"
                        value={this.state.bottomtext}
                        onChange={this.handlememe}
                    />
                </form>
                <img src={this.state.randomimg}/>
                <h2>{this.state.toptext}</h2>
                <h2>{this.state.bottomtext}</h2>
                
            </div>
        )
    }
    
}
export default MemeGenerator