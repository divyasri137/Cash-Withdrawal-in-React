import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {
    money: 2000,
  }

  stateChange = value => {
    this.setState(prevState => ({money: prevState.money - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {money} = this.state
    return (
      <div className="container">
        <div className="card-container">
          <div className="heading-container">
            <div className="heading">
              <p className="name">S</p>
            </div>
            <p className="full-name">Sarah Williams</p>
          </div>
          <div className="amount">
            <p className="name2">Your Balance</p>
            <div className="balance">
              <p className="">{money}</p>
              <p className="name3">In Rupees</p>
            </div>
          </div>
          <p className="withdraw">Withdraw</p>
          <p className="sum">CHOOSE SUM (IN RUPEES)</p>
          <ul className="items">
            {denominationsList.map(eachItem => (
              <DenominationItem
                key={eachItem.id}
                value={eachItem.value}
                stateChange={this.stateChange}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
