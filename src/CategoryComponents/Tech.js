import React, { useState } from 'react'
import NewsList from '../NewsList/NewsList'
import RespCatTiles from '../ResponsiveCategory/RespCatTiles'

const Tech = () => {
    const [list, setList] = useState([])

    const apiKey = process.env.REACT_APP_GNEWS_API_KEY

    const makeApiCall = async () => {
        const res = await fetch(`https://gnews.io/api/v4/top-headlines?topic=technology&token=${apiKey}&lang=en`)
        const json = await res.json()
        const newsArr = json.articles
        setList(newsArr)
    }

    React.useEffect(() => {
        makeApiCall()
    }, [])


    return (
        <>
            <h4>Tech</h4>
            <div className="res-cat-container">
                <RespCatTiles />
                <div className="cat-list-container">
                    <NewsList list={list} />
                </div>
            </div>
        </>
    )
}
export default Tech