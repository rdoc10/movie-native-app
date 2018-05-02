import React from 'react'

export function getData(key)
{
  const data = {
  	menuDesc: [
  		"FAVORITE",
  		"RECENTLY WATCHED",
  		"BROWSE",
  		"NETFLIX"
  	],

  	moviesDesc: [
      {
  			"name": "Interstellar",
  			"id": 1,
  			"rating": 4.5,
  			"image": "https://i.ebayimg.com/images/g/GtUAAOxycmBStD9p/s-l300.jpg"
  		},
  		{
  			"name": "Aliens",
  			"id": 2,
  			"rating": 4.0,
  			"image": "https://ae01.alicdn.com/kf/HTB1pg1ElxTI8KJjSspiq6zM4FXa9/aliens-movie-art-poster-silk-fabric-print-12x18-20x30-24x36-27x40-inch-print-Wall-Decor.jpg_640x640.jpg"
  		},
  		{
  			"name": "gravity",
  			"id": 3,
  			"rating": 4.0,
  			"image": "https://i0.wp.com/cupofmoe.com/wp-content/uploads/2017/11/Gravity-movie-poster.jpg?fit=736%2C1049"
  		},
  		{
  			"name": "prometheus",
  			"id": 4,
  			"rating": 3.5,
  			"image": "https://ia.media-imdb.com/images/M/MV5BMTY3NzIyNTA2NV5BMl5BanBnXkFtZTcwNzE2NjI4Nw@@._V1_SY1000_CR0,0,674,1000_AL_.jpg"
  		}
  	]
  }
  return key === 'undefined' ? data : data[key];
}
