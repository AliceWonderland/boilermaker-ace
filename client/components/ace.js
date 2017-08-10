
import React, { Component } from 'react';
import { render } from 'react-dom';
import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/java';
import 'brace/theme/github';



export default class Ace extends Component {
    constructor(){
        super();
        this.state={
            aceEditorValue:''
        };
        this.onChange=this.onChange.bind(this);
        this.onClick=this.onClick.bind(this);
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.aceEditorValue !== nextState.aceEditorValue) {
            return false
        } else {
            return true;
        }
    }

    onChange(newValue) {
        console.log('change', newValue, this.state);
        this.setState({
            aceEditorValue: newValue
        });
    }

    onClick(){
        console.log('test',eval(this.state.aceEditorValue));
    }



// Render editor
    render(){
        return(
            <div>
            <h1>HELLO</h1>

            <AceEditor
                mode="javascript"
                theme="github"
                onChange={this.onChange}
                name="CodePane"
                editorProps={{$blockScrolling: true}}
                value={`function test(num) {
    return num++;
}
test(8);`}
            />
            <AceEditor
                mode="javascript"
                theme="github"
                onChange={this.onChange}
                name="ResultPane"
                editorProps={{$blockScrolling: true}}
            />
            <button onClick={this.onClick}>Run</button>
            </div>
        )
    }
}