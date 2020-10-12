// import React from 'react';
import React, { Component } from 'react';
import ChoosePlayer from "./components/ChoosePlayer";
import swal from 'sweetalert';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       board: Array(9).fill(null),
       player: null, 
       winner: null
    }
  }
  
   checkWinner() {
    let winLines =
      [
        ["0", "1", '2'],
        ["3", "4", '5'],
        ["6", "7", '8'],
        ["0", "3", '6'],
        ["1", "4", '7'],
        ["2", "5", '8'],
        ["0", "4", '8'],
        ["2", "4", '6'],
      ]
     for (var index =0; index<winLines.length; index++){
       const [a,b,c] =winLines[index]
       //console.log(winLines[index])
       var board = this.state.board
       if (board[a] && board[a] === board[b] && board[a] === board[c]){
        //  console.log(board[a]+"board[a]")
        //  console.log(board[a]+"board[b]")
        //  console.log(board[a]+"board[c]")
        //  alert("you won");
        //  console.log("win")
        //  this.setState({
        //    winner: this.state.player
        //  })
        swal({
          text: "The winner is "+ this.state.player + " !",
        });
          console.log("win")
       }
        // console.log("win")
     }

  }


handleClick (index){
  console.log(index)
  if (this.state.player && !this.state.winner){
    
//console.log(index )
const newBoard = this.state.board;
const newPlayer = this.state.player ==="O"? "X":"O"
if (newBoard[index] ===null ){
newBoard[index]=this.state.player;
// const newPlayer = this.state.player ==="x"? "o":"x"
this.setState({
  board: newBoard,
  // player:newPlayer
  player:newPlayer
})
this.checkWinner();
}
// console.log(this.state.board)

  }

}

    render() {
        if (this.props.winner) {
            return (<h2>Winner is {this.state.winner}</h2>)
        } else {
            return this.props.player ?
                <h2>Next player is {this.state.player}</h2> :
                <ChoosePlayer player={(e) => this.handleSetPlayer(e)} />
        }
    }

setPlayer(player){
//console.log(player)
this.setState({
  player:player
})
}

handleButtonClick = () => {
    this.form.reset() // resets "username" field to "admin"
  }


  render() {
  const Box = this.state.board.map((box,index)=><div className="box" key={index}
  onClick={()=>this.handleClick(index)} >
     {box}</div>)
  const status = this.state.player ? <p>Next player is {this.state.player}</p> :<ChoosePlayer player={(event)=>this.setPlayer(event)}/>
    return (
      <form ref={form => this.form = form}>
      <div className="container" >
    <h1>Tic Tac Toe Game</h1> 
    {status}
    <div className="board">
      {Box}
    {/* <div className="box"> </div>
    <div className="box"> </div>
    <div className="box"> </div>
    <div className="box"> </div>
    <div className="box"> </div>
    <div className="box"> </div>
    <div className="box"> </div>
    <div className="box"> </div>
    <div className="box"> </div> */}
    <button className="again" onClick={this.handleButtonClick}>Try Again</button>
    </div>
    </div>
    </form>
    )
  }
}

export default App