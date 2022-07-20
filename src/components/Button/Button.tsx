import React, { useState } from 'react';
import './Button.css';

const Button = () => {
	const [buttonText, setButtonText] = useState('Click');
   return (
		<button className="my-button" 
			onClick={()=> setButtonText('Change Text')}
		>
			{buttonText}
		</button>
	)
};

export default Button;