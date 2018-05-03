import React from 'react';

const AddTodo = ({ addTodo }) => {
    let input;
    const add = (e) => {
        e.preventDefault();
        addTodo({
            value: input.value,
            completed: false,
            edit: false
        });
        input.value = '';
    }

    return (
        <div className="container">
            <div className="row">
                <form>
                    <div className="col-md-10">
                        <input type="text" className="form-control add-todo" placeholder="Add todo" ref={node => {
                            input = node;
                        }} />
                    </div>
                    <div className="col-md-1">
                        <button id="checkAll" className="btn btn-primary"
                            onClick={add}>Add todo</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddTodo;

