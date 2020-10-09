import React from 'react'
import './save.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

const Saved = (props) => {

    const handleSaveClick = (url) => {
        window.open(url, '_blank')
    }

    let showSaved = ''
    if (props.savedList[0]) {
        showSaved = props.savedList.map((item, index) => {
            return (
                <div className="saved-preview" key={index}>
                    <img className="saved-image" onClick={() => { handleSaveClick(item.url) }} src={item.urlToImage !== null ? item.urlToImage : "https://source.unsplash.com/aId-xYRTlEc"} alt="newsimage" />
                    <p className="saved-title">{item.title}</p>
                    <button className="unsave" onClick={() => { props.handleRemove(item) }}><FontAwesomeIcon icon={faTimesCircle} /></button>
                </div>
            )
        })
    } else {
        return <h4>uh oh. . . .nothing bookmarked</h4>
    }

    return (
        <>
            <h4>saved for later</h4>
            <div className="saved-list-container">
                {showSaved}
            </div>
        </>
    )
}
export default Saved