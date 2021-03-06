import React from "react"

function GradPlan(props){
  return (
    <div className="grad-and-payment">
      <label>Graduation Date</label>
      <input
        type="date"
        name="gradDate"
        value={props.data.gradDate}
        onChange={props.handleChange}
      />

      <label>Payment Plan</label>
      <input
        type="text"
        name="paymentPlan"
        placeholder="10 yrs? 20 yrs? 30 yrs?"
        value={props.data.paymentPlan}
        onChange={props.handleChange}
      />

      <div className="input-values">
        <p>Graduation Date 🔮: {props.data.gradDate}</p>
        <p>A snapshot in the future: graduation date, 5 years in the future, 10 years, etc!</p>
        <p>Payment Plan 🔮: {props.data.paymentPlan}</p>
      </div>
    </div>
  )
}

export default GradPlan
