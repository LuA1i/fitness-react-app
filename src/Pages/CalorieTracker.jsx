import React, { useState } from 'react'
import '../Components/CalorieTracker/calorieTracker.css'

const CalorieTracker = () => {
  const [food, setFood] = useState('')
  const [cal, setCal] = useState('')
  const [foodList, setFoodList] = useState([])
  const [edit, setEdit] = useState(null)

  const handleAddFood = () => {
    if (food && cal) {
      if (edit !== null) {
        const updateFoodList = foodList.map((item, index) =>
          index === edit ? { food, cal: Number(cal) } : item
        )
        setFoodList(updateFoodList)
        setEdit(null)
      } else {
        setFoodList([...foodList, { food, cal: Number(cal) }])
      }
      setFood('')
      setCal('')
    }
  }

  const handleEdit = (index) => {
    setFood(foodList[index].food)
    setCal(foodList[index].cal)
    setEdit(index)
  }

  const handleDelete = (index) =>
    setFoodList(foodList.filter((_, i) => i !== index))

  return (
    <div>
      <div className="container">
        <h1>
          Calorie Goal: {foodList.reduce((total, item) => total + item.cal, 0)}{' '}
          cal{' '}
        </h1>

        <div className="userinput">
          <label>Add Food:</label>
          <input
            className="food-item"
            type="text"
            value={food}
            onChange={(e) => setFood(e.target.value)}
          />
          <label>Cal:</label>
          <input
            className="calories"
            type="number"
            value={cal}
            onChange={(e) => setCal(e.target.value)}
          />
          <button onClick={handleAddFood} className="add-food">
            {edit !== null ? 'Update' : 'Add'}
          </button>
        </div>
        <div className="food-list">
          <h3>Food List:</h3>
          <ul>
            {foodList.map((item, index) => (
              <li key={index}>
                {item.food}: {item.cal} cal
                <button
                  className="delete-food"
                  onClick={() => handleDelete(index)}
                >
                  Delete
                </button>
                <button className="edit-food" onClick={() => handleEdit(index)}>
                  Edit
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CalorieTracker
