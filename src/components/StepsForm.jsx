import { useState } from "react";

function StepsForm({handleSubmit}) {

const [err, setErr] = useState('')
const [date, setDate] = useState('')
const [dist, setDist] = useState('')

const onHandleSubmit = (e) => {
  e.preventDefault();
  if (date.trim() === '' || dist.trim() === '') {
    setErr('Пожалуйста, заполните все поля.');
    return;
  }
  handleSubmit({date, dist});
  setDate('');
  setDist('');
  setErr('');
}

  return (
    <>
      {err ? <p className="err-mess">{err}</p> : ''}
      <form onSubmit={onHandleSubmit}>
        <label htmlFor="date">Дата (ДД.MM.ГГ)</label>
        <input type="text" id="date" onChange={e => setDate(e.target.value)} value={date}/>
        <label htmlFor="dist">Пройдено км</label>
        <input type="text" id="dist" onChange={e => setDist(e.target.value)} value={dist}/>
        <input type="submit" value={'OK'}/>
      </form>
    </>
  )
}

export default StepsForm
