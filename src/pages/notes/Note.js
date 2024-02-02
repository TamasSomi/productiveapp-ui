import React, { useState } from "react";
import { Media, Modal, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { axiosRes } from "../../api/axiosDefaults";
import Avatar from "../../components/Avatar";
import { MoreDropdown } from "../../components/MoreDropdown";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import styles from "../../styles/Note.module.css";
import NoteEditForm from "./NoteEditForm";

const Note = (props) => {
  const {
    profile_id,
    profile_image,
    owner,
    updated_at,
    content,
    id,
    setTask,
    setNotes,
  } = props;

  const [showEditForm, setShowEditForm] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const currentUser = useCurrentUser();
  const is_owner = currentUser?.username === owner;

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/notes/${id}/`);
      setTask((prevTask) => ({
        results: [
          {
            ...prevTask.results[0],
            notes_count: prevTask.results[0].notes_count - 1,
          },
        ],
      }));

      setNotes((prevNotes) => ({
        ...prevNotes,
        results: prevNotes.results.filter((note) => note.id !== id),
      }));
    } catch (err) {

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
    <>
      <hr />
      <Media>
        <Link to={`/profiles/${profile_id}`}>
          <Avatar src={profile_image} />
        </Link>
        <Media.Body className="align-self-center ml-2">
          <span className={styles.Owner}>{owner}</span>
          <span className={styles.Date}>{updated_at}</span>
          {showEditForm ? (
            <NoteEditForm
              id={id}
              profile_id={profile_id}
              content={content}
              profileImage={profile_image}
              setNotes={setNotes}
              setShowEditForm={setShowEditForm}
            />
          ) : (
            <p>{content}</p>
          )}
        </Media.Body>
        {is_owner && !showEditForm && (
          <>
            <MoreDropdown
              handleEdit={() => setShowEditForm(true)}
              handleDelete={openDeleteModal}
            />

            {/* Delete Confirmation Modal */}
            <Modal show={showDeleteModal} onHide={closeDeleteModal}>
              <Modal.Header closeButton>
                <Modal.Title>Confirm Deletion</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Are you sure you want to delete this note?
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
          </>
        )}
      </Media>
    </>
  );
};

export default Note;
