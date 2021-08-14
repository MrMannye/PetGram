import React, {useState, useEffect} from 'react'
import {Category} from '../category'
import { List, Item } from './styles'

export const ListOfCategories = () => {
    const [categories, setCategories] = useState([]);
    const [show, setShow] = useState(false);

    useEffect(function (){
        fetch("https://petgram-server-epje11mc9-mrmannye.vercel.app/categories")
        .then(res => 
            res.json()
        ).then(response => {
            setCategories(response)
        })
    }, [])

    useEffect(() => {
        const onScroll = e => {
            const newShowFixed = window.scrollY > 200;
            show != newShowFixed && setShow(newShowFixed);
        }
        document.addEventListener("scroll", onScroll);
        return() => {
            document.removeEventListener("scroll", onScroll);
        }
    })

    const renderList = (fixed) => (
        <List className={fixed ? 'fixed' : ''}>
            {
                categories.map(category => 
                    <Item key={category.id}><Category {...category}/></Item>
                )
            }
        </List>
    )

    return (
        <>
            {renderList()}
            {show && renderList(true)}
        </>
    )
}
