import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddAuthor = () => {
  const [name, setName] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/authors', { name })
      .then(() => navigate('/'))
      .catch(err => setErrors(err.response?.data?.errors || {}));
  };

  return (
    <div>
      <h1>Add a new author</h1>
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

export default AddAuthor;
