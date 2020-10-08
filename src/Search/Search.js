import React, { useState, useEffect } from 'react'
import NewsList from '../NewsList/NewsList'

const Search = () => {
    const [search, setSearch] = useState("")
    const [newsData, setNewsData] = useState([])

    const handleChange = (event) => {
        setSearch(event.target.value)
    }

    // let something = (blah) => {
    //     getNews(blah)
    // }
    const handleSubmit = (event) => {
        event.preventDefault()
        getNews(search)
        // something(search)
    }
    // WHY COULDNT I DO GETNEW(SEARCH) IN THE HANDLE SUBMIT FUNCTION?

    const getNews = async (keyword) => {
        const res = await fetch(`https://newsapi.org/v2/everything?q=${keyword}&apiKey=55b8ac4b6e5941b4b92ffeaa3700fe53`)
        const json = await res.json()
        const newsArr = json.articles
        setNewsData(newsArr)
        console.log('newsData', newsData)
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
            {showNews}
        </>
    )
}
export default Search