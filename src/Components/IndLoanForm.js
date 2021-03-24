import React, {Component} from "react"

class IndLoanForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loanName: "",
      amtBorrowed: "",
      disbursementDate: "",
      interestRate: "",
      isSubsidized: false,
      loanAccrued: 0,
      loanTotal: 0
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  handleChange(event) {
    const {name, value, type, checked} = event.target
    type === "checkbox" ? this.setState({ [name] : checked }) : this.setState({ [name] : value })
  }

  handleSubmit(event){
    event.preventDefault()
    // Calculations for INDIVIDUAL loans
    const disbursementDate = new Date(this.state.disbursementDate)
    const gradDate = new Date(this.state.gradDate)
    const diffInTime = gradDate.getTime() - disbursementDate.getTime()
    const diffInDays = diffInTime / (1000 * 3600 * 24)

    //  convert interest rate into number by /100
    const dailyInterest = Number(this.state.interestRate) / 365 / 100

    const amtAccrued = this.state.isSubsidized ? 0 : dailyInterest * diffInDays * Number(this.state.amtBorrowed)

    const total = amtAccrued + Number(this.state.amtBorrowed)

    this.setState({
      loanAccrued: amtAccrued,
      loanTotal : total
    })
  }

  render(){
    return (
      <div>
        <form className="loan-form">
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

          <label>Disbursement Date</label>
            <input
              type="date"
              name="disbursementDate"
              value={this.state.disbursementDate}
              onChange={this.handleChange}
            />

          {/* TODO: Percentage format */}
          <input
            type="text"
            name="interestRate"
            placeholder="Interest Rate"
            value={this.state.interestRate}
            onChange={this.handleChange}
          />

          <label>
            <input
              type="checkbox"
              name="isSubsidized"
              checked={this.state.isSubsidized}
              onChange={this.handleChange}
            /> Subsidized?
          </label>

          {/* TODO: remove calculating individual loans */}
          <button>Calculate individual loan</button>
          <br />
        </form>


        <div className="input-values">
          <p>Loan name: {this.state.loanName}</p>
          <p>Amount Borrowed: {this.state.amtBorrowed}</p>
          <p>Disbursement Date: {this.state.disbursementDate}</p>
          <p>Interest Rate: {this.state.interestRate}</p>
          {console.log(this.state.isSubsidized)}
        </div>

        <div className="calculations">
          <p>Loan Accrual: {this.state.loanAccrued}</p>
          <p>Total cost of {this.state.loanName}: {this.state.loanTotal}</p>
        </div>
      </div>
    )
  }
}

export default IndLoanForm
