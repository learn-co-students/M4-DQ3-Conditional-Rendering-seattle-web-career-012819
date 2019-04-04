import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

constructor(){
  super()
  this.state ={
    display: "profile"
  }
}

changeState(name){
  this.setState({
    display: name()
  })
}

triggerDisplay = () =>{
   this.changeState(Profile)
}
photoDisplay = () =>{
   this.changeState(Photos)
}
cocktailDisplay = () =>{
   this.changeState(Cocktails)
}
pokemonDisplay = () =>{
  this.setState({
    display: <Pokemon />
  })
}
  render() {

    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */

    const detailsToDisplay = <div>Hi, I'm a div!</div>

    return (
      <div>
        <MenuBar
          profileClick = {this.triggerDisplay}
          photoClick = {this.photoDisplay}
          cocktailClick = {this.cocktailDisplay}
          pokemonClick ={this.pokemonDisplay}
          />
        {detailsToDisplay}
        {this.state.display}
      </div>
    )
  }

}

export default MainBox
