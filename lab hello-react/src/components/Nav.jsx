function Nav(props) {
  return (
    <div className="nav">
      <img src={props.ironHackLogo} className="logo" alt="Ironhack logo" />

      <img src={props.menuTop} className="menu" alt="menu" />
    </div>
  )
}

export default Nav
