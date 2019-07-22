import React from 'react';
import './editor.css';

import AnyHeader from '../components/editor/header/index';
import Drawer from '../components/editor/drawer/index';


class EditView extends React.Component {


    render() {

        return (
            <div class="layout-container">
                <div class="edit-view">
                    <AnyHeader/>
                    <Drawer/>
                </div>
            </div>
        )
    }
}

export default EditView;