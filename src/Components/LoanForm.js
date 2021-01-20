import React, {Component} from "react"

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
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    const {name, value} = event.target
    this.setState(
      { [name]: value }
    )
  }

  handleSubmit(event){
    event.preventDefault()
    const disbursementDate = new Date(this.state.disbursementDate)
    const futureDate = new Date(this.state.futureDate)
    const diffInTime = futureDate.getTime() - disbursementDate.getTime()
    const diffInDays = diffInTime / (1000 * 3600 * 24)

    //  convert interest rate into number by /100
    const dailyInterest = Number(this.state.interestRate) / 365 / 100

    const amtAccrued = dailyInterest * diffInDays * Number(this.state.amtBorrowed)

    const indLoan = amtAccrued + Number(this.state.amtBorrowed)
  }

  render() {
    return (
      <div>
        <form class="loan-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="loanName"
            placeholder="Loan Name"
            value={this.state.loanName}
            onChange={this.handleChange}
          />


          {/* TODO: currency format */}
          <input
            type="text"
            name="amtBorrowed"
            placeholder="Amount Borrowed"
            value={this.state.amtBorrowed}
            onChange={this.handleChange}
          />

          <label>
            Disbursement Date
            <input
              type="date"
              name="disbursementDate"
              value={this.state.disbursementDate}
              onChange={this.handleChange}
            />
          </label>

          {/* TODO: Percentage format */}
          <input
            type="text"
            name="interestRate"
            placeholder="Interest Rate"
            value={this.state.interestRate}
            onChange={this.handleChange}
          />

          <label>
            Future Date
            <input
              type="date"
              name="futureDate"
              value={this.state.futureDate}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <button>Calculate!</button>
        </form>

        <div class="input-values">
          <p>Loan name: {this.state.loanName}</p>
          <p>Amount Borrowed: {this.state.amtBorrowed}</p>
          <p>Disbursement Date: {this.state.disbursementDate}</p>
          <p>Interest Rate: {this.state.interestRate}</p>
          <p>Future Date 🔮: {this.state.futureDate}</p>
          <p>A snapshot in the future: graduation date, 5 years in the future, 10 years, etc!</p>
        </div>

        {/* TODO: calulations and return values */}
        <div class="calculations">
        </div>
      </div>
    )
  }
}

export default LoanForm
