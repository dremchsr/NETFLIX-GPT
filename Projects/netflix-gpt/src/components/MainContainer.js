import React from 'react'
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {
    const movies = useSelector((state) => state.movies?.nowPlayingMovies);
    // console.log("Movies :", movies)

    if (!movies) return;
    const mainMovie = movies[0];
    console.log("BackGround Video:", mainMovie)

    const { original_title, overview, id } = mainMovie || {};

    return (
        <div>
            <VideoTitle title={original_title} overview={overview} />
            <VideoBackground movieId={id} />
        </div>
    )
}

export default MainContainer;
