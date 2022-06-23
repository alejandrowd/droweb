import React, { useState, useEffect } from 'react'
import { Button, Modal } from 'react-bootstrap'

const ModalForProjects = (props) => {
  const {
    show,
    confirmButtonText,
    confirmButtonAction,
    showConfirmCallToAction,
  } = props

  const [showModal, setShowModal] = useState()

  useEffect(() => {
    setShowModal(show)
  }, [show])

  const handleClose = () => {
    setShowModal(false)
    props.close()
  }

  return (
    <Modal.Dialog>
      <Modal
        dialogClassName='modal-70w'
        show={showModal}
        onHide={handleClose}
        scrollable={true}
      >
        <>
          {props.children}
          <Modal.Footer>
            <Button className='btn primary-btn' onClick={handleClose}>
              Close
            </Button>
            {/* {showConfirmCallToAction && showConfirmCallToAction === true && (
              <Button
                variant='primary'
                className='ModalButton'
                onClick={confirmButtonAction}
              >
                {confirmButtonText}
              </Button>
            )} */}
          </Modal.Footer>
        </>
      </Modal>
    </Modal.Dialog>
  )
}

export default ModalForProjects
