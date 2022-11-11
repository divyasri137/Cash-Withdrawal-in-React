import './index.css'

const DenominationItem = props => {
  const {value, stateChange} = props
  const changeState = () => {
    stateChange(value)
  }
  return (
    <li className="button">
      <button type="button" onClick={changeState} className="btn">
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
