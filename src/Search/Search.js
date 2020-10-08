import React, { useState, useEffect } from 'react'
import NewsList from '../NewsList/NewsList'

const Search = () => {
    const [search, setSearch] = useState("")
    const [newsData, setNewsData] = useState([])

    const getNews = async (keyword) => {
        const res = await fetch(`https://newsapi.org/v2/everything?q=${keyword}&apiKey=55b8ac4b6e5941b4b92ffeaa3700fe53`)
        const json = await res.json()
        const newsArr = json.articles
        setNewsData(newsArr)
        console.log('newsData', newsData)
    }
    React.useEffect(() => {
        getNews()
    }, [])



    const handleChange = (event) => {
        setSearch(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        getNews(event)
        console.log('handlesubmit', search)
    }


    return (
        <>
            <h4>Search Results</h4>
            <form onSubmit={handleSubmit}>
                <input
                    id="keyword"
                    onChange={handleChange}
                    value={search}
                    type="text"
                    placeholder="Search"
                />
                <input
                    type="submit"
                    value="Search"
                />
            </form>
{/* CONDITIONAL RENDERING ON NEWSLIST?? */}
            <div className="cat-list-container">
                <NewsList list={newsData} />
            </div>
        </>
    )
}
export default Search