import React from "react"

function IndLoanForm(props) {
  return (
    <div>
      <form className="loan-form">
        <input
          type="text"
          name="loanName"
          placeholder="Loan Name"
          value={props.data.loanName}
          onChange={props.handleChange}
        />

        {/* TODO: currency format */}
        <input
          type="text"
          name="amtBorrowed"
          placeholder="Amount Borrowed"
          value={props.data.amtBorrowed}
          onChange={props.handleChange}
        />

        <label>Disbursement Date</label>
          <input
            type="date"
            name="disbursementDate"
            value={props.data.disbursementDate}
            onChange={props.handleChange}
          />

        {/* TODO: Percentage format */}
        <input
          type="text"
          name="interestRate"
          placeholder="Interest Rate"
          value={props.data.interestRate}
          onChange={props.handleChange}
        />

        <label>
          <input
            type="checkbox"
            name="isSubsidized"
            checked={props.data.isSubsidized}
            onChange={props.handleChange}
          /> Subsidized?
        </label>

        {/* TODO: remove calculating individual loans */}
        <button>Calculate individual loan</button>
        <br />
      </form>


      <div className="input-values">
        <p>Loan name: {props.data.loanName}</p>
        <p>Amount Borrowed: {props.data.amtBorrowed}</p>
        <p>Disbursement Date: {props.data.disbursementDate}</p>
        <p>Interest Rate: {props.data.interestRate}</p>
        {console.log(props.data.isSubsidized)}
      </div>

      <div className="calculations">
        <p>Loan Accrual: {props.data.loanAccrued}</p>
        <p>Total cost of {props.data.loanName}: {props.data.loanTotal}</p>
      </div>
    </div>
  )
}

export default IndLoanForm
