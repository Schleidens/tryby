import React from 'react'
import { Link } from 'gatsby'
import '../scss/style.scss'


export default function layout({children}) {
  return (
    <>
        <div className="navbar">
            <Link to='/'>
            <h1 className="logo">
                tryby
            </h1>
            </Link>

            <div className="nav">
                <ul>
                    <li>
                        <Link to='/about'>
                            About
                        </Link>
                    </li>
                    <li>
                        <a href='https://github.com/Schleidens/tryby'>
                            Github
                        </a>
                    </li>
                </ul>
            </div>
        </div>

        {children}

        <div className="footer">
            <span>
                Build with &#9829; by <a href="https://github.com/Schleidens" target="blank">Schleidens.Dev</a>
            </span>
        </div>
    </>
  )
}
