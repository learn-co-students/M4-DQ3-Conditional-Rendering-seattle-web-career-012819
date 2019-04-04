import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      stuff: 'profile'
    }
  }

  handleClick = (id) => {
    console.log("WAHT", id)
    this.setState({ stuff: id })
  }

  renderPageContents() {
    if (this.state.stuff === 'photo') return Photos()
    else if (this.state.stuff === 'cocktail') return Cocktails()
    else if (this.state.stuff === 'pokemon') return <Pokemon />
    else return Profile()
  }

  render() {

    return (
      <div>
        <MenuBar handleClick={this.handleClick}/>
        {this.renderPageContents()}} 
      </div>
    )
  }

}

export default MainBox
