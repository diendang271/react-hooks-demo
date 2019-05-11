import React, {useState} from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import {Button, Form, Input, InputGroup, ListGroup, ListGroupItem} from "reactstrap";

const initialTodoList = [
    "Teach Intro to React Hooks",
    "Get coffee",
    "Fix all the bugs"
];

function TodoApp() {
    const [todo, setTodo] = useState("");
    const [todoList, setTodoList] = useState(initialTodoList);

    function handleInputChange(e) {
        setTodo(e.target.value);
    }

    function addTodo(e) {
        e.preventDefault();
        setTodoList([...todoList, todo]);
        setTodo("");
    }

    function handleRemoveClick(todoIndex) {
        const newTodoList = todoList.filter((_, index) => index !== todoIndex);
        setTodoList(newTodoList);
    }

    return (
        <section>
            <h1>TODO</h1>
            <ListGroup>
                {todoList.map((item, i) => {
                    return <ListGroupItem key={i}>
                        {item}
                        <Button close onClick={() => handleRemoveClick(i)}/>
                    </ListGroupItem>;
                })}
            </ListGroup>
            <Form onSubmit={addTodo}>
                <InputGroup>
                    <Input value={todo} onChange={handleInputChange}/>
                    <Button>Add</Button>
                </InputGroup>
            </Form>
        </section>
    );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<TodoApp/>, rootElement);
