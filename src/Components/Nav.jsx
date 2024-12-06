import React from 'react'

function Nav(props) {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-success">
        <div className="container-fluid">
        <h1>
        <a className="navbar-brand text-white bold mx-5" href="#">{props.name}</a>
        </h1>
       
        </div>
      </nav>
    </>
  )
}

export default Nav