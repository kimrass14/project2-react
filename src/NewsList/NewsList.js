import React, {useState} from 'react'
import {Context} from '../App'
import './list.css'

const NewsList = (props) => {
// ADDING SAVED ARTICLES//
    // const [savedList, setSavedList] = useState([])

    // const handleSave = (article) => {
    //     setSavedList([...savedList, article])
    //     console.log('Saved articles array')
    // }

///////////////
    const ctx = React.useContext(Context)

    const handleClick = (url) => {
        window.open(url, '_blank')
    }

    let showNews = ''
    if (props.list[0]) {
        showNews = props.list.map((item, index) => {
            // console.log('array item', item)

            return (
                <div className="preview" key={index} >
                    <img className="image" onClick={() => { handleClick(item.url) }} src={item.urlToImage !== null ? item.urlToImage : "https://source.unsplash.com/aId-xYRTlEc"} alt="newsimage" />
                    <div className="article-info">
                        <p className="title">{item.title}</p>
                        {/* <p className="source">{item.source.name}</p> */}
                        <p className="description">{item.description}</p>
                        {/* ADDING SAVED ARTICLES */}
                        <button onClick={() => { ctx.handleSave(item) }}>Bookmark</button>
                    </div>
                </div>
            )

        })
    }

    return <>{showNews}</>

}
export default NewsList