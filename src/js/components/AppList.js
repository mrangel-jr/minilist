import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

export default function AppList ({items}) {

    return (
        <ul className="card-list">
            {items && items.map((card,idx) =>
               <Card key={`card-${idx}`} card={card}/>
            )}
        </ul>
    )

}

AppList.defaultProps = {
    items: []
}
  
AppList.propTypes = {
    /** Lista de cards  */
    items: PropTypes.array.isRequired
}