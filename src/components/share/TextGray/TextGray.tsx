import React from 'react'
import { ReusedTitle } from '../../../@types/blocks/Reused/types'

const TextGray: React.FC<ReusedTitle> = ({ className, text }) => {
	return <p className={`block-text ${className}`}>{text}</p>
}

export default TextGray
