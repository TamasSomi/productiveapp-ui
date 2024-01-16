import React from "react";
import styles from "../../styles/Task.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";

const Task = (props) => {
  const {
    id,
    owner,
    profile_id,
    profile_image,
    notes_count,
    deadline,
    title,
    content,
    image,
    updated_at,
    taskPage,
  } = props;

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  return (
    <Card className={styles.Task}>
      <Card.Body>
        <Media className="align-items-center justify-content-between">
          <Link to={`/profiles/${profile_id}`}>
            <Avatar src={profile_image} height={55} />
            {owner}
          </Link>
          <div className="d-flex align-items-center">
            <span>{updated_at}</span>
            {is_owner && taskPage && "..."}
            {deadline && (
              <>
                <span className="mx-2">|</span>
                <span className={styles.Deadline}>
                  Deadline: {formatDeadline(deadline)}
                </span>
              </>
            )}
          </div>
        </Media>
        {title && <Card.Title className="text-center">{title}</Card.Title>}
        {content && <Card.Text>{content}</Card.Text>}
      </Card.Body>
      <Link to={`/tasks/${id}`}>
        <Card.Img src={image} alt={title} />
      </Link>
      <Card.Body>
        <div className={styles.TaskBar}>
          <Link to={`/tasks/${id}`}>
            <i className="far fa-comments" />
          </Link>
          {notes_count}
        </div>
      </Card.Body>
    </Card>
  );
};

const formatDeadline = (deadline) => {
  const formattedDate = new Date(deadline);
  const day = formattedDate.getDate();
  const month = formattedDate.getMonth() + 1;
  const year = formattedDate.getFullYear();
  return `${day}/${month}/${year}`;
};

export default Task;