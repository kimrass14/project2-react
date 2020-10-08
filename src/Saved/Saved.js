import React from 'react'
import './save.css'

const Saved = (props) => {
    console.log('Saved', props)

    const handleSaveClick = (url) => {
        window.open(url, '_blank')
    }

    let showSaved = ''
    if(props.savedList[0]) {
        showSaved = props.savedList.map((item, index) => {
            return (
                <div className="saved-preview" key={index}>
                    <img className="saved-image" onClick={() => { handleSaveClick(item.url) }} src={item.urlToImage !== null ? item.urlToImage : "https://source.unsplash.com/aId-xYRTlEc"} alt="newsimage" />
                    <p className="saved-title">{item.title}</p>
                    <button className="unsave">Remove</button>
                </div>
            )
        })
    } else {
        return <div className="no-articles">No articles bookmarked</div>
    }

    return (
        <>
            <h4>Saved Articles Here</h4>
            <div className="saved-list-container">
                {showSaved}
            </div>
        </>
    )
}
export default Saved