import React, {Component} from "react"

class GradPlan extends Component{
  constructor() {
    super()
    this.state = {
      gradDate: "",
      paymentPlan: ""
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const {name, value} = event.target
    this.setState({ [name] : value })
  }

  render() {
    return (
      <div className="grad-and-payment">
        <label>Graduation Date</label>
        <input
          type="date"
          name="gradDate"
          value={this.state.gradDate}
          onChange={this.handleChange}
        />

        <label>Payment Plan</label>
        <input
          type="text"
          name="paymentPlan"
          placeholder="10 yrs? 20 yrs? 30 yrs?"
          value={this.state.paymentPlan}
          onChange={this.handleChange}
        />

        <div className="input-values">
          <p>Graduation Date 🔮: {this.state.gradDate}</p>
          <p>A snapshot in the future: graduation date, 5 years in the future, 10 years, etc!</p>
          <p>Payment Plan 🔮: {this.state.paymentPlan}</p>
        </div>
      </div>
    )
  }
}

export default GradPlan
