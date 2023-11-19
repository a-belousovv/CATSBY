import React from 'react'
import { ReusedTitle } from '../../../@types/blocks/Reused/types'

const TitleOrange: React.FC<ReusedTitle> = ({ className, text }) => {
	return <h2 className={`block-title-orange ${className}`}>{text}</h2>
}

export default TitleOrange
