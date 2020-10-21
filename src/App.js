
//////////////function component, just a function////////

// import React from 'react'
// import './app.css'

// function App(){
//     return (
//         <div className="App">
//             <h1 className="Movie-list-title">The Most Amazing Movie</h1>
//         </div>
//     )
// }

// export default App




//////////////Class component, it has a Class//////////////
import { render } from '@testing-library/react'
import React, {Component} from 'react'
import './App.css'
import List from './components/List'


class App extends Component{
    constructor(){
        super()
        this.state = {
            //data that state needs to hold
        }
    }

    render(){
        return(
            //jsx ( <DIV></DIV>)
        <div className="App">
            <h1 className="Movie-list-title">The Most Amazing Movie</h1>
            <List/>
        </div>
        )
    }
}

export default App