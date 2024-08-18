import React, { useState } from 'react'
import '../Components/CaloriGoalCSS/CalorieGoalCss.css'

const CalorieGoal = () => {
  const [height, setHeight] = useState(0)
  const [weight, setWeight] = useState(0)
  const [age, setAge] = useState(0)
  const [gender, setGender] = useState('male')
  const [activityLevel, setActivityLevel] = useState('level_1')
  const [calories, setCalories] = useState({ maintain: 0, gain: 0, lose: 0 })

  const handleCalc = () => {
    let bmr = 0
    if (gender === 'male') {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5
    } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161
    }

    let activityMultiplier = 1.2
    switch (activityLevel) {
      case 'level_2':
        activityMultiplier = 1.375
        break
      case 'level_3':
        activityMultiplier = 1.55
        break
      case 'level_4':
        activityMultiplier = 1.725
        break
      case 'level_5':
        activityMultiplier = 1.9
        break
      default:
        activityMultiplier = 1.2
    }

    const maintenanceCalories = bmr * activityMultiplier
    setCalories({
      maintain: Math.round(maintenanceCalories),
      gain: Math.round(maintenanceCalories + 500),
      lose: Math.round(maintenanceCalories - 500),
    })
  }
  return (
    <div className="container">
      <h1>Calorie Goal</h1>

      <div className="calorie-input-container">
        <div className="input-container">
          <label>
            Age (15+) :
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </label>
        </div>
        <div className="input-container">
          <label htmlFor="Gender">
            Gender:
            <select
              id="gender-selection"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>
        </div>
        <div className="input-container">
          <label>
            Height (cm):
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </label>
        </div>
        <div className="input-container">
          <label>
            Weight (kg):
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </label>
        </div>
        <div className="input-container">
          <label>
            Activity Level:
            <select
              value={activityLevel}
              onChange={(e) => setActivityLevel(e.target.value)}
            >
              <option value="level_1">Sedentary</option>
              <option value="level_2">Lightly active</option>
              <option value="level_3">Moderately active</option>
              <option value="level_4">Very active</option>
              <option value="level_5">Extra active</option>
            </select>
          </label>
        </div>
        <button className='calorieGoal-button' onClick={handleCalc}>Calculate</button>
      </div>
      <div className='calorie-goal'>
        <h2>Calorie Goals</h2>
        <p>Maintain weight: {calories.maintain} calories/day</p>
        <p>Gain weight: {calories.gain} calories/day</p>
        <p>Lose weight: {calories.lose} calories/day</p>
      </div>
    </div>
  )
}

export default CalorieGoal
