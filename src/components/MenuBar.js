import React from 'react'

class MenuBar extends React.Component {


  handleClick = (e) => {
    this.props.handleClick(e.target.id)
  }

  render() {
    return (
      <div className="ui four item menu">
        <a 
          className="item active" 
          id="profile"
          onClick={this.handleClick}
        >
          <i className="user large icon" id="profile" onClick={this.handleClick}/>
        </a>

        <a className="item" id="photo">
          <i className="photo large icon" id="photo" onClick={this.handleClick}/>
        </a>

        <a className="item" id="cocktail">
          <i className="cocktail large icon" id="cocktail" onClick={this.handleClick}/>
        </a>

        <a className="item" id="pokemon"> 
          <i className=" themeisle large icon" id="pokemon" onClick={this.handleClick}/>
        </a>
      </div>
    )
  }
}

export default MenuBar
