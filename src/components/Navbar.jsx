import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
             <nav className="navbar navbar-expand-lg bg-primary-subtle">
             
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                             <Link to="/" className="nav-link active">Home</Link>
                            </li>
                            <li className="nav-item">
                             <Link to="/register" className="nav-link active">Register</Link>
                            </li>
                            <li className="nav-item">
                            <Link to="/about" className="nav-link active">About</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Menu
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link to="/" className="dropdown-item">Home</Link></li>
                                    <li><Link to="/register" className="dropdown-item">Register</Link></li>
                                    <li><Link to="/about" className="dropdown-item">Sobre</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>

                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
                
            </nav>

            {/* <h2>React Router</h2>
       <Link to="/">HOME</Link>
        <Link to="/about">Sobre</Link>  */}
        </nav>
    )
}

export default Navbar
