import { useState } from "react";

function StepsForm({handleSubmit}) {

const [date, setDate] = useState('')
const [dist, setDist] = useState('')

const onHandleSubmit = (e) => {
  e.preventDefault();
  handleSubmit({date, dist});
  setDate('');
  setDist('');
}

  return (
    <>
      <form onSubmit={onHandleSubmit}>
        <label htmlFor="date">Дата (ДД.MM.ГГ)</label>
        <input type="text" id="date" onChange={e => setDate(e.target.value)} defaultValue={date}/>
        <label htmlFor="dist">Пройдено км</label>
        <input type="text" id="dist" onChange={e => setDist(e.target.value)} defaultValue={dist}/>
        <input type="submit" value={'OK'}/>
      </form>
    </>
  )
}

export default StepsForm
