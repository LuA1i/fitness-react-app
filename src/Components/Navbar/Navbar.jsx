import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="logo">
          <h1>
            <Link to={'/bmiCalculator'} className="logo-link">
              Fit<span>Tracker</span>
            </Link>
          </h1>
        </div>

        <ul>
          <li>
            <Link className="nav-links" to={'/bmiCalculator'}>
              BMI
            </Link>
          </li>
          <li>
            <Link className="nav-links" to={'/CalorieTracker'}>
              CalorieTracker
            </Link>
          </li>
          <li>
            <Link className="nav-links" to={'/CalorieGoal'}>
              CalorieGoal
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
