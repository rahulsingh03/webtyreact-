import React from 'react'
import './styles.css'
import myImage from './testImage.jpg'
import logo from './logo.svg'

export const App = () => {
    return <> 
        <h1>React Typescipt Webpack Starter Template {process.env.NODE_ENV} {process.env.name}</h1>
        <img src={myImage} alt="just an Image" width={300} height={400} />
        <br/>
        <img src={logo} alt="just a logo" width={100} />

    </>
}