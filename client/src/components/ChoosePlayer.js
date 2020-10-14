import React, { Component } from 'react'

export class choosePlayer extends Component {
    handleForm(event){
        event.preventDefault()
        console.log(event.target.player.value)
        console.log(this.props.player(event.target.player.value))
        //console.log(event.target.player + "player"  )
    }
    render() {
        return (
         <form onSubmit= {(event)=>{this.handleForm(event)}}>
             <p>Choose your weapon</p>
             <label> X </label>
             <input type="radio" name="player" id="X" value="X"/>
             <br/>
             <label> O </label>
             <input type="radio" name="player" id="O" value="O"/>
             <br/>

             <input className="submit" type ="submit" value ="Start"/>
         </form>
        )
    }
}

export default choosePlayer

////
