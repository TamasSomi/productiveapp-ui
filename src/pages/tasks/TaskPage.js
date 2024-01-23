import React, { useEffect, useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import appStyles from "../../App.module.css";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { axiosReq } from "../../api/axiosDefaults";
import Task from "./Task";
import Note from "../notes/Note";
import NoteCreateForm from "../notes/NoteCreateForm";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Link } from "react-router-dom";
import Asset from "../../components/Asset";

function TaskPage() {
  const { id } = useParams();
  const [task, setTask] = useState({ results: [], loading: true });
  const currentUser = useCurrentUser();
  const profile_image = currentUser?.profile_image;
  const [notes, setNotes] = useState({ results: [] });

  useEffect(() => {
    const handleMount = async () => {
      try {
        const [{ data: task }, { data: notes }] = await Promise.all([
          axiosReq.get(`/tasks/${id}`),
          axiosReq.get(`/notes/?task=${id}`),
        ]);
        setTask({ results: [task], loading: false });
        setNotes(notes);
      } catch (err) {
        // console.log(err);
        setTask({ results: [], loading: false }); // Set loading to false in case of an error
      }
    };

    handleMount();
  }, [id]);

  // Check if the user is logged in
  const isLoggedIn = !!currentUser;

  // Check if the user is the profile owner
  const isProfileOwner =
    isLoggedIn && currentUser.profile_id === task.results[0]?.profile_id;

  return (
    <Row className="h-100">
      <Col className="mx-auto py-2 p-0 p-lg-2" lg={8}>
        {task.loading ? (
          <Container className={appStyles.Content}>
            <Asset spinner />
          </Container>
        ) : isLoggedIn ? (
          isProfileOwner ? (
            <>
              <Task {...task.results[0]} setTasks={setTask} taskPage />
              <Container className={appStyles.Content}>
                <NoteCreateForm
                  profile_id={currentUser.profile_id}
                  profileImage={profile_image}
                  task={id}
                  setTask={setTask}
                  setNotes={setNotes}
                />
                {notes.results.length ? (
                  notes.results
                    .filter((note) => note.task === parseInt(id))
                    .map((note) => (
                      <Note
                        key={note.id}
                        {...note}
                        setTask={setTask}
                        setNotes={setNotes}
                      />
                    ))
                ) : (
                  <span>No notes have been added yet.</span>
                )}
              </Container>
            </>
          ) : (
            <span>You are not permitted to view this content.</span>
          )
        ) : (
          <span>
            Please{" "}
            <Link to="/signin" className={appStyles.LoginLink}>
              log in
            </Link>{" "}
            to view this content.
          </span>
        )}
      </Col>
    </Row>
  );
}

export default TaskPage;
