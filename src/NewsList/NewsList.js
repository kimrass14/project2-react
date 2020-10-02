import React, { useState } from 'react'

const NewsList = () => {
    const [list, setList] = useState([])

    const makeApiCall = async () => {
        const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=55b8ac4b6e5941b4b92ffeaa3700fe53`)
        const json = await res.json()
        const newsArr = json.articles
        setList(newsArr)
    }
    makeApiCall()

    let showNews = ''
    if (list[0]) {
        showNews = list.map(item => {
            return <div>{item.title}</div>
        })
    }

    return <div>{showNews}</div>

}
export default NewsList