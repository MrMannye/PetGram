import React from 'react'
import { Category } from './components/category'
import {ListOfCategories} from './components/ListOfCategories'
import {GlobalStyle} from './GlobalStyles'

function App() {
    return (
        <>
            <GlobalStyle></GlobalStyle>
            <ListOfCategories></ListOfCategories>
        </>
    )
}

export default App
