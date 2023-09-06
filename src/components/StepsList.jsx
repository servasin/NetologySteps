function StepsList({items}) {

  return (
    <>
    <div className="steps-list-title">
      <p>Дата (ДД.MM.ГГ)</p>
      <p>Пройдено км</p>
      <p>Действия</p>
    </div>
      <ul>
        {items.map((el, i) =>
          <li key={i}>
            <p>{el.date}</p>
            <p>{el.distance}</p>
            <button>X</button>
          </li>
        )}
      </ul>
    </>
  )
}
  
export default StepsList
  