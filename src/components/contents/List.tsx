import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ListProps from "../../interfaces/ListProps";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

import { useState } from "react";

export default function List() {
  const [userInput, setUserInput] = useState("");
  const [list, setList] = useState<ListProps[]>([]);

  function addItem() {
    setList([
      ...list,
      { id: Math.round(Math.random() * 10000000), value: userInput },
    ]);
    setUserInput("");
  }

  function editItem(index: number) {
    const values = [...list];
    const editedTodo = prompt(`Edit the todo:`);

    if (editedTodo !== null && editedTodo.trim() !== "") {
      let updatedTodos = [...values];
      updatedTodos[index].value = editedTodo;

      setList(updatedTodos);
    }
  }

  function deleteItem(key: number) {
    const values = [...list];
    const updateList = values.filter((item) => item.id !== key);

    setList(updateList);
  }

  return (
    <Container>
      <Row>
        <Col md={{ span: 5, offset: 4 }}>
          <InputGroup className="mb-3">
            <FormControl
              size="lg"
              type="text"
              className="form-control"
              placeholder="Type here your new to-do item"
              value={userInput}
              onChange={(item) => setUserInput(item.target.value)}
            />
            <InputGroup style={{ justifyContent: "center" }}>
              <Button
                disabled={userInput.length > 0 ? false : true}
                variant="dark"
                className="mt-3 input-group-button"
                onClick={() => addItem()}
              >
                <i
                  style={{ marginRight: "10px" }}
                  className="bi bi-plus-circle"
                ></i>
                Add
              </Button>
            </InputGroup>
          </InputGroup>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col md={{ span: 7, offset: 3 }}>
          <ListGroup variant="flush">
            {list.map((item: any, index: number) => {
              return (
                <div key={index}>
                  <ListGroup.Item
                    variant="light"
                    className="list-group-item"
                  >
                    <div>
                      <i
                        className="bi bi-star-fill"
                        style={{ paddingRight: "10px" }}
                      ></i>
                      {item.value}
                    </div>
                    <span>
                      <Button
                        variant="light"
                        className="item-btn pencil-btn"
                        onClick={() => editItem(index)}
                        style={{ marginRight: "10px" }}
                      >
                        <i className="bi bi-pencil-square"></i>
                      </Button>
                      <Button
                        variant="light"
                        className="item-btn trash-btn"
                        onClick={() => deleteItem(item.id)}
                      >
                        <i className="bi bi-trash"></i>
                      </Button>
                    </span>
                  </ListGroup.Item>
                  <hr />
                </div>
              );
            })}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}
