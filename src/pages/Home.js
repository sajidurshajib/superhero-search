import React, { useState } from 'react'
import Search from '../components/Search/Search'
import Body from '../components/Body/Body'
import Results from '../components/Results/Results'
import Menu from '../components/Menu/Menu'

const Home = ()=> {

    const [seacrhData, setSearchData] = useState('')

    return(
        <div className="Home">
            <Menu />
            <Search ssd={setSearchData}/>
            {seacrhData !=='' ? <Results srch={seacrhData} /> : <Body />}            
        </div>
    )
}

export default Home