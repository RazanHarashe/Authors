import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AuthorList = () => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    fetchAuthors();
  }, []);

  const fetchAuthors = () => {
    axios.get('http://localhost:8000/api/authors')
      .then(res => setAuthors(res.data))
      .catch(err => console.error(err));
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8000/api/authors/${id}`)
      .then(() => fetchAuthors())
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h1>Favorite authors</h1>
      <Link to="/new">Add an author</Link>
      <table>
        <thead>
          <tr>
            <th>Author</th>
            <th>Actions available</th>
          </tr>
        </thead>
        <tbody>
          {authors.map(author => (
            <tr key={author._id}>
              <td>{author.name}</td>
              <td>
                <Link to={`/edit/${author._id}`}>Edit</Link>
                <button onClick={() => handleDelete(author._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AuthorList;
