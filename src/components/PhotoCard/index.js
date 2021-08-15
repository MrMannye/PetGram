import React, {useEffect,useState, useRef} from 'react'
import { ImgWrapper, Img, Button, Article } from './styles';
import {MdFavoriteBorder, MdFavorite} from 'react-icons/md'

const DEFAULT_IMAGE = "https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png";
export const PhotoCard = ({id, likes = 0, src}) => {
    const element = useRef(null);
    const [show, setShow] = useState(false);
    const key = `like-${id}`;
    const [liked, setLiked] = useState(() => {
        try {
            const like = localStorage.getItem(key)
            return like;
        } catch (error) {
            return false;
        }
    })
    const setLocalStorage = value => {
        try {
            localStorage.setItem(key, value)
            setLiked(value);
        } catch (error) {
            console.log(error);
        }
    }
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

    const Icon = liked ? MdFavorite : MdFavoriteBorder;

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
                    <Button onClick={() => { setLocalStorage(!liked) }}>
                        <Icon size='32px'/>  {likes} likes!
                    </Button>
                </>
            }
        </Article>
    )
}