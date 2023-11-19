import ReactDOM from 'react-dom/client'
import MainPage from './pages/MainPage/MainPage'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store'

import ComplexItemPage from './pages/ComplexItemPage/ComplexItemPage'
import CartPage from './pages/CartPage/CartPage'
import CatalogPage from './pages/CatalogPage/CatalogPage'
import GalleryPage from './pages/GalleryPage/GalleryPage'
import AnswerPage from './pages/AnswerPage/AnswerPage'
import AnswerItemPage from './pages/AnswerItemPage/AnswerItemPage'
import GuaranteePage from './pages/GuaranteePage/GuaranteePage'
import ContactsPage from './pages/ContactsPage/ContactsPage'

const router = createBrowserRouter([
	{
		path: '/',
		element: <MainPage />,
	},
	{
		path: ':category/:id/:itemId',
		element: <ComplexItemPage />,
	},
	{
		path: '/cart',
		element: <CartPage />,
	},
	{
		path: '/catalog',
		element: <CatalogPage />,
	},
	{
		path: '/gallery',
		element: <GalleryPage />,
	},
	{
		path: '/answers',
		element: <AnswerPage />,
	},
	{
		path: '/answers/:id',
		element: <AnswerItemPage />,
	},
	{
		path: '/guarantee',
		element: <GuaranteePage />,
	},
	{
		path: '/contacts',
		element: <ContactsPage />,
	},
])
ReactDOM.createRoot(document.getElementById('root')!).render(
	<Provider store={store}>
		<RouterProvider router={router} />
	</Provider>
)
