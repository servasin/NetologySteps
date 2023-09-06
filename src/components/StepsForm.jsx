import { useState } from "react";

function StepsForm(handleSubmit) {

const [date, setDate] = useState()
const [dist, setDist] = useState()

let stepsItem = {
    date: date,
    dist: dist
}

// const handleChange = (e) => {
//     console.log(e.target.id, e.target.value);
//     stepsItem = {...stepsItem, [e.target.id]: e.target.value };
// };

  return (
    <>
      <form onSubmit={() => handleSubmit(stepsItem)}>
        <label htmlFor="date">Дата (ДД.MM.ГГ)</label>
        <input type="text" id="date" onChange={e => setDate(e.target.value)} />
        <label htmlFor="dist">Пройдено км</label>
        <input type="text" id="dist" onChange={e => setDist(e.target.value)}/>
        <input type="submit" value={'OK'}/>
      </form>
    </>
  )
}

export default StepsForm
