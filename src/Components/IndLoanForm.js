import React, {Component} from "react"

class IndLoanForm extends Component {
  constructor() {
    super()
    this.state = {
      loanName: "",
      amtBorrowed: "",
      disbursementDate: "",
      interestRate: "",
      futureDate: "",
      loanAccrued: 0,
      loanTotal: 0
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  // TODO: convert necessary states into nums?
  // Convert interest number into actual num NOPE! every input / 100
  handleChange(event) {
    const {name, value} = event.target
    this.setState({ [name] : value })
  }

  // TODO: sum all loans
  handleSubmit(event){
    event.preventDefault()
    // Calculations for INDIVIDUAL loans
    const disbursementDate = new Date(this.state.disbursementDate)
    const futureDate = new Date(this.state.futureDate)
    const diffInTime = futureDate.getTime() - disbursementDate.getTime()
    const diffInDays = diffInTime / (1000 * 3600 * 24)

    //  convert interest rate into number by /100
    const dailyInterest = Number(this.state.interestRate) / 365 / 100

    const amtAccrued = dailyInterest * diffInDays * Number(this.state.amtBorrowed)

    const total = amtAccrued + Number(this.state.amtBorrowed)
    this.setState({
      loanAccrued: amtAccrued,
      loanTotal : total
    })
  }

  render() {
    return (
      <div>
        <form className="loan-form" onSubmit={this.handleSubmit}>
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
          <button>Calculate Individual Loan</button>
        </form>

        <div className="input-values">
          <p>Loan name: {this.state.loanName}</p>
          <p>Amount Borrowed: {this.state.amtBorrowed}</p>
          <p>Disbursement Date: {this.state.disbursementDate}</p>
          <p>Interest Rate: {this.state.interestRate}</p>
          <p>Future Date 🔮: {this.state.futureDate}</p>
          <p>A snapshot in the future: graduation date, 5 years in the future, 10 years, etc!</p>
        </div>

        {/* TODO: calulations and return values */}
        <div className="calculations">
          <p>Loan Accrual: {this.state.loanAccrued}</p>
          <p>Total cost of {this.state.loanName}: {this.state.loanTotal}</p>
        </div>
      </div>
    )
  }
}

export default IndLoanForm
