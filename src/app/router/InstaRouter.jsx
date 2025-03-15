import Layout from '@layout/Layout'
import NotFoundPage from '@pages/Error/NotFound'
import LoginPage from '@pages/login/Login'
import RegisterPage from '@pages/register/Register'	
import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'

const HomePage = lazy(() => import('@pages/home/Home'))
const PostsPage = lazy(()=> import('@pages/posts/Posts'))
const CreatePage = lazy(()=> import('@pages/create/Create'))
const NotificationsPage = lazy(()=> import('@pages/notifications/Notifications'))
const ProfilePage = lazy(()=> import('@pages/Profile/Profile'))
const SettingsPage = lazy(()=> import('@pages/settings/Settings'))
const DirectPage = lazy(()=> import('@pages/direct/Direct'))

const InstaRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route
						index
						element={
							<Suspense fallback={<div className='loading'>Загрузка Home...</div>}>
								<HomePage />
							</Suspense>
						}
					/>
					<Route path='posts' element={
						<Suspense fallback={<div className='loading'>Загрузка Post...</div>}>
							<PostsPage />
						</Suspense>
						} />
					<Route path='create' element={
						<Suspense fallback={<div className='loading'>Загрузка Create...</div>}>
							<CreatePage />
						</Suspense>
						} />
					<Route path='notifications' element={
						<Suspense fallback={<div className='loading'>Загрузка Notifications...</div>}>
							<NotificationsPage />
						</Suspense>
						} />
					<Route path='profile' element={
						<Suspense fallback={<div className='loading'>Загрузка Profile...</div>}>
							<ProfilePage />
						</Suspense>
						} />
					<Route path='settings' element={
						<Suspense fallback={<div className='loading'>Загрузка Settings...</div>}>
							<SettingsPage />
						</Suspense>
						} />
					<Route path='direct' element={
						<Suspense fallback={<div className='loading'>Загрузка Direct...</div>}>
							<DirectPage />
						</Suspense>
						} />

					<Route path='auth/login' element={<LoginPage />} />
					<Route path='auth/register' element={<RegisterPage />} />

					<Route path='*' element={<NotFoundPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}

export default InstaRouter
