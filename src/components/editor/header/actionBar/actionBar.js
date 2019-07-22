import React from 'react';
import './actionBar.css'
import sync from '../../../../assets/svgs/raw/system/actions/sync.svg'
import undo from '../../../../assets/svgs/raw/system/actions/undo.svg'
import redo from '../../../../assets/svgs/raw/system/actions/redo.svg'
import preview from '../../../../assets/svgs/raw/system/actions/preview.svg'


const actionBar = () => (
    <div className="action-bar__wrapper">
        <button title="syncing" className="action-btn syncing">
            <img src={sync} alt=""/>
        </button>
        <button className="action-btn" title="undo">
            <img src={undo} alt=""/>

        </button>
        <button className="action-btn" title="redo">
            <img src={redo} alt=""/>

        </button>
        <button className="action-btn" title="preview">
            <img src={preview} alt=""/>

        </button>
        <div className="separator"></div>

    </div>
);

export default actionBar;