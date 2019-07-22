import React from 'react';
import './index.css'
import ActionBar from './actionBar/actionBar';


const AnyHeader = () => (
    <div className="headegg mdc-theme--background">
        <a class="home-btn" href="https://vuegg.github.io/" target="_blank">
            <img src="https://vuegg.github.io/static/vuegg-fam.svg" alt="" width="40" height="40"/>
        </a>
        <input className="title-input"
               title="Project title" placeholder="LoopInsight"/>
        <div class="spacer"></div>

        <ActionBar/>
    </div>
);


export default AnyHeader;