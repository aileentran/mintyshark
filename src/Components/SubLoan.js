import React from "react"

function SubLoan() {
  return(

  )
}

export default SubLoan

/*
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

        <input
          type="text"
          name="interestRate"
          placeholder="Interest Rate"
          value={this.state.interestRate}
          onChange={this.handleChange}
        />

        // TODO: ADD isSubsidized checkbox

        <button onClick={this.addSubLoan}>➕</button>
        <button>🗑</button>
        <button>Calculate individual loan</button>
      </div>
  )
})
}
*/
