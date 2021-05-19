import React from 'react'
import ReactDOM from 'react-dom'

import Game from './components/Game'

// function Root(){
//     return(
//         <div>
//             <li></li>
//         </div>
//     )
// }

document.addEventListener('DOMContentLoaded',()=>{
    ReactDOM.render(<Game />,document.getElementById('root'))
})

