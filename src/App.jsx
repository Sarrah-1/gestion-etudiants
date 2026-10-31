import { useState } from 'react';
import StudentStats from './StudentStats.jsx';
import StudentForm from './StudentForm.jsx';
import StudentList from './StudentList.jsx';

const initialStudents = [
  { id: 1, nom: 'Ouaday', prenom: 'Sara', note: 17 },
  { id: 2, nom: 'Hamdi', prenom: 'Amina', note: 12 },
  { id: 3, nom: 'soufri', prenom: 'Noura', note: 17 }
];

function App() {
  const [students, setStudents] = useState(initialStudents);

  const ajouterEtudiant = (etudiant) => {
    setStudents((prev) => [...prev, { id: Date.now(), ...etudiant }]);
  };

  const supprimerEtudiant = (id) => {
    setStudents((prev) => prev.filter((s) => s.id !== id));
  };

  return (
    <div className="carte">
      <h1>Gestion des étudiants</h1>
      <StudentStats students={students} />
      <StudentForm onAdd={ajouterEtudiant} />
      <StudentList students={students} onDelete={supprimerEtudiant} />
    </div>
  );
}

export default App;
