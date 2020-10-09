import React, { useState } from 'react'
import NewsList from '../NewsList/NewsList'
import './search.css'

const Search = () => {
    const [search, setSearch] = useState("")
    const [newsData, setNewsData] = useState([])

    const handleChange = (event) => {
        setSearch(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        getNews(search)
    }

    const getNews = async (keyword) => {
        const res = await fetch(`https://newsapi.org/v2/everything?q=${keyword}&apiKey=55b8ac4b6e5941b4b92ffeaa3700fe53`)
        const json = await res.json()
        const newsArr = json.articles
        setNewsData(newsArr)
    }

    let showNews = ''
    if (newsData[0]) {
        showNews = (
            <div className="cat-list-container">
                <NewsList list={newsData} />
            </div>
        )
    }

    return (
        <>
            <h4>what are you looking for?</h4>
            <form onSubmit={handleSubmit}>
                <input
                    id="keyword"
                    onChange={handleChange}
                    value={search}
                    type="text"
                    placeholder="Put it here"
                    className="keyword-input"
                />
                <input
                    type="submit"
                    value="Lets see!"
                    className="search-button"
                />
            </form>
            {showNews}
        </>
    )
}
export default Search