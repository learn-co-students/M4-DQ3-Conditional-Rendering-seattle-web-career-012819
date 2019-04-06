import React from 'react'

const MenuBar = ({handleActive, active}) => {

  const handleClick = (event) => {
    handleActive(event.target.id)
  }

  let menuItem = {
    'profile': null,
    'photo': null,
    'cocktail': null,
    'pokemon': null
  }

  menuItem[active] = 'active'

  return (
    <div className='ui four item menu'>
      <a className={'item' + menuItem.profile} id="profile" onClick={handleClick}>
        <i className="user large icon" id="profile"/>
      </a>

      <a className={'item' + menuItem.photo} id="photo" onClick={handleClick}>
        <i className="photo large icon" id="photo"/>
      </a>

      <a className={'item' + menuItem.cocktail} id="cocktail" onClick={handleClick}>
        <i className="cocktail large icon" id="cocktail"/>
      </a>

      <a className={'item' + menuItem.pokemon} id="pokemon" onClick={handleClick}>
        <i className=" themeisle large icon" id="pokemon"/>
      </a>
    </div>
  )

}

export default MenuBar
