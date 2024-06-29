import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'


const TitleCards = ({title, category}) => {
    
    const [apiData, setApiData] = useState([]);
    
    const cardsRef = useRef();

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYTQxNTQyMTA0NTQ5MmE1YjIyZWU5ZWEwMzAzOTdmZiIsIm5iZiI6MTcxOTY2NDM2Ny40NTE1OTEsInN1YiI6IjY2N2ZmZTFjZmMwYWViZGQwZWU1ZGZhZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.F2IF3QIsr5ZkJL_AM_aMRWtkvJxmA3h37fHyxPoRfT8'
        }
      };
      
      

    const handleWheel = (event)=>{
        event.preventDefault();
        cardsRef.current.scrollLeft += event.deltaY
    }
    
    useEffect(()=>{

        fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
        .then(response => response.json())
        .then(response => setApiData(response.results))
        .catch(err => console.error(err));

        cardsRef.current.addEventListener('wheel', handleWheel)
    },[])
    
    return (
    <div className='titlecards'>
      <h2>{title?title:"Popular on Netflix"}
      </h2>
      <div className="card__list" ref={cardsRef}>
        {apiData.map((card, index)=>{
            return <div className="card" key={index}>
                <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
                <p>{card.original_title}</p>
            </div>
        })}
      </div>
    </div>
  )
}

export default TitleCards
