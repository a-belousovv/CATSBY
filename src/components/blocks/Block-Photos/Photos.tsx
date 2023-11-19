import React from 'react'

const Photos: React.FC = () => {
	return (
		<div className='photos'>
			<div className='block-container'>
				<div className='photos__box'>
					<div className='photos__main'>
						<div className='photos__block_item'>
							<img src='/pictures/photos/photo1.jpeg' alt='' />
						</div>
					</div>
					<div className='photos__right'>
						<div className='photos__block first'>
							<div className='photos__block_item'>
								<img src='/pictures/photos/photo2.jpeg' alt='' />
							</div>
							<div className='photos__block_item'>
								<img src='/pictures/photos/photo3.jpeg' alt='' />
							</div>
						</div>
						<div className='photos__block second'>
							<div className='photos__block_item'>
								<img src='/pictures/photos/photo4.jpeg' alt='' />
							</div>
							<div className='photos__block_item'>
								<img src='/pictures/photos/photo5.jpeg' alt='' />
							</div>
							<div className='photos__block_item'>
								<img src='/pictures/photos/photo6.jpeg' alt='' />
							</div>
						</div>
						<div className='photos__block third'>
							<div className='photos__block_item'>
								<img src='/pictures/photos/photo7.jpeg' alt='' />
							</div>
							<div className='photos__block_item'>
								<img src='/pictures/photos/photo8.jpeg' alt='' />
							</div>
							<div className='photos__block_item'>
								<img src='/pictures/photos/photo9.jpeg' alt='' />
							</div>
							<div className='photos__block_item'>
								<img src='/pictures/photos/photo10.jpeg' alt='' />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Photos
