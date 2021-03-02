import React, {Component} from "react"
import IndLoanForm from "./IndLoanForm"

class AddAndDeleteLoans extends Component {
  constructor() {
    super()
    this.state = {
      values: [{ values: null }]
    }
    this.handleChange = this.handleChange.bind(this)
  }

  createUI(){
    return this.state.values.map((ele, i) => (
      <div key={i}>
        <IndLoanForm />
        <input
          type="button"
          value="remove"
          onClick={this.removeClick.bind(this, i)}
        />
      </div>
    ))
  }

  handleChange(i, event) {
    let values = [...this.state.values]
    values[i].value = event.target.value
    this.setState({ values })
  }

  addClick() {
    this.setState(prevState => ({
      values: [...prevState.values, { values: null }]
    }))
  }

// TODO: Remove specific loan line!
  removeClick(i) {
    let values = [...this.state.values]
    values.splice(i, 1)
    this.setState({ values })
  }

  render() {
    return(
      <div className="add-and-delete-loans">
        {this.state.values.map((ele, i) => (
          <div key={i}>
            <IndLoanForm />
            <input
              type="button"
              value="remove"
              onClick={this.removeClick.bind(this, i)}
            />
          </div>
        ))}

        <input
          type="button"
          value="addLoan"
          onClick={() => this.addClick()}
        />
      </div>
    )
  }
}


export default AddAndDeleteLoans
