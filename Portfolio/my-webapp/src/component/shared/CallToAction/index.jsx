import React from 'react'
import "./style.scss";
import {BsArrowRightShort} from "react-icons/bs";
import Arrow from '../Arrow';
const CallToAction = ({text}) => {

  return (
    <div className="call-to-action">
        <span className="text">{text}</span>
        <Arrow/>
    </div>
  )
}

export default CallToAction;