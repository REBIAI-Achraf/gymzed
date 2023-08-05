import React from 'react'
import'./Buttons.css'

const Button = (props) => {
  return (
    <>
    <a className="btn1">{props.children}</a>
    </>
  )
}
const Button2 = (props) => {
    return (
        <a className="btn2" href={props.href}>{props.children}</a>
        )
  }
  const Button3 = (props) => {
    return (
        <a className="btn3">{props.children}</a>
        )
  }


export default Button

export {Button2,Button3}