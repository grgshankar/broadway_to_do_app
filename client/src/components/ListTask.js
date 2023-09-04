import { Col, InputGroup, Row } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import AlertMsg from "./Alert";
import Subtask from "./SubtaskList";

function ListTask({ tasks }) {
  tasks = [
    {
      _id: "1",
      title: "Task 1",
      subtask: [
        {
          title: "Sub task 1",
        },
      ],
    },
    {
      _id: "2",
      title: "Task 2",
      subtask: [
        {
          title: "Sub task 2",
        },
      ],
    },
  ];
  return (
    <Accordion defaultActiveKey={["0"]} alwaysOpen>
      {tasks && tasks.length > 0 ? (
        tasks.map((task, index) => (
          <>
            <div className="accordion_wrapper mb-3" key={task._id}>
              <Accordion.Item eventKey={index}>
                <Accordion.Header>
                  <Row className="todo_title_wrapper">
                    <Col md={8}>
                      <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                      <span className="ms-3">
                        {task?.title || "Task Title"}
                      </span>
                    </Col>
                    <Col md={4}>
                      <p>3 of 4 completed</p>
                    </Col>
                  </Row>
                </Accordion.Header>
                <Accordion.Body>
                  {/* {task?.subtask[0]?.title || "No any subtask"} */}
                  <Subtask subtask={task?.subtask[0]?.title} />
                </Accordion.Body>
              </Accordion.Item>
            </div>
          </>
        ))
      ) : (
        <>
          <AlertMsg
            variant="danger"
            msg="No task found. Add task to get started..."
          />
        </>
      )}
    </Accordion>
  );
}

export default ListTask;
