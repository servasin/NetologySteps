import { useState } from "react";
import StepsList from "./StepsList"
import StepsForm from "./StepsForm";

function StepsApp() {

const [steps, setSteps] = useState([])

  function handleSubmit(item) {
    console.log(item);
    setSteps(steps.concat(item))
    e.preventDefault()
  }

  return (
    <>
      <StepsForm handleSubmit={handleSubmit}/>
      {/* {steps.length ? <StepsList items={steps}/> : ''}  */}
      <StepsList items={steps}/>
    </>
  )
}

export default StepsApp
