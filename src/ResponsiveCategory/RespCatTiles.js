import React from 'react'
import './categorytiles.css'

import { Link } from 'react-router-dom'

const RespCatTiles = () => {
    return (
        <div className="res-category-tiles">
            <Link to="/business">
                <div className="category-tile" id="business">Business</div>
            </Link>
            <Link to="/entertainment"><div className="category-tile" id="entertainment">Entertainment</div></Link>
            <Link to="/Health"><div className="category-tile" id="health">Health</div></Link>
            <Link to="/Science"><div className="category-tile" id="science">Science</div></Link>
            <Link to="/sports"><div className="category-tile" id="sports">Sports</div></Link>
            <Link to="/tech"><div className="category-tile" id="tech">Tech</div></Link>
        </div>
    )
}
export default RespCatTiles