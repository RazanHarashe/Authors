import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditAuthor = () => {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:8000/api/authors/${id}`)
      .then(res => {
        setName(res.data.name);
      })
      .catch(err => navigate('/'));
  }, [id, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:8000/api/authors/${id}`, { name })
      .then(() => navigate('/'))
      .catch(err => setErrors(err.response?.data?.errors || {}));
  };

  return (
    <div>
      <h1>Edit author</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input type="text" value={name} onChange={e => setName(e.target.value)} />
          {errors?.name && <p>{errors.name.message}</p>}
        </div>
        <button type="submit">Submit</button>
        <button type="button" onClick={() => navigate('/')}>Cancel</button>
      </form>
    </div>
  );
};

export default EditAuthor;
