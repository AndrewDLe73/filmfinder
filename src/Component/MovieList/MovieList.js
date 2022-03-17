import React, { useRef, useState, useEffect } from 'react'
import "./MovieList.css";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ListMovies from './ListMovies';
import ListItem from './ListItem/ListItem';




const MovieList = (props) => {

    const [movieList, setMovieList] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const helper = async () => {
            const titleName = props.genre;
            const fetchResponse = await fetch(`https://api.tvmaze.com/search/shows?q=${titleName}`, { method: 'GET' })
                .then(response => { return response.json() })
                .then(scores => {
                    const titles = scores.map(score => score.show);
                    // console.log(titles);
                    setMovieList(titles)
                    setLoading(false);
                })
        }
        helper();
    }, [props.genre]);




    const [slideNumber, setSlideNumber] = useState(0)
    const [isMoved, setIsMoved] = useState(false);

    useEffect(() => {
        if (slideNumber === 0) {
            setIsMoved(false)
        }
        if (slideNumber === 1) {
            setIsMoved(true)
        }
    }, [slideNumber]);



    const listRef = useRef()
    const handleClick = (direction) => {
        let distance = listRef.current.getBoundingClientRect().x - 20
        if (direction === 'left' && slideNumber >= 1) {
            setSlideNumber(slideNumber - 1);
            listRef.current.style.transform = `translate(${distance + 255}px)`
        }
        if (direction === 'right' && slideNumber < 10) {
            setSlideNumber(slideNumber + 1);
            listRef.current.style.transform = `translate(${distance - 255
                }px)`
        }

        console.log(slideNumber);
    }

    const renderListItems = (movieList) => {
        const toRender = [];
        for (let movie of movieList) {
            if (movie && movie.image && movie.image.medium) toRender.push(movie);
        }
        const listItems = toRender.map((movie, index) => {
            return <ListItem data={movie} key={index} />
        })
        return listItems;
    }

    if (!movieList) return null;
    console.log(movieList[0]);

    return (
        <div className="list">
            <span className="listTitle">{props.genre}</span>
            <div className="wrapper">
                <ArrowBackIosIcon className="sliderArrow left" onClick={() => handleClick("left")} style={{ display: (isMoved ? "" : "none") }} />
                <div className="listcontainer" ref={listRef}>
                    {loading ? "loading" : renderListItems(movieList)}

                </div>
                <ArrowForwardIosIcon className="sliderArrow rightarrow" onClick={() => handleClick("right")} />
            </div>
        </div>)
}



export default MovieList