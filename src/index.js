import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'

const colors = {
  babyBlue: '#ade0ff',
  blue: '#1447FF',
  gray: '#7d7d7d',
  white: '#e4eaed',
  black: '#262829'
}

const appName = 'Descomplica Med'

const App = () => {
  return (
    <div>
      <NavBar />
    </div>
  )
}

const NavBar = () => {
  const navbarStyle = { backgroundColor: colors.blue }
  const logoIconStyle = { color: colors.babyBlue, paddingRight: 8 }
  const brandLinkStyle = { color: colors.babyBlue, fontWeight: 500, fontSize: 22 }

  return (
    <nav class='navbar' style={navbarStyle}>
      <div class='container-fluid'>
        <a class='navbar-brand'
          href='#'
          style={brandLinkStyle}>
          <i class='fa-solid fa-comment-medical fa-lg'
            style={logoIconStyle}></i>
          {appName}
        </a>
      </div>
    </nav>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />,
  document.querySelector('#root')
);