import React from 'react'
import './categorytiles.css'

import { Link } from 'react-router-dom'

const RespCatTiles = () => {
    return (
        <div className="res-category-tiles">
            <Link to="/business">
                <div className="category-tile" id="business">
                    <p>Business</p>
                    </div>
            </Link>
            <Link to="/entertainment">
                <div className="category-tile" id="entertainment">
                    <p>Entertainment</p>
                </div>
            </Link>
            <Link to="/Health">
                <div className="category-tile" id="health">
                    <p>Health</p>
                </div>
            </Link>
            <Link to="/Science">
                <div className="category-tile" id="science">
                    <p>Science</p>
                </div>
            </Link>
            <Link to="/sports">
                <div className="category-tile" id="sports">
                    <p>Sports</p>
                </div>
            </Link>
            <Link to="/tech">
                <div className="category-tile" id="tech">
                    <p>Tech</p>
                </div>
            </Link>
        </div>
    )
}
export default RespCatTiles