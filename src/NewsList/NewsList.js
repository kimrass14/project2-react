import React from 'react'
import './list.css'

const NewsList = (props) => {
    console.log('news list', props)

    const handleClick = (url) => {window.location = url}

    // React.useEffect(() => {
    //     handleClick()
    // }, [])

    let showNews = ''
    if (props.list[0]) {
        showNews = props.list.map((item, index) => {
            return (
                <div className="preview" key={index} onClick={() => {handleClick(item.url)}}>
                    <img src={item.urlToImage} alt="image"/>
                    <p>{item.title}</p>
                
                </div>
            )
        })
    }

    return <div className="newsContainer">{showNews}</div>

}
export default NewsList