function StepsList({items, removeItem}) {

  return (
    <>
    <div className="steps-list-title">
      <p>Дата (ДД.MM.ГГ)</p>
      <p>Пройдено км</p>
      <p>Действия</p>
    </div>
      <ul>
        {items.map((el) =>
          <li key={el.id}>
            <p>{el.date}</p>
            <p>{el.dist}</p>
            <button onClick={() => removeItem(el.id)}>X</button>
          </li>
        )}
      </ul>
    </>
  )
}
  
export default StepsList
  