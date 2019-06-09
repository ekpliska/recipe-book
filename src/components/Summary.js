import React from 'react';

const Summary = ({ ingredients = 0, steps = 0, title = 'not found' }) => {
    return (
        <div className="summary">
            <h1>
                {title}
            </h1>
            <p>
                <span>{ingredients} Ingredients | </span>
                <span>{steps} Steps </span>
            </p>
        </div>
    )
}

// Summary.propTypes = {
//     ingredients: React.PropTypes.number,
//     steps: Reqct.PropTypes.number,
//     title: (props, propName) => 
//         (typeof props[propName] !== 'string') ?
//             new Error('Заголовок должен быть строкой') :
//             (props[propName].length > 20) ?
//                 new Error('Заголовок должен содержать не более 20 символов') :
//                 null
// }

// Summary.defaultProps = {
//     ingredients: 0,
//     steps: 0,
//     title: "[recipe]"
// }

export default Summary;