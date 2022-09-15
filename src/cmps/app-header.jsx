import { NavLink } from "react-router-dom";

export function AppHeader() {

    return (
        <header className='app-header full'>
            <h1 className="logo">Workerr</h1>
            <nav className="main-nav">
                <NavLink to='/'>Home </NavLink>
                <NavLink to='/explore'>Explore </NavLink>
                <NavLink to='/about'>About </NavLink>
                <NavLink to='/user'>User </NavLink>
                <NavLink to='/admin'>Admin </NavLink>
            </nav>
        </header>
    )
}