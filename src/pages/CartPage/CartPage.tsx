import CartBottom from '../../components/blocks/Block-Cart/CartBottom'
import CartTop from '../../components/blocks/Block-Cart/CartTop'
import Footer from '../../components/blocks/Footer/Footer'
import Navigation from '../../components/blocks/Navigation/Navigation'
import { useAppSelector } from '../../redux/reduxHooks/hooks'

const CartPage = () => {
	const cart = useAppSelector((state) => state.cart.cart)
	return (
		<div className='cart'>
			<Navigation />
			{cart.length == 0 ? (
				<div className='block-container'>
					<div className='cart-empty'>
						<h2 className='cart-empty__title'>Ваша корзина пуста 😞 </h2>
						<img
							src='/pictures/cart/cart-empty.png'
							alt=''
							className='cart-empty__img'
						/>
					</div>
				</div>
			) : (
				<div>
					<CartTop />
					<CartBottom />
				</div>
			)}

			<Footer />
		</div>
	)
}

export default CartPage
