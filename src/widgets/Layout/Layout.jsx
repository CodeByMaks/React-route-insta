import { Link, Outlet, useLocation, useNavigate } from 'react-router'
import logo from '@shared/Instagram-Logo.png'

const Layout = () => {
	const navigate = useNavigate()
	const location = useLocation()

	if (location.pathname == '/auth/login' || location.pathname === '/auth/register'){
		return <Outlet />
	}

	return (
		<header>
			<div className='header__container'>
				<img style={{width:'150px'}} src={logo} alt="" />

				<ul className='navigate__ul'>
					<li>
						<Link to={'/'}>Home</Link>
					</li>
					<li>
						<Link to={'posts'}>Posts</Link>
					</li>
					<li>
						<Link to={'create'}>Create</Link>
					</li>
					<li>
						<Link to={'notifications'}>Notifications</Link>
					</li>
					<li>
						<Link to={'profile'}>Profile</Link>
					</li>
					<li>
						<Link to={'settings'}>Settings</Link>
					</li>
					<li>
						<Link to={'direct'}>Direct</Link>
					</li>
				</ul>

				<div className='buttons'>
					<button className='button__login' onClick={()=> navigate('auth/login')}>Log in</button>
					<button onClick={()=> navigate('auth/register')}>Registration</button>
				</div>
			</div>
			<Outlet />
		</header>
	)
}

export default Layout
