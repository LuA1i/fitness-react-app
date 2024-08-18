import React, { useState } from 'react'
import '../Components/BmiCalc/bmiCalc.css'
const BmiCalculator = () => {
  const [userHeight, setUserHeight] = useState('')
  const [userWeight, setUserWeight] = useState('')
  const [bmiValue, setBmiValue] = useState('')
  const [bmiMessage, setBmiMessage] = useState('')

  const calculateBmi = () => {
    if (userHeight && userWeight) {
      const heightInMeters = userHeight / 100
      const bmi = (userWeight / (heightInMeters * heightInMeters)).toFixed(2)
      setBmiValue(bmi)

      let message = ''
      if (bmi < 18.5) {
        message = 'You are Underweight'
      } else if (bmi >= 18.5 && bmi < 25) {
        message = 'You are Normal Weight'
      } else if (bmi >= 25 && bmi > 30) {
        message = 'You are Overweight'
      } else {
        message = 'You are Obese'
      }
      setBmiMessage(message)
    } else {
      setBmiValue('')
      setBmiMessage('')
    }
  }

  return (
    <div className="container">
      <div className="result-container">
        <h1>Your BMI: {bmiValue} </h1>
        <p>Result : {bmiMessage}</p>
      </div>
      <div className="input-container">
        <label htmlFor="height">Enter Your Height (cm): </label>
        <input
          type="number"
          id="height"
          value={userHeight}
          onChange={(e) => setUserHeight(e.target.value)}
          required
        />
      </div>
      <div className="input-container">
        <label htmlFor="weight">Enter Your Weight (Kg): </label>
        <input
          type="number"
          id="weight"
          value={userWeight}
          onChange={(e) => setUserWeight(e.target.value)}
          required
        />
      </div>
      <button className="calc-btn" onClick={calculateBmi}>
        Click to Calculate BMI
      </button>
    </div>
  )
}

export default BmiCalculator
