import React from 'react'
import { Context } from '../App'
import './list.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBookmark} from '@fortawesome/free-solid-svg-icons'

const NewsList = (props) => {

    const ctx = React.useContext(Context)

    const handleClick = (url) => {
        window.open(url, '_blank')
    }

    let showNews = ''
    if (props.list[0]) {
        showNews = props.list.map((item, index) => {

            return (
                <div className="preview" key={index} >
                    <img className="image" onClick={() => { handleClick(item.url) }} src={item.image !== null ? item.image : "https://source.unsplash.com/aId-xYRTlEc"} alt="newsimage" />
                    <div className="article-info">
                        <p className="title">{item.title}</p>
                        <p className="description">{item.description}</p>
                        <button onClick={() => { ctx.handleSave(item) }}><FontAwesomeIcon icon={faBookmark} /></button>
                    </div>
                </div>
            )

        })
    }

    return <>{showNews}</>

}
export default NewsList