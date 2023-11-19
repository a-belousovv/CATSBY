import React from 'react'
import Navigation from '../../components/blocks/Navigation/Navigation'
import Footer from '../../components/blocks/Footer/Footer'
import Social from '../../components/blocks/Block-Social/Social'

const GuaranteePage = () => {
	const guaranteeArray = [
		{
			id: 'first',
			title: 'Срок гарантии',
			info: [
				'Гарантийный срок на товар (изделие) составляет 6 мес;',
				'Гарантийный срок на товар (изделие) составляет 6 мес;',
				'Гарантийный срок на товар (изделие) составляет 6 мес;',
				'Гарантийный срок на товар (изделие) составляет 6 мес;',
			],
		},
		{
			id: 'second',
			title: 'Срок гарантии',
			info: [
				'Гарантийный срок на товар (изделие) составляет 6 мес;',
				'Гарантийный срок на товар (изделие) составляет 6 мес;',
				'Гарантийный срок на товар (изделие) составляет 6 мес;',
				'Гарантийный срок на товар (изделие) составляет 6 мес;',
			],
		},
		{
			id: 'third',
			title: 'Срок гарантии',
			info: [
				'Гарантийный срок на товар (изделие) составляет 6 мес;',
				'Гарантийный срок на товар (изделие) составляет 6 мес;',
				'Гарантийный срок на товар (изделие) составляет 6 мес;',
				'Гарантийный срок на товар (изделие) составляет 6 мес;',
			],
		},
		{
			id: 'four',
			title: 'Срок гарантии',
			info: [
				'Гарантийный срок на товар (изделие) составляет 6 мес;',
				'Гарантийный срок на товар (изделие) составляет 6 мес;',
				'Гарантийный срок на товар (изделие) составляет 6 мес;',
				'Гарантийный срок на товар (изделие) составляет 6 мес;',
			],
		},
	]
	return (
		<div>
			<Navigation />
			<div className='guarantee-page'>
				<div className='block-container'>
					<div className='guarantee__box'>
						<h3 className='page-title'>ГАРАНТИЯ</h3>
						<p className='guarantee__text'>
							Гарантийный период – это срок, во время которого клиент, обнаружив
							недостаток товара имеет право потребовать от продавца или
							изготовителя принять меры по устранению дефекта. Продавец должен
							устранить недостатки, если не будет доказано, что они возникли
							вследствие нарушений покупателем правил эксплуатации.
						</p>
						<ol className='guarantee__list'>
							{guaranteeArray.map((item) => {
								return (
									<li key={item.id} className='guarantee__list_item'>
										<h4 className='guarantee__list_title'>{item.title}</h4>
										<ol className='guarantee__count_list'>
											{item.info.map((item, i) => {
												return (
													<li key={i} className='guarantee__count_item'>
														{item}
													</li>
												)
											})}
										</ol>
									</li>
								)
							})}
						</ol>
					</div>
				</div>
			</div>
			<Social />
			<Footer />
		</div>
	)
}

export default GuaranteePage
