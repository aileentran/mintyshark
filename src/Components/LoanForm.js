import React, {Component} from "react"
import AddAndDeleteLoans from "./AddAndDeleteLoans"

class LoanForm extends Component {
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

  handleSubmit(event) {
    event.preventDefault()
    // TODO: work on calculations
  }

  render() {
    return(
      <div className="loan-form">
        <form onSubmit={this.handleSubmit}>

          <AddAndDeleteLoans />

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

          <input
            type="submit"
            value="Submit"
          />

        </form>
        {/* POTENTIAL RESOURCE TO ADD FORMS: https://dev.to/email2vimalraj/dynamic-form-fields-using-react-35ci */}
        {/* TODO: include buttons - add loans, calculate */}

        {/* TODO for calculations: consider 6 months after grad for subsidized loans!*/}

        <div className="input-values">
          <p>Graduation Date 🔮: {this.state.gradDate}</p>
          <p>A snapshot in the future: graduation date, 5 years in the future, 10 years, etc!</p>
          <p>Payment Plan 🔮: {this.state.paymentPlan}</p>
        </div>
      </div>
    )
  }
}

export default LoanForm
