import { Link } from "react-router-dom"

export const NotFound = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
    <h2>404 - Page Not Found</h2>
    <p>Sorry, the page you are looking for does not exist.</p>
    <p>
      Return to <Link to="/">Home Page</Link>.
    </p>
  </div>
  )
}
