import { useRef, useState } from 'react';

export default function UseRef() {

    const colorRef = useRef();
    const textColorRef = useRef();
    
    const handleDarkTheme = () => {
        colorRef.current.style.backgroundColor = 'black'
        textColorRef.current.style.color = 'white';
    }

    const handleLightTheme = () => {
        colorRef.current.style.backgroundColor = 'white';
        textColorRef.current.style.color = 'black';
    }


    return (
        <div ref={colorRef} style={{margin: 200}}>
            <div ref={textColorRef}>
                <h4>Select Theme</h4>
                <input type='radio' id="dark" name='theme' value="black" onChange={handleDarkTheme}/>
                <label htmlFor='dark'>Dark</label>
                <br />
                <input type='radio' id='light' name='theme' value="white" onChange={handleLightTheme}/>
                <label htmlFor='light'>Light</label>
            </div>
        </div>
    )
};
