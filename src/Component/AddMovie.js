import React from 'react'
import { useState } from 'react';
import Modal from 'react-modal';
import ReactStars from 'react-rating-stars-component';

const AddMovie = ({handleAdd}) => {
    const [form, setForm] = useState({
      Moviename:"",
        Date:"",
        Imgsrc:"",
        Rating:1,
    })
    const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
const [modalIsOpen, setIsOpen] = useState(false);
Modal.setAppElement('#root');
 function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  const handleChange=(event) => {
      setForm({...form,[event.target.name]:event.target.value})
  }
  const handleSubmit=(e) => {
    e.preventDefault();
     let film={...form,id:Math.random()};
     handleAdd(film);
     closeModal();
     setForm({
      Moviename:"",
        Date:"",
        Imgsrc:"",
        Rating:1,
    })
  }
 const handelRate=(rate) => {
   setForm({...form,Rating:rate})
 }
return (
        <div>
            <button onClick={openModal} className="btn add-movie-btn">Add Movie</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        
        <form onSubmit={handleSubmit}>
            <label>Movie Name</label>  
          <input type="text" value={form.Moviename} name="Moviename" onChange={handleChange}/>
          <label>Imgsrc</label>
          <input type="url" value={form.Imgsrc} name="Imgsrc"onChange={handleChange}/>
          <label>Date</label>  
          <input type="date" value={form.Date} name="Date" onChange={handleChange}/>
          <label>Rate</label>  
          <ReactStars Rate={form.Rating} handelRate={handelRate}/>
          <button className="btn btn-primary">Add</button>
          <button onClick={closeModal} className="btn btn-danger">cancel</button>
        </form>
      </Modal>
        </div>
    )
}

export default AddMovie
