import React, { Component } from 'react'

class AddTodo extends Component{
    state = {
        content: ''
    }

    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            content: ''
        })
    }

    render(){
        return (
            <div>
                <form class="w3-container" onSubmit={this.handleSubmit}>
                  <p>
                    <label>New task: </label>
                    <input type="text" class="w3-input w3-border w3-animate-input" onChange={this.handleChange} value={this.state.content} />
                  </p>
                  <input type="submit" class="w3-button w3-teal" value="save" />
                </form>
            </div>
        )
    }
}

export default AddTodo
