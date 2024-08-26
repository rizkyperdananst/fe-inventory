import Profile from '../../assets/images/profile.png';

const Header = () => {
    return (
        <>
            <header className="border border-b-black-100 p-5">
                <nav className="flex justify-between items-center">
                    <a href="#">Dashboard</a>
                    <ul className="flex items-center gap-1">
                        <li><img src="" alt="Notification" /></li>
                        <li><img src={Profile} width={30} className="rounded-full" alt="Profile" /></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header;