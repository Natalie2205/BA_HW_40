import Button from "../Button";

Button

const Header = () => {
    const menuItems = [
        'Home',
        'About',
        'Portfolio',
        'Contacts',
        'Works'
    ]
    return (
        <>
            <header className="header">
                <h1>Gulp</h1>
                <nav className="nav">
                    <ul className="menu">
                        {/* {menuItems.map((item) => <li>{item}</li>)} */}
                    </ul>
                </nav>
                <Button text='Sign Up'/>
            </header>
        </>

    )
}

export default Header;