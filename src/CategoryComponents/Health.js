import React, { useState } from 'react'
import NewsList from '../NewsList/NewsList'

const Health = () => {
    const [list, setList] = useState([])

    const makeApiCall = async () => {
        const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=55b8ac4b6e5941b4b92ffeaa3700fe53`)
        const json = await res.json()
        const newsArr = json.articles
        setList(newsArr)
    }

    React.useEffect(() => {
        makeApiCall()
    }, [])


    return (
        <>
            <h4>Health</h4>
            <div className="cat-list-container">
                <NewsList list={list} />
            </div>
        </>
    )
}
export default Health