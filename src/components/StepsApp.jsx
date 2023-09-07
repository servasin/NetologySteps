import { useState } from "react";
import StepsList from "./StepsList"
import StepsForm from "./StepsForm";

function StepsApp() {

const [steps, setSteps] = useState([])

  function handleSubmit(item) {
    console.log(item);
    setSteps((oldValue)=> [...oldValue, item])
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
