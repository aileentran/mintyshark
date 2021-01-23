import React, {Component} from "react"

class IndLoanForm extends Component {
  constructor() {
    super()
    this.state = {
      loanName: "",
      amtBorrowed: "",
      disbursementDate: "",
      interestRate: "",
      gradDate: "",
      loanAccrued: 0,
      loanTotal: 0,
      subLoans: [{
        loanName: "",
        amtBorrowed: "",
        disbursementDate: "",
        interestRate: "",
        gradDate: "",
        loanAccrued: 0,
        loanTotal: 0
      }]
    }
    this.handleChange = this.handleChange.bind(this)
    this.addSubLoan = this.addSubLoan.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    const {name, value} = event.target
    this.setState({ [name] : value })
  }

  addSubLoan(event) {
    this.setState((prevState) => ({
      subLoans:[...prevState.subLoans,
        {
          loanName: "",
          amtBorrowed: "",
          disbursementDate: "",
          interestRate: "",
          gradDate: "",
          loanAccrued: 0,
          loanTotal: 0
        }
      ]
    }))
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

    const amtAccrued = dailyInterest * diffInDays * Number(this.state.amtBorrowed)

    const total = amtAccrued + Number(this.state.amtBorrowed)

    this.setState({
      loanAccrued: amtAccrued,
      loanTotal : total
    })
  }

  render() {
    let {subLoans} = this.state
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

          <button onClick={this.addSubLoan}>➕</button>
          <button>🗑</button>
          {/* TODO: remove calculating individual loans */}
          <button>Calculate individual loan</button>
          {/* <input type="submit" value="Submit" /> */}


          {/* TODO: set up separate component in SubLoan */}
          {
            subLoans.map((val, idx) =>{
              // set up indivdual ids for all inputs
              let subLoanId = `${this.state.loanName} - ${idx}`
              let amtBorrowedId = `amtBorrowed-${idx}`
              let disbursementDateId = `disbursementDate-${idx}`
              let interestRateId = `interestRate-${idx}`
              return (
                <div key={idx}>
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
                  <button onClick={this.addSubLoan}>➕</button>
                  <button>🗑</button>
                  {/* TODO: remove calculating individual loans */}
                  <button>Calculate individual loan</button>
                </div>
            )
          })
          }
          <br />
          <label>Graduation Date</label>
            <input
              type="date"
              name="gradDate"
              value={this.state.gradDate}
              onChange={this.handleChange}
            />
        </form>


        <div className="input-values">
          <p>Loan name: {this.state.loanName}</p>
          <p>Amount Borrowed: {this.state.amtBorrowed}</p>
          <p>Disbursement Date: {this.state.disbursementDate}</p>
          <p>Interest Rate: {this.state.interestRate}</p>
          <p>Graduation Date 🔮: {this.state.gradDate}</p>
          <p>A snapshot in the future: graduation date, 5 years in the future, 10 years, etc!</p>
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
