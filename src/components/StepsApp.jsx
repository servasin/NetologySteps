import { useState } from "react";
import StepsList from "./StepsList"
import StepsForm from "./StepsForm";

function StepsApp() {

  const [steps, setSteps] = useState([])

  function arrSorted(arr) {
    if(arr && arr.length > 1){
      arr.sort((a,b) =>{
        let [d1, m1, y1] = a.date.split('.')
        let [d2, m2, y2] = b.date.split('.')
        return new Date(20+y2, +m2-1, +d2) - new Date(20+y1, +m1-1, +d1);
      });
    }
    return arr
  }

  function handleSubmit(item) {
    if (steps.some(elem => elem.date === item.date)) {
      const newSteps = steps.map((el)=>{
        if (el.date === item.date) {
          return { 
            id: el.id, 
            date: el.date, 
            dist: parseFloat(el.dist) + parseFloat(item.dist)
          }
        } else {
          return el
        }
      })
      setSteps(newSteps)
    } else {
      item.id = self.crypto.randomUUID();
      setSteps([...steps, item])
    }
  }

  function removeItem(id) {
    setSteps(steps.filter((el) => el.id !== id))
  }

  return (
    <>
      <StepsForm handleSubmit={handleSubmit}/>
      {steps.length ? <StepsList items={arrSorted(steps)} removeItem={removeItem} /> : ''} 
    </>
  )
}

export default StepsApp
