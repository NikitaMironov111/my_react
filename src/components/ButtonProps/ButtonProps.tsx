import React, {FC} from 'react'
import './ButtonProps.css'

const ButtonProps = (

	// если просп указаны, то они обязательны для заполнения
	{
		color = 'red',
		disabled,
		children,
		onClick,
		}: 
			{
				color?: string, // если просп не обязательны, то ставим вопрос
				disabled?: boolean,
				children?: React.ReactNode,
				onClick?: () => void,
				}) => {

  return (
    <button className='my-button-props' onClick={onClick} disabled={disabled} style={{color: color}}>{children}</button>
  )
}

export default ButtonProps