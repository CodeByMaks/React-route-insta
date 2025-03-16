import { Link, Outlet, useLocation, useNavigate } from 'react-router';
import { useState } from 'react';
import { Home, User, PlusSquare, Bell, Settings, MessagesSquare, PlaySquare } from "lucide-react";

const Layout = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	if (location.pathname === '/auth/login' || location.pathname ==='*' || location.pathname === '/auth/register') {
		return <Outlet />;
	}

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<header style={{ display: 'flex' }}>
			<div className='header__container'>
				<h1>𝓘𝓷𝓼𝓽𝓪𝓰𝓻𝓪𝓶</h1>

				<div className='burger__icon' onClick={toggleMenu}>
					☰
				</div>

				<ul className={`navigate__ul ${isMenuOpen ? 'open' : ''}`}>
					<li>
						<Link to={'/'}>
							<div className='menu__flex'>
								<Home size={24} />Home
							</div>
						</Link>
					</li>
					<li>
						<Link to={'posts'}>
							<div className='menu__flex'>
								<PlusSquare size={24} /> Posts
							</div>
						</Link>
					</li>
					<li>
						<Link to={'reels'}>
							<div className='menu__flex'>
								<PlaySquare size={24} /> Reels
							</div>
						</Link>
					</li>
					<li>
						<Link to={'notifications'}>
							<div className='menu__flex'>
								<Bell size={24} /> Notifications
							</div>
						</Link>
					</li>
					<li>
						<Link to={'profile'}>
							<div className='menu__flex'>
								<User size={24} /> Profile
							</div>
						</Link>
					</li>
					<li>
						<Link to={'settings'}>
							<div className='menu__flex'>
								<Settings size={24} /> Settings
							</div>
						</Link>
					</li>
					<li>
						<Link to={'direct'}>
							<div className='menu__flex'>
								<MessagesSquare size={24} /> Direct
							</div>
						</Link>
					</li>

					<li className='mobile__buttons'>
						<button className='button__login' onClick={() => navigate('auth/login')}>
							Log in
						</button>
						<button onClick={() => navigate('auth/register')}>Registration</button>
					</li>
				</ul>

				<div className='buttons'>
					<button className='button__login' onClick={() => navigate('auth/login')}>
						Log in
					</button>
					<button onClick={() => navigate('auth/register')}>Registration</button>
				</div>
			</div>
			<div className='view__menu'>
				<Outlet />
			</div>
		</header>
	);
};

export default Layout;