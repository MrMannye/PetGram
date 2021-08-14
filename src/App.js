import React from 'react'
import {ListOfCategories} from './components/ListOfCategories'
import {GlobalStyle} from './GlobalStyles'
import {ListOfPhotoCards} from './components/ListOfPhotoCards'

function App() {
    return (
        <>
            <GlobalStyle></GlobalStyle>
            <ListOfCategories></ListOfCategories>
            <ListOfPhotoCards></ListOfPhotoCards>
        </>
    )
}

export default App
