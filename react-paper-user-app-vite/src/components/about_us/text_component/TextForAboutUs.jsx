import "/3k2s/CourceProject/PaperProjectUserInterface/react-paper-user-app-vite/src/styles/stylesForComponents/about_us/textComponent/textComponent.css"
import React from 'react';

export default function TextForAboutUs({title, description}) {
    return (
        <div id="text-component">
            <h1>{title}</h1>
            <p>{description.split('\n').map((paragraph, index) => (
                <React.Fragment key={index}>
                {paragraph}
                <br />
                </React.Fragment>
            ))}</p>
        </div>
    )
}