import './App.css';
import {Note} from './Note.js';
import {useState, useEffect} from 'react';
import { getAllNotes } from './services/notes/getAllNotes';
import { createNote} from './services/notes/postNote';

function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(()=>{
    setLoading(true)
    getAllNotes().then((notes) =>{
          setNotes(notes);
          setLoading(false)
        })
  },[newNote]);
  
  
  const handelChange = (event) =>{
    setNewNote(event.target.value);
  };

  const handleSubmit = (event) =>{
    event.preventDefault();

    console.log(newNote);
    const noteToAddToState = {
      title: newNote,
      body: newNote,
      userId: 1
    }

    createNote(noteToAddToState)
      .then(newNote => {
        setNotes(prevNotes => prevNotes.concat(newNote))
      })
      .catch((error) => {
        console.log(error)
        setError("Error en la api")
      })
        setNewNote("");
  }



  return (
    <div>
      
      <h1>Notes</h1>
      {
        loading ? 'Cargando...' : ''       
      }
      <ol>
        {notes
          .map((note) =>
          <Note key={note.id} {...note}/>
        )}
      </ol>
      <form onSubmit={handleSubmit}>
        <input type='text' onChange={handelChange} value={newNote}/>
        <button>crear Nota</button>
      </form>
      {error ? <span style={{color:'red'}}>{error}</span> : ''}
    </div>
  );
}

export default App;
