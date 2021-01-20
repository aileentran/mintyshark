import React, {Component} from "react";

class LoanForm extends Component {
  constructor() {
    super()
    this.state = {
      loanName: "",
      amtBorrowed: "",
      disbursementDate: "",
      interestRate: "",
      futureDate:""
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const {name, value} = event.target
    this.setState(
      { [name]: value }
    )
  }

  render() {
    return (
      <div>
        <form class="loan-form">
          <input
            type="text"
            name="loanName"
            placeholder="Loan Name"
            value={this.state.loanName}
            onChange={this.handleChange}
          />

          // TODO: currency format
          <input
            type="text"
            name="amtBorrowed"
            placeholder="Amount Borrowed"
            value={this.state.amtBorrowed}
            onChange={this.handleChange}
          />

          // TODO: label date
          <input
            type="date"
            name="disbursementDate"
            value={this.state.disbursementDate}
            onChange={this.handleChange}
          />

          // TODO: Percentage format
          <input
            type="text"
            name="interestRate"
            placeholder="Interest Rate"
            value={this.state.interestRate}
            onChange={this.handleChange}
          />

          // TODO: label date. consider more clear variable name
          <input
            type="date"
            name="futureDate"
            // TODO: placeholder today's date?
            value={this.state.futureDate}
            onChange={this.handleChange}
          />
        </form>
        <div class="input-values">
          <p>Loan name: {this.state.loanName}</p>
          <p>Amount Borrowed: {this.state.amtBorrowed}</p>
          <p>Disbursement Date: {this.state.disbursementDate}</p>
          <p>Interest Rate: {this.state.interestRate}</p>
          <p>Future Date 🔮: {this.state.futureDate}</p>
          <p>A snapshot in the future: graduation date, 5 years in the future, 10 years, etc!</p>
        </div>
        // TODO: calulations and return values
      </div>
    )
  }
}

export default LoanForm;
