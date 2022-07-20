import React, { useState } from 'react'
import ButtonProps from '../ButtonProps/ButtonProps';
import './Counter.css';

const Counter = () => {
	const [count, setCount] = useState(0);
	return (
		<>
		<h1>Счет: {count}</h1>
		<button className="my-button" 
			onClick={()=> setCount(0)}
		>
			Сбросить
		</button>
		<button className="my-button" 
			onClick={()=> setCount(count + 1)}
		>
			+
		</button>
		<button className="my-button" 
			onClick={()=> setCount(count - 1)}
		>
			-
		</button>
		<ButtonProps onClick={()=> setCount(count + 1)} color='red'>+</ButtonProps>
		</>
		


		
	)
}

export default Counter
