import React from 'react'
import { render } from 'react-dom'

class InventionsScreen extends React.Component {
  render = () => <h1>Hello world!</h1>
}

class App extends React.Component {
  render = () => (
    <InventionsScreen />
  )
}

render(React.createElement(App), document.getElementById('root'));
