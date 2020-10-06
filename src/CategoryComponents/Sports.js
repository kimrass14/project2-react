import React, { useState } from 'react'
import NewsList from '../NewsList/NewsList'
import RespCatTiles from '../ResponsiveCategory/RespCatTiles'

const Sports = () => {
    const [list, setList] = useState([])

    const makeApiCall = async () => {
        const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=sports&apiKey=55b8ac4b6e5941b4b92ffeaa3700fe53`)
        const json = await res.json()
        const newsArr = json.articles
        setList(newsArr)
    }

    React.useEffect(() => {
        makeApiCall()
    }, [])


    return (
        <>
            <h4>Sports</h4>
            <div className="res-cat-container">
                <RespCatTiles />
                <div className="cat-list-container">
                    <NewsList list={list} />
                </div>
            </div>
        </>
    )
}
export default Sports