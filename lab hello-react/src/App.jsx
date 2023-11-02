import { useState } from "react"
import "./App.css"
import Nav from "./components/Nav"
import ironHackLogo from "./assets/ironhack-logo-xs.png"
import menuTop from "./assets/menu-top-xs.png"
import Title from "./components/Title"
import Paragraph from "./components/Paragraph"
import Button from "./components/Button"
import icon1 from "./assets/icon1.png"
import icon2 from "./assets/icon2.png"
import icon3 from "./assets/icon3.png"
import icon4 from "./assets/icon4.png"
import Card from "./components/Card"

function App() {
  return (
    <div className="App">
      <div className="container">
        <Nav ironHackLogo={ironHackLogo} menuTop={menuTop}></Nav>
        <div className="column">
          <Title></Title>
          <Paragraph></Paragraph>
          <Button></Button>
        </div>
      </div>
      <div className="row">
        <Card
          icon={icon1}
          text={"Declarative"}
          description={"React makes it painless to create interactive UIs."}
        ></Card>
        <Card
          icon={icon2}
          text={"Components"}
          description={"Build encapsulated components that manage their state."}
        ></Card>
        <Card
          icon={icon3}
          text={"Single-Way"}
          description={
            "A set of immutable values are passed to the components."
          }
        ></Card>
        <Card
          icon={icon4}
          text={"JSX"}
          description={"Statically-typed, designed to run on modern browsers."}
        ></Card>
      </div>
    </div>
  )
}

export default App
