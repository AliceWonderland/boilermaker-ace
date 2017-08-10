
import React, { Component } from 'react';
import { render } from 'react-dom';
import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/java';
import 'brace/theme/github';



export default class Ace extends Component {
    constructor(){
        super();
        this.onChange=this.onChange.bind(this);
    }


    onChange(newValue) {
        console.log('change', newValue);
    }

// Render editor
    render(){
        return(
            <div>
            <h1>HELOO</h1>
            <AceEditor
                mode="javascript"
                theme="github"
                onChange={this.onChange}
                name="UNIQUE_ID_OF_DIV"
                editorProps={{$blockScrolling: true}}
            />
            </div>
        )
    }
}