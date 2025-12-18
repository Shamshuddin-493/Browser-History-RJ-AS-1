import './index.css'

// Replace your code here
const BrowserHistory = props => {
  const {searchResultDetails, onDelHistory} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = searchResultDetails

  const delHistory = () => {
    onDelHistory(id)
  }

  return (
    <li>
      <div>
        <p>{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" />
        <p>{title}</p>
        <p>{domainUrl}</p>
        <button type="button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            onClick={delHistory}
            data-testid="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default BrowserHistory
