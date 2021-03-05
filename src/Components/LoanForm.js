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
      values: [{ values: makeid(5) }]
    }
    // this.handleChange = this.handleChange.bind(this)

  }

  // handleChange(i, event) {
  //   let values = [...this.state.values]
  //   values[i].value = event.target.value
  //   this.setState({ values })
  // }

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

  render() {
    return(
      <div className="loan-form">
        <form onSubmit={this.handleSubmit}>
          {this.state.values.map((ele, i) => (
            <div key={i}>
              <IndLoanForm />
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

          <GradPlan />
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
