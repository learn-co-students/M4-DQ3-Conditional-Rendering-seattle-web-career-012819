import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

  state = {
    active: 'profile'
  }

  handleActive = (active) => {
    this.setState({active})
  }

  render() {

    const details = {
      'profile':  <Profile />,
      'photo':    <Photos />,
      'cocktail': <Cocktails />,
      'pokemon':  <Pokemon />
    }

    return (
      <div>
        <MenuBar handleActive={this.handleActive} active={this.state.active} />
        {
          (!details[this.state.active]) ? null :
          details[this.state.active]
        }
      </div>
    )
  }

}

export default MainBox
