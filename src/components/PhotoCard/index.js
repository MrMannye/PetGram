import React, {useEffect,useState, useRef} from 'react'
import { ImgWrapper, Img, Button, Article } from './styles';
import {MdFavoriteBorder} from 'react-icons/md'

const DEFAULT_IMAGE = "https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png";
export const PhotoCard = ({id, likes = 0, src}) => {
    const element = useRef(null);
    const [show, setShow] = useState(false);

    useEffect(() => {
        Promise.resolve(
            typeof window.IntersectionObserver !== 'undefined'
            ? window.IntersectionObserver
            : import('intersection-observer')
        ) .then(() => {
            const observer = new window.IntersectionObserver(function(entries){
                const { isIntersecting } = entries[0];
                if(isIntersecting){
                    console.log('si');
                    setShow(true);
                    observer.disconnect();
                }
            })
            observer.observe(element.current);
        })        
    }, [element]);


    return(
        <Article ref={element}>
            {
                show && 
                <>
                    <a href={`/detail/${id}`}>
                        <ImgWrapper>
                            <Img src={DEFAULT_IMAGE} alt="" />
                        </ImgWrapper>
                    </a>
                    <Button>
                        <MdFavoriteBorder size='32px'/>  {likes} likes!
                    </Button>
                </>
            }
        </Article>
    )
}