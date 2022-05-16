import React, { useEffect, useState, useMemo } from 'react';
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from 'react-image-gallery';
import I1 from '../static/1.jpg';
import t1 from '../static/1t.jpg';
import I2 from '../static/2.jpg';
import t2 from '../static/2t.jpg';
import I3 from '../static/3.jpg';
import t3 from '../static/3t.jpg';
import I4 from '../static/4.jpg';
import t4 from '../static/4t.jpg';
import I5 from '../static/5.jpg';
import t5 from '../static/5t.jpg';
import I6 from '../static/6.jpg';
import t6 from '../static/6t.jpg';
import I7 from '../static/7.jpg';
import t7 from '../static/7t.jpg';
import I8 from '../static/8.jpg';
import t8 from '../static/8t.jpg';
import MagnifierComponent from './MagnifierComponent';

const Landing = () => {

    const [images, setImages] = useState([
        {
            original: I1,
            thumbnail: t1,
        },
        {
            original: I2,
            thumbnail: t2,
        },
        {
            original: I3,
            thumbnail: t3,
        },
        {
            original: I4,
            thumbnail: t4,
        },
        {
            original: I5,
            thumbnail: t5,
        },
        {
            original: I6,
            thumbnail: t6,
        },
        {
            original: I7,
            thumbnail: t7,
        },
        {
            original: I8,
            thumbnail: t8,
        }
      ]);
    const [showtb, setShowtb] = useState(true);
    const [showBull, setShowBull] = useState(false);
    const [showNavigation, setShowNavigation] = useState(true);
    const [magnifyImages, setMagnifyImages] = useState(true);

    const handleResize = () => {
        if(window.innerWidth >= 992){
            setShowBull(false);
            setShowtb(true);
            setShowNavigation(true);
            setMagnifyImages(true);
        }
        else {
            setShowBull(true);
            setShowtb(false);
            setShowNavigation(false);
            setMagnifyImages(false);
        }
      }

    useEffect(() => {
        if(window.innerWidth >= 992){
            setShowBull(false);
            setShowtb(true);
            setShowNavigation(true);
            setMagnifyImages(true);
        }
        else {
            setShowBull(true);
            setShowtb(false);
            setShowNavigation(false);
            setMagnifyImages(false);
        }
        window.addEventListener("resize", handleResize, false);
    },[]);
    
    const myRenderItem = (props) => {
        return( <MagnifierComponent {...props}/>)
    }

    return (
        <div className='Landing'>
            <ImageGallery 
            items={images}
            renderItem={magnifyImages == true ? myRenderItem.bind(this) : ''}
            showPlayButton={false}
            useBrowserFullscreen={false}
            showBullets={showBull}
            showThumbnails={showtb}
            showNav={showNavigation}
            showFullscreenButton={false}
            />
        </div>
    )
}

export default Landing;