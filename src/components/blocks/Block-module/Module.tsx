import React from 'react'
import TitleGray from '../../share/TitleCardsBgGray/TitleGray'

import TextGray from '../../share/TextGray/TextGray'

const Module: React.FC = () => {
	return (
		<div className='module-system'>
			<div className='block-container'>
				<div className='module__box'>
					<div className='module__img'>
						<img src='/pictures/module/module-house.jpg' alt='' />
					</div>
					<div className='module__content'>
						<TitleGray text='Модульная система' />
						<TextGray text='Комплекс собирается из модулей — как конструктор LEGO. Модули взаимозаменяемые и универсальные — из них можно собрать 12000 различных комбинаций комплексов.' />
						<TextGray text='Поменяйте только сточенные столбики — когтеточка будет как новая.' />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Module
