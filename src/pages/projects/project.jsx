import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";
import "./project.css"

import L_Todo from "../../assects/img/projects/Todo.webp";
import L_TINDER from "../../assects/img/projects/tinder.webp";
import Card from "react-bootstrap/Card";

import L_REACT from "../../assects/img/skills/react.svg";
import L_NODE_JS from "../../assects/img/skills/nodejs.svg";
import L__MONGO from "../../assects/img/skills/mongodb.svg";
import Image from "react-bootstrap/Image";
import L_HTML5 from "../../assects/img/skills/html-5.svg";
import L_CSS3 from "../../assects/img/skills/css3.svg";
import L__EXPRESS from "../../assects/img/skills/express.svg";



const Project = () => {
    return (
        <div id="projects" >

            <h1 className="pt-3 text-center font-details pb-3">PROJECTS</h1>
            <Timeline>
                <Events>
                <ImageEvent
                    date="11/03/2021"
                    className="text-center"
                    text="ToDo App"
                    src={L_Todo}
                    alt="ToDo App"
                >
                    <div className="d-flex justify-content-between flex-column mt-1">
                    <div>
                        <Accordion>
                        <Card>
                            <Accordion.Toggle
                            as={Card.Header}
                            eventKey="0"
                            className="p-2 text-center accordian-main"
                            >
                            PROJECT DETAILS
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey="0" className="text-left">
                            <Card.Body>
                                <strong>Description:</strong> ToDo App is a simple and awesome app to organize your tasks with a very easy-to-use interface.
                                <hr />
                                <strong>Features:</strong>
                                <ul className="list-styles pt-1">
                                <li>Add task</li>
                                <li>Update status of task</li>
                                <li>Edit task</li>
                                <li>Delete task</li>
                                </ul>
                                <hr />
                                <strong>Tech used:</strong>
                                <ul>
                                <li>
                                    <span className="p-2">
                                    <Image
                                        src={L_HTML5}
                                        alt="HTML 5"
                                        rounded
                                        className="image-style m-1"
                                    ></Image>{" "}
                                    HTML5
                                    </span>
                                </li>
                                <li>
                                    <span className="p-2">
                                    <Image
                                        src={L_CSS3}
                                        alt="CSS 3"
                                        rounded
                                        className="image-style m-1"
                                    ></Image>{" "}
                                    CSS3
                                    </span>
                                </li>
                                <li>
                                    <span className="p-2">
                                    <Image
                                        src={L_REACT}
                                        alt="React"
                                        rounded
                                        className="image-style1 m-1"
                                    ></Image>{" "}
                                    React
                                    </span>
                                </li>
                                </ul>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        </Accordion>
                    </div>
                    <div className="d-flex justify-content-between flex-nowrap text-center">
                        <UrlButton
                        href="https://vimal211.github.io/react-todo/"
                        target="_blank"
                        >
                        SEE LIVE
                        </UrlButton>
                        <UrlButton
                        href="https://github.com/vimal211/react-todo"
                        target="_blank"
                        >
                        SOURCE CODE
                        </UrlButton>
                    </div>
                    </div>
                </ImageEvent>
                <ImageEvent
                    date="14/04/2021"
                    className="text-center"
                    text="MERN Tinder Clone"
                    src={L_TINDER}
                    alt="Tinder Clone"
                >
                    <div className="d-flex justify-content-between flex-column mt-1">
                    <div>
                        <Accordion>
                        <Card>
                            <Accordion.Toggle
                            as={Card.Header}
                            eventKey="0"
                            className="p-2 text-center accordian-main"
                            >
                            PROJECT DETAILS
                            </Accordion.Toggle>

                            <Accordion.Collapse eventKey="0" className="text-left">
                            <Card.Body>
                                <strong>Description:</strong> A simple Tinder clone app that has swiping cards and chats options
                                <hr />
                                <strong>Features:</strong>
                                <ul className="list-styles pt-1">
                                <li>Swipe Cards</li>
                                <li>Send message</li>
                                </ul>
                                <hr />
                                <strong>Tech used:</strong>
                                <ul>
                                <li>
                                    <span className="p-2">
                                    <Image
                                        src={L_REACT}
                                        alt="React"
                                        rounded
                                        className="image-style1 m-1"
                                    ></Image>{" "}
                                    React
                                    </span>
                                </li>
                                <li>
                                    <span className="p-2">
                                    <Image
                                        src={L_NODE_JS}
                                        alt="Node.js"
                                        rounded
                                        className="image-style1 m-1"
                                    ></Image>{" "}
                                    Node.js
                                    </span>
                                </li>
                                <li>
                                    <span className="p-2">
                                    <Image
                                        src={L__MONGO}
                                        alt="PostgreSQL"
                                        rounded
                                        className="image-style1 m-1"
                                    ></Image>{" "}
                                    MongoDB
                                    </span>
                                </li>
                                <li>
                                    <span className="p-2">
                                    <Image
                                        src={L__EXPRESS}
                                        alt="PostgreSQL"
                                        rounded
                                        className="image-style1 m-1"
                                    ></Image>{" "}
                                    Express.js
                                    </span>
                                </li>
                                </ul>
                                <hr />
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        </Accordion>
                    </div>
                    <div className="d-flex justify-content-between flex-nowrap text-center">
                        <UrlButton
                        href="https://tinder-clone-48b37.web.app/"
                        target="_blank"
                        >
                        SEE LIVE
                        </UrlButton>
                        <UrlButton
                        href="https://github.com/vimal211/mern-tinder-clone"
                        target="_blank"
                        >
                        SOURCE CODE
                        </UrlButton>
                   
                    </div>
                    </div>
                </ImageEvent>

                </Events>
            </Timeline>
            
        </div>
    )
}

export default Project
