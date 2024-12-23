import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const initNotes = [
  { id: "GYi9G_uC4gBF1e2SixDvu", prop1: "value11", prop2: "value12", prop3: "value13" },
  { id: "IWSpfBPSV3SXgRF87uO74", prop1: "value21", prop2: "value22", prop3: "value23" },
  { id: "JAmjRlfQT8rLTm5tG2m1L", prop1: "value31", prop2: "value32", prop3: "value33" },
];
function App() {
  const [notes, setNotes] = useState(initNotes);
  const [newNote, setNewNote] = useState({ id: '', prop1: '', prop2: '', prop3: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewNote(prev => ({ ...prev, [name]: value }));
  };
  const addNote = () => {
    if (newNote.id && newNote.prop1 && newNote.prop2 && newNote.prop3) {
      setNotes(prev => [...prev, newNote]);
      setNewNote({ id: '', prop1: '', prop2: '', prop3: '' });
    }
  };
  return (
    <div>
      <ul>
        {notes.map(note => (
          <li key={note.id}>
            <span>{note.prop1}</span> <span>{note.prop2}</span> <span>{note.prop3}</span>
          </li>
        ))}
      </ul>
      {['id', 'prop1', 'prop2', 'prop3'].map(prop => (
        <input key={prop} name={prop} value={newNote[prop]} onChange={handleChange}/>
      ))}
      <button onClick={addNote}>Добавить элемент</button>
    </div>
  );
}

export default App;

