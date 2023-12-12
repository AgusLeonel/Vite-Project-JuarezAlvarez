import React from "react"
import "./App.css"

import Header from "./components/Header/Header"
import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header title="XURU" />
        <NavBar />
        <ItemListContainer greeting="¡Bienvenidos a Xuru!" />
      </div>
    )
  }

}

export default App