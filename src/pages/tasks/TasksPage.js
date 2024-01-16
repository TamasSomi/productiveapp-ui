import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Task from './Task';
import Asset from "../../components/Asset";
import appStyles from "../../App.module.css";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";
import NoResults from "../../assets/no-results.png";
import { useCurrentUser } from "../../contexts/CurrentUserContext";


function TasksPage({ message, filter = "" }) {
  const currentUser = useCurrentUser();
  const profile_id = currentUser?.profile_id || "";
  const [tasks, setTasks] = useState({ results: [], loading: true });
  const { pathname } = useLocation();

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const { data } = await axiosReq.get("/tasks/");
        const userTasks = data.filter((task) => task.profile_id === profile_id);
        setTasks({ results: userTasks, loading: false });
      } catch (err) {
        console.log(err);
      }
    };

    fetchTasks();
  }, [filter, pathname]);

  return (
    <Row className="h-100">
      <Col className="mx-auto py-2 p-0 p-lg-2" lg={8}>
        {tasks.loading ? (
          <Container className={appStyles.Content}>
            <Asset spinner />
          </Container>
        ) : (
          <>
            {tasks.results.length ? (
              tasks.results.map((task) => (
                <Task key={task.id} {...task} setTasks={setTasks} />
              ))
            ) : (
              <Container className={appStyles.Content}>
                <Asset src={NoResults} message={message} />
              </Container>
            )}
          </>
        )}
      </Col>
    </Row>
  );
}

export default TasksPage;
