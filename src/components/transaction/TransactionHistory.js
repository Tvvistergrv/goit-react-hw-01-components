import transactions from '../transactions'

export const TransactionHistory = (item) => {
  console.log('item', item)
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      {transactions.map((transaction) =>
      <tbody
      key={transaction.id}>
        <tr>
          <td>{transaction.type}</td>
          <td>{transaction.amount}</td>
          <td>{transaction.currency}</td>
        </tr>
      </tbody>
    )
    }
    </table>
  )
}