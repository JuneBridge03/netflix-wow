import './NavigationBar.css';

const NavigationBar = () => {
    return (
        <nav className="navigation-bar">
            <img
                alt="Netflix logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/440px-Netflix_2015_logo.svg.png"
                className="nav_logo"
                width="88px"
                height="32px"
            />
            <img 
                alt="User logo"
                src="https://wallpapers.com/images/high/netflix-profile-pictures-5yup5hd2i60x7ew3.webp"
                className="nav_user"
                width="32px"
                height="32px"
            />
        </nav>
    );
};

export default NavigationBar;