import React from 'react';
import './card.styles.css'

export const Card = ({monster}) => {
	const url = 'https://robohash.org/'+monster.id;
	return (
		<div className='card-container'>
			<img src={url} alt={monster.name}/>
			<h2>{monster.name}</h2>
			<p>{monster.email}</p>
		</div>
	)
}