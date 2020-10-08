// import React from 'react'

// const NewsPreview = (props) => {

//     const handleClick = (url) => {
//         window.open(url, '_blank')
//     }

//     console.log('newsPreview props', props)
//     return(
//         <>
//             <div>{props.list.author}</div>
//             <div className="preview" key={props.index} >
//                         <img className="image" onClick={() => { handleClick(props.item.url) }} src={props.item.urlToImage !== null ? props.item.urlToImage : "https://source.unsplash.com/aId-xYRTlEc"} alt="newsimage" />
//                         <div className="article-info">
//                             <p className="title">{props.item.title}</p>
//                             {/* <p className="source">{item.source.name}</p> */}
//                             <p className="description">{props.item.description}</p>
//                             {/* ADDING SAVED ARTICLES */}
//                             {/* <button onClick={() => { ctx.handleSave(item) }}>Bookmark</button> */}
//                         </div>
//                     </div>
//         </>
//     )
// }
// export default NewsPreview