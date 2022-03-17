import React from 'react'
import Featured from '../../Component/Featured/Featured'
import NavBar from '../../Component/NavBar/NavBar'
import MovieList from '../../Component/MovieList/MovieList'
import ReturnToTop from '../../Component/Utility/Button/ReturnToTop'
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import "./Explore.css"





function Explore() {


    return (
        <div className="explorePage">

            <div className='home'>
                {/* <Featured type="" /> */}
                <MovieList genre="Action" />
                <MovieList genre="Adventure" />
                <MovieList genre="Horror" />
                <MovieList genre="Comedy" />
                <div className='border' style={{ height: '2rem' }} >
                </div>

            </div>
        </div>
    )
}

export default Explore