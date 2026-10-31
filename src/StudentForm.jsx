import { useState } from 'react';

function StudentForm({ onAdd }) {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [note, setNote] = useState('');
  const [erreur, setErreur] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
// nom prenom obligatoires
    if (!nom.trim() || !prenom.trim()) {
      setErreur('Le nom et le prénom sont obligatoires');
      return;
    }
// note entre 0 et 20
    const noteNombre = Number(note);
    if (note.trim() === '' || Number.isNaN(noteNombre) || noteNombre < 0 || noteNombre > 20) {
      setErreur('La note doit être comprise entre 0 et 20');
      return;
    }

    onAdd({ nom: nom.trim(), prenom: prenom.trim(), note: noteNombre });
    setNom('');
    setPrenom('');
    setNote('');
    setErreur('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Ajouter un étudiant</h2>
      <div className="champs">
        <input
          type="text"
          placeholder="Nom"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
        />
        <input
          type="text"
          placeholder="Prénom"
          value={prenom}
          onChange={(e) => setPrenom(e.target.value)}
        />
        <input
          type="number"
          placeholder="Note (0–20)"
          step="0.01"
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
      </div>
      {erreur && <p className="erreur">{erreur}</p>}
      <button type="submit">+ Ajouter l'étudiant</button>
    </form>
  );
}

export default StudentForm;
