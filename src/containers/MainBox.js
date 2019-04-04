import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon} from '../components/Pages.js'

class MainBox extends React.Component {

  constructor(){
    super()
    this.state = {
      pageId: "profile"
    }
  }

  changePage = (newPageId) => {
    this.setState({pageId: newPageId})
  }

  loadPage = () => {
    switch(this.state.pageId){
      case "profile":
        return <Profile />
      case "photo":
        return <Photos />
      case "cocktail":
        return <Cocktails />
      case "pokemon":
        return <Pokemon />
    }
  }

  render() {
    return (
      <div>
        <MenuBar changePage={this.changePage} pageId={this.state.pageId}/>
        {this.loadPage()}
      </div>
    )
  }

}

export default MainBox
