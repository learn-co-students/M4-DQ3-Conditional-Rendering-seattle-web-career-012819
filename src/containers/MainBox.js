import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {
  constructor(props){
    super(props)
    this.state={
      display: 'original'
    }
}


handleClick = (e) => {
  this.setState({
      display: e.target.id
    })
}
  render() {
    let display;
    const state = this.state.display
      if(state ==='profile'){
        display =  <Profile />
      }
      else if(state ==='photo'){
        display =  <Photos />
      }
      else if(state ==='cocktail'){
        display =  <Cocktails />
      }
      else if(state ==='pokemon'){
        display =  <Pokemon />
      }

      return (
        <div>
          <MenuBar handleClick={this.handleClick}/>
          {display}
        </div>
      )

    }


  }



export default MainBox
