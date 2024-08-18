import './App.css'
import '../src/Components/Navbar/Navbar.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import BmiCalculator from './Pages/bmiCalculator'
import CalorieTracker from './Pages/CalorieTracker'
import CalorieGoal from './Pages/CalorieGoal'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/bmiCalculator" element={<BmiCalculator />} />
          <Route path="/CalorieTracker" element={<CalorieTracker />} />
          <Route path="/CalorieGoal" element={<CalorieGoal />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
