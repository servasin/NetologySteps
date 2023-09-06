import { useState } from "react";
import StepsList from "./StepsList"

function StepsApp() {

const [steps, setSteps] = useState([])
const [date, setDate] = useState()
const [distance, setDistance] = useState()

  function handleSubmit(e) {
    e.preventDefault()
    setSteps(steps.concat({date: date, distance: distance}))
  }

  return (
    <>
      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="date">Дата (ДД.MM.ГГ)</label>
        <input type="text" id="date" onChange={(e) => setDate(e.target.value)} />
        <label htmlFor="distance">Пройдено км</label>
        <input type="text" id="distance" onChange={(e) => setDistance(e.target.value)}/>
        <input type="submit" value={'OK'}/>
      </form>
      <div className="steps-list-title">
        <p>Дата (ДД.MM.ГГ)</p>
        <p>Пройдено км</p>
        <p>Действия</p>
      </div>
      <ul>
        {steps.map((__, i) =>
          <li key={i}>
            <p>{date}</p>
            <p>{distance}</p>
            <button>X</button>
          </li>
        )}
      </ul>
    </>
  )
}

export default StepsApp
