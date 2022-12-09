//stateless Functional component
const NavBar = ({totalCounters}) =>{
    return (
            <nav 
               className = "navbar navbar-light bg-light">
                <a href="#" className="navbar-brand">
                 Navbar <span className="badge rounded-pill bg-secondary">
                 {totalCounters}
                  </span>
                </a>
            </nav>
        );
};

export default NavBar;
