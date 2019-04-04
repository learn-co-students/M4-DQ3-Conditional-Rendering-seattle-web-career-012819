import React from 'react'

const MenuBar = (props) => {

  function handleClick(ev){
    ev.preventDefault();
    props.changePage(ev.target.id)
  }

  function itemClasses(targetId){
    return props.pageId === targetId ? "item active" : "item"
  }

  return (
    <div className="ui four item menu">
      <a className={itemClasses("profile")}
         id="profile"
         onClick={handleClick}>
        <i className="user large icon" id="profile"/>
      </a>

      <a className={itemClasses("photo")}
         id="photo"
         onClick={handleClick}>
        <i className="photo large icon" id="photo"/>
      </a>

      <a className={itemClasses("cocktail")}
         id="cocktail"
         onClick={handleClick}>
        <i className="cocktail large icon" id="cocktail"/>
      </a>

      <a className={itemClasses("pokemon")}
         id="pokemon"
         onClick={handleClick}>
        <i className=" themeisle large icon" id="pokemon"/>
      </a>
    </div>
  )

}

export default MenuBar
