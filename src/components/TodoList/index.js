import React, { Component } from 'react';


class TodoList extends Component {

    constructor(props) {

        super(props);
        this.state = {}

    }



    render() {

        return (
            <tr>
                <td>{this.props.cont.nome}</td>
                <td>{this.props.cont.tarefa}</td>
            </tr>
        );
    }
}

export default TodoList;
