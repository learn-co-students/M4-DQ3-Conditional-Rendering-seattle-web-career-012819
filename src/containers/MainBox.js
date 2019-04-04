import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {
  constructor() {
    super()
    this.state = {menuItem: 'profile'}
  }

  handleClick = (ev) => {
    const menuList = Array.from(document.getElementsByClassName('item'))
    menuList.forEach((item) => {
      item.classList.remove('active')
    })
    ev.target.classList.toggle("active")
    this.setState({
      menuItem: ev.target.id
    })
  }

  choosePage = () => {
    const menuItem = this.state.menuItem
    if (menuItem === 'profile') {
      return <Profile />
    } else if (menuItem === 'photo') {
      return <Photos />
    } else if (menuItem === 'cocktail') {
      return <Cocktails />
    } else if (menuItem === 'pokemon') {
      return <Pokemon />
    }
  }

  render() {

    /*

    Replace the code below! Depending on what menu item is selected in the menu, I should render either a Profile, Photos, Cocktails, or Pokemon component.Think of a way to track which menu item was selected. Which component should have state? Which component should have methods to control state? Where should these methods be called?

    */

    const detailsToDisplay = <div>Hi, I'm a div!</div>

    return (
      <div>
        <MenuBar handleClick={this.handleClick}/>
        {this.choosePage()}
      </div>
    )
  }

}

export default MainBox
