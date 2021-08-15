import React, {useState, useEffect} from 'react'
import {Category} from '../category'
import { List, Item } from './styles'

function useCategoriesData (){
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(null);
    useEffect(function (){
        setLoading(true);
        fetch("https://petgram-server-epje11mc9-mrmannye.vercel.app/categories")
        .then(res => 
            res.json()
        ).then(response => {
            setCategories(response)
            setLoading(false);
        })
    }, [])
    return {categories, loading}
}
export const ListOfCategories = () => {
    const {categories, loading} = useCategoriesData();
    const [show, setShow] = useState(false);

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
        <List fixed={fixed}>
            {
                categories.map(category => 
                    <Item key={category.id}><Category {...category}/></Item>
                )
            }
        </List>
    )
    if(loading){
        return(
            <h1>Loading...</h1>
        )
    }
    return (
        <>
            {renderList()}
            {show && renderList(true)}
        </>
    )
}
