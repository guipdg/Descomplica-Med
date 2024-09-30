import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import logo from'./logo.svg'

const colorPalette = {
  grayLight: '#757575',
  grayMedium: '#333333',
  grayRegular: '#4D4D4D',
  grayDark: '#212121',
  primaryBlue: '#3596FF',
}

const appName = 'Descomplica Med'

const App = () => {
  const appStyle = { backgroundColor: colorPalette.grayDark, minHeight: '100vh', color: 'white'}

  return (
    <div style={appStyle}>
      <NavBar />
    </div>
  )
}

const NavBar = () => {
  const navbarStyle = { backgroundColor: colorPalette.grayMedium }
  const logoContainerStyle = {justifyContent: 'center'}

  return (
    <nav class="navbar" style={navbarStyle}>
      <div class="container" style={logoContainerStyle}>
        <a class="navbar-brand" href="#">
          <img src={logo} alt="Descomplica Med" width="40"/>
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