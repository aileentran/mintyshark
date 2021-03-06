import React, {Component} from "react"
import IndLoanForm from "./IndLoanForm"
import AddAndDeleteLoans from "./AddAndDeleteLoans"
import GradPlan from "./GradPlan"

function makeid(length) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

class LoanForm extends Component {
  constructor() {
    super()
    this.state = {
      values: [{ values: makeid(5) }],
      loanName: "",
      amtBorrowed: "",
      disbursementDate: "",
      interestRate: "",
      gradDate: "",
      paymentPlan: "",
      loanAccrued: 0,
      loanTotal: 0,
      gradDate: "",
      paymentPlan: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    const {name, value, type, checked} = event.target
    type === "checkbox" ? this.setState({ [name] : checked }) : this.setState({ [name] : value })
  }

  addClick() {
    let newId = { values: makeid(5) }
    this.setState(prevState => ({ values: [...prevState.values, newId] }))
  }

  removeClick(i) {
    let values = [...this.state.values]
    values.splice(i, 1)
    this.setState({ values })
  }

  handleSubmit(event) {
    event.preventDefault()
    // TODO: work on calculations
  }

  // handleSubmit(event){
  //   event.preventDefault()
  //   // Calculations for INDIVIDUAL loans
  //   const disbursementDate = new Date(this.state.disbursementDate)
  //   const gradDate = new Date(this.state.gradDate)
  //   const diffInTime = gradDate.getTime() - disbursementDate.getTime()
  //   const diffInDays = diffInTime / (1000 * 3600 * 24)
  //
  //   //  convert interest rate into number by /100
  //   const dailyInterest = Number(this.state.interestRate) / 365 / 100
  //
  //   const amtAccrued = this.state.isSubsidized ? 0 : dailyInterest * diffInDays * Number(this.state.amtBorrowed)
  //
  //   const total = amtAccrued + Number(this.state.amtBorrowed)
  //
  //   this.setState({
  //     loanAccrued: amtAccrued,
  //     loanTotal : total
  //   })
  // }

  render() {
    return(
      <div className="loan-form">
        <form onSubmit={this.handleSubmit}>
          {this.state.values.map((ele, i) => (
            <div key={i}>
              <IndLoanForm
                handleChange={this.handleChange}
                data={this.state}
              />
              <p>{ele.values}</p>
              <input
                type="button"
                value="remove"
                onClick={() => this.removeClick(i)}
              />
            </div>
          ))}

          <input
            type="button"
            value="addLoan"
            onClick={() => this.addClick()}
          />

          <GradPlan
            handleChange={this.handleChange}
            data={this.state}
          />
          <input
            type="submit"
            value="Submit"
          />

        </form>
        {/* POTENTIAL RESOURCE TO ADD FORMS: https://dev.to/email2vimalraj/dynamic-form-fields-using-react-35ci */}
        {/* TODO: include buttons - add loans, calculate */}

        {/* TODO for calculations: consider 6 months after grad for subsidized loans!*/}


      </div>
    )
  }
}

export default LoanForm
