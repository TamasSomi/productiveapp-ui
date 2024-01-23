import React, { useState } from "react";
import styles from "../../styles/Task.module.css";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Card, Media, Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Avatar from "../../components/Avatar";
import { MoreDropdown } from "../../components/MoreDropdown";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { axiosRes } from "../../api/axiosDefaults";

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
  const history = useHistory();

  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleEdit = () => {
    history.push(`/tasks/${id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/tasks/${id}/`);
      history.goBack();
    } catch (err) {
      // console.log(err);
    } finally {
      setShowDeleteModal(false);
    }
  };

  const openDeleteModal = () => {
    setShowDeleteModal(true);
  };

  const closeDeleteModal = () => {
    setShowDeleteModal(false);
  };

  return (
    <Card className={styles.Task}>
      <Card.Body>
        <Media className="align-items-center justify-content-between">
          <div to={`/profiles/${profile_id}`}>
            <Avatar src={profile_image} height={45} />
            {owner}
          </div>
          <div className="d-flex align-items-center">
            {is_owner && taskPage && (
              <MoreDropdown
                handleEdit={handleEdit}
                handleDelete={openDeleteModal}
              />
            )}
            <span>{updated_at}</span>
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

      {/* Delete Confirmation Modal */}
      <Modal show={showDeleteModal} onHide={closeDeleteModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete this task?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeDeleteModal}>
            Cancel
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
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
