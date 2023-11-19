import React from 'react'
import TitleGray from '../../share/TitleCardsBgGray/TitleGray'
import TextGray from '../../share/TextGray/TextGray'

const Magnetic: React.FC = () => {
	return (
		<div className='magnetic'>
			<div className='block-container'>
				<div className='magnetic__box'>
					<div className='magnetic__video'>
						<img src='/pictures/magnetic/magnetic-img.jpg' alt='' />
					</div>
					<div className='magnetic__content'>
						<TitleGray text='Магниные крепления' />
						<TextGray text='Крепёжные элементы закрываются декоративными дубовыми крышками на неодимовых магнитах.' />
						<TextGray text='Крышки невозможно сбить лапой или неосторожно смахнуть рукой. Нужно приложить усилия.' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Magnetic
