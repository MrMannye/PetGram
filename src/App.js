import React from 'react'
import {ListOfCategories} from './components/ListOfCategories'
import {GlobalStyle} from './styles/GlobalStyles'
import {ListOfPhotoCards} from './components/ListOfPhotoCards'
import {Logo} from './components/Logo'

function App() {
    return (
        <>
            <GlobalStyle></GlobalStyle>
            <Logo></Logo>
            <ListOfCategories></ListOfCategories>
            <ListOfPhotoCards></ListOfPhotoCards>
        </>
    )
}

export default App
