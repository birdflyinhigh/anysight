import React from 'react';
import widgets from '../../../assets/svgs/raw/system/widgets.svg'
import settings from '../../../assets/svgs/raw/system/settings.svg'
import page from '../../../assets/svgs/raw/system/page.svg'

import './index.css';

const drawer = () => (
    <nav className="navigation">
        <div className="tab-bar">
            <a title="Elements" class="tab">

                <img src={widgets} alt=""/>
            </a>
            <a title="Settings" className="tab">
                <img src={settings} alt=""/>
            </a>
            <a title="Pages" className="tab">
                <img src={page} alt=""/>
            </a>

            <div className="tab-indicator mdc-theme--primary-bg"></div>
        </div>

        <div className="tab-content">

        </div>
    </nav>

);

export default drawer;

