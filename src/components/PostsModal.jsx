import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from 'react-bootstrap/Modal';

//props need {} in order to work
export default function PostModal({show, onHide, form, onChange, onSave}) {
  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Add Inspirational Post From Level-3</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group controlId="firstName">
              <Form.Label>First Name:</Form.Label>
              <Form.Control
                name="firstName"
                value={form.firstName}
                onChange={onChange}
                placeholder="Enter your first name"
                
              />
            </Form.Group>

            <Form.Group controlId="lastName">
                <Form.Label>Last Name:</Form.Label>
                <Form.Control
                name="lastName"
                value={form.lastName}
                onChange={onChange}
                placeholder="Enter your last name"
                
                />
            </Form.Group>

            <Form.Group controlId="formcontent">
                <Form.Label>Message:</Form.Label>
                <Form.Control
                as="textarea"
                rows={4}
                name="content"
                value={form.content}
                onChange={onChange}
                placeholder="Write your inspiration here..."
                required
                />
            </Form.Group>



          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button className="bg-sky-500 hover:bg-sky-700" onClick={onHide}>
            Cancel
          </Button>
          <Button className="bg-sky-500 hover:bg-sky-700"   onClick={onSave}>
            Add Post
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </Modal>
  );
}


