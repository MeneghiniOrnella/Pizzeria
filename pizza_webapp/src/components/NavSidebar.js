import { Link, useLocation } from "react-router-dom"

function Sidebar({links, close}){
    const location = useLocation()
    return (
        <div className="navSidebar" onClick={close}>
            { links.map(link => (
                <Link to={link.path} className={location.pathname === link.path ? "sidebar-link active" : "sidebar-link"} key={link.name}>
                    {link.name}
                </Link>
            )) }
        </div>
    )
}

export default Sidebar;