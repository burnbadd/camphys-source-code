import {Link, useMatch, useResolvedPath} from "react-router-dom"
export default function Navbar(){
  return (
  <nav className="nav">
    <ul>
      <Link to="/" className="site-title">CamPhys</Link>
      <img src="cat_ghost_halloween_22016.png" title="Happy Halloween!"></img>
    </ul>
    <ul>
      <CustomLink to="/TSP">TSP</CustomLink>
      <CustomLink to="/REL">REL</CustomLink>
      <CustomLink to="/AQP">AQP</CustomLink>
      <CustomLink to="/OE">OE</CustomLink>
      <CustomLink to="/AFD">AFD</CustomLink>
      <CustomLink to="/PNP">PNP</CustomLink>
      <CustomLink to="/QCM">QCM</CustomLink>
      <CustomLink to="/SCM">SCM</CustomLink>
    </ul>
  </nav>
  )
}

function CustomLink({to, children, ...props}){
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({path: resolvedPath.pathname, end: true})

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}