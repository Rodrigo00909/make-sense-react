import React from 'react';

import './FiltroForo.css'

const FiltroForo = (props) => {
    console.log(props)
    return (
        <div>
            <div className="filtro-foro">
                <img src={props.filterImg} alt={props.altern} />
                <p>{props.filterName}</p>
            </div>

        </div>
    )
}

export default FiltroForo
