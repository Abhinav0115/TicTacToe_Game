import React, { useState } from "react";

// Icons
import Icons from "./components/Icons";

//toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//ReactStrap or BootStrap
import { Card, CardBody, Container, Button, Col, Row } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";

import "./App.css";

const itemArray = new Array(9).fill("empty");

const App = () => {
    const [isCross, setIsCross] = useState(false);
    const [winMessage, setWinMessage] = useState("");

    const reloadGame = () => {
        setIsCross(false);
        setWinMessage("");
        itemArray.fill("empty", 0, 9);
    };

    const checkWinner = () => {
        if (itemArray[0] !== "empty") {
            if (
                itemArray[0] === itemArray[1] &&
                itemArray[0] === itemArray[2]
            ) {
                setWinMessage(`${itemArray[0]} wins`);
            } else if (
                itemArray[0] === itemArray[3] &&
                itemArray[0] === itemArray[6]
            ) {
                setWinMessage(`${itemArray[0]} wins`);
            }
        }
        if (itemArray[4] !== "empty") {
            if (
                itemArray[4] === itemArray[1] &&
                itemArray[4] === itemArray[7]
            ) {
                setWinMessage(`${itemArray[4]} wins`);
            } else if (
                itemArray[4] === itemArray[3] &&
                itemArray[4] === itemArray[5]
            ) {
                setWinMessage(`${itemArray[4]} wins`);
            } else if (
                itemArray[4] === itemArray[0] &&
                itemArray[4] === itemArray[8]
            ) {
                setWinMessage(`${itemArray[4]} wins`);
            } else if (
                itemArray[4] === itemArray[2] &&
                itemArray[4] === itemArray[6]
            ) {
                setWinMessage(`${itemArray[4]} wins`);
            }
        }
        if (itemArray[8] !== "empty") {
            if (
                itemArray[8] === itemArray[2] &&
                itemArray[8] === itemArray[5]
            ) {
                setWinMessage(`${itemArray[8]} wins`);
            } else if (
                itemArray[8] === itemArray[6] &&
                itemArray[8] === itemArray[7]
            ) {
                setWinMessage(`${itemArray[8]} wins`);
            }
        }
    };

    const changeItem = (itemNumber) => {
        if (winMessage) {
            return toast(winMessage, { type: "success" });
        }
        if (itemArray[itemNumber] === "empty") {
            itemArray[itemNumber] = isCross ? "cross" : "circle";
            setIsCross(!isCross);
        } else {
            return toast("already filled", { type: "error" });
        }

        checkWinner();
    };

    return (
        <Container className="p-5">
            <ToastContainer position="top-right" theme="colored" newestOnTop />
            <h1 className="m-4 mt-2 mb-1">
                <span className="text-uppercase font-weight-bold" style={{}}>
                    {" "}
                    Tic-Tac-Toe{" "}
                </span>
                Game
            </h1>
            <Row>
                <Col md={6} className=" offset-med-3  centr">
                    {winMessage ? (
                        <div className="mb-2 mt-2">
                            <h1 className="text-success text-uppercase text-center">
                                {winMessage}
                            </h1>
                            <Button color="success" block onClick={reloadGame}>
                                Reload the Games
                            </Button>
                        </div>
                    ) : (
                        <h1 className="text-center text-warning">
                            {isCross ? "Cross" : "Circle"} Turn
                        </h1>
                    )}
                    <div className="grid">
                        {itemArray.map((item, index) => (
                            <Card
                                className="card"
                                onClick={() => changeItem(index)}
                            >
                                <CardBody className="box">
                                    <Icons name={item} />
                                </CardBody>
                            </Card>
                        ))}
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default App;
