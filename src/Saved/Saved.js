import React from 'react'
import './save.css'

const Saved = (props) => {
    console.log('Saved', props)

    const handleSaveClick = (url) => {
        window.open(url, '_blank')
    }

    ///REMOVE ARTICLE FROM SAVED LIST ON CLICK OF BUTTON////
        // const handleRemove = (article) => {
        //     console.log('saved - article props', article)

        //     let articleIndex = props.savedList.indexOf(article)
        //     console.log('article index', articleIndex)

        //     if (articleIndex >= 0) {
        //         props.savedList.splice(articleIndex, 1)
        //         console.log('props.savedList', props.savedList)
        //     }
        // }
    /////////////////

    // const handleRemove = (article) => {
    //     console.log('props savedList', props.savedList[0].title)
    // console.log('showSaved[i]', showSaved[0].title)
    // console.log('article title prop', article.title)

    // for (let i = 0; i < props.savedList.length; i++) {
    //     if (props.savedList[i].title == article.title) {

    //         console.log('match')
    //         return i;
    //     }
    // } console.log('dont match')
    // return -1;
    // }
    // if(handleRemove() >= 0) {
    //     console.log('remove')
    // }



    let showSaved = ''
    if (props.savedList[0]) {
        showSaved = props.savedList.map((item, index) => {
            return (
                <div className="saved-preview" key={index}>
                    <img className="saved-image" onClick={() => { handleSaveClick(item.url) }} src={item.urlToImage !== null ? item.urlToImage : "https://source.unsplash.com/aId-xYRTlEc"} alt="newsimage" />
                    <p className="saved-title">{item.title}</p>
                    <button className="unsave" onClick={() => { props.handleRemove(item) }}>Remove</button>
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