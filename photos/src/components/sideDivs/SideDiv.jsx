import React from 'react'
import "./sideDiv.css"

const SideDiv = (props) => {
  return (
    <div className="sideDiv">
        {props.item.Icon}
        <p className='divText'>{props.item.text}</p>
    </div>
  )
}

export default SideDiv