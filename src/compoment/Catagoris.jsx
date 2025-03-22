import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Catagoris({catagoris}) {
    console.log(catagoris)
    return (
        <div className="tabs flex justify-between">
        {catagoris.map(caragory=>(<NavLink to= {`/coffeecard/${caragory.category}`} className="tab tab-lifted">{caragory.category}</NavLink>))}

            
            {/* <a className="tab tab-lifted tab-active">Tab 2</a>
            <a className="tab tab-lifted">Tab 3</a> */}
        </div>
    )
}
