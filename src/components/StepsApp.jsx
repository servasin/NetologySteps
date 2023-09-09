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
    if(steps.length) {
      const nextSteps = steps.map((el)=>{
        if (el.date===item.date) {
          return { id: el.id, date: el.date, dist: Number(el.dist) + Number(item.dist)}
        } else {
          return el
        }
      })
      setSteps(nextSteps)
    } else {
      setSteps([...steps, item])
    }
    
    // setSteps((steps) =>
    //   steps.map(el =>{
    //   if (el.date===item.date) {
    //     return { date: el.date, dist: Number(el.dist) + Number(item.dist)}
    //   } else {
    //   return item
    //   }
    // })
    // )
    // console.log(arrSumDist);
    // setSteps(arrSumDist)

    // setSteps((oldValue)=> [...oldValue, item])
      // setSteps(steps.concat(item))
  }

  function removeItem(id) {
    setSteps(steps.filter((el) => el.id !== id))
  }

  return (
    <>
      <StepsForm handleSubmit={handleSubmit}/>
      {/* {steps.length ? <StepsList items={steps}/> : ''}  */}
      <StepsList items={arrSorted(steps)} removeItem={removeItem}/>
    </>
  )
}

export default StepsApp
