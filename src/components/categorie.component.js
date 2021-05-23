import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee} from '@fortawesome/free-solid-svg-icons';

const Categories = ()=>{

    return(
        <div className="Categories">
            <div><FontAwesomeIcon icon={faCoffee}/></div>
            <div>Restaurant</div>
        </div>
    )
}



export default Categories;