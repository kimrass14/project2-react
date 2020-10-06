import React from 'react'
import './list.css'

const NewsList = (props) => {
    console.log('news list', props)

    const handleClick = (url) => { 
        // console.log('newlist', url)
        window.location.assign(url)
    }

    // React.useEffect(() => {
    //     handleClick()
    // }, [])

    let showNews = ''
    if (props.list[0]) {
        showNews = props.list.map((item, index) => {
            return (
                <div className="preview" key={index} onClick={() => { handleClick(item.url) }}>
                    <img src={item.urlToImage} alt="newsimage"/>
                    <p className="title">{item.title}</p>
                    <p className="source">{item.source.name}</p>
                </div>
            )
        })
    }

    return <div className="newsContainer">{showNews}</div>

}
export default NewsList