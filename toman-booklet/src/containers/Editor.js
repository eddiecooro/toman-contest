import React from 'react'
import { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions'

export class Editor extends Component {
  render() {
    const { content, name , editNodeVal } = this.props
    if (editNodeVal){
      return (
        <div>
            <div> filename: 
                <input ref={n => this.name = n} defaultValue={name} 
                    className="file-name-input" />
            </div>
            <textarea ref={c => this.content = c} name="file_content" 
                cols="65" rows="10" defaultValue={content}
                className="file-content"    
            />
            <div>
                <button className="file-save-button"
                >save</button>
            </div>
        </div>
      )
    }
    else{
      return (
        <div>Select file for edit.</div>
      )
    }
  }
}

export default Editor
