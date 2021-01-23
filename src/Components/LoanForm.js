import React, {Component} from "react"
import IndLoanForm from "./IndLoanForm"

class LoanForm extends Component {
  constructor() {
    super()
    this.state = {
      loans: [{
        loanName: "",
        amtBorrowed: "",
        disbursementDate: "",
        interestRate: "" ,
        loanAccrued: 0,
        loanTotal: 0
      }],
      gradDate: "",
      paymentPlan: ""
    }
  }

  render() {
    return(
      <div className="loan-form">
        <IndLoanForm />
        {/* TODO: include buttons - add loans, add future date, payment plan, calculate */}
      </div>
    )
  }
}

export default LoanForm
