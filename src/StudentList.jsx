import { useState } from 'react';

function StudentList({ students, onDelete }) {
  const [recherche, setRecherche] = useState('');

  const etudiantsFiltres = students.filter((s) =>
    s.nom.toLowerCase().includes(recherche.trim().toLowerCase())
  );

  return (
    <div>
      <h2>Liste des étudiants</h2>
      <input
        type="text"
        placeholder="Rechercher"
        value={recherche}
        onChange={(e) => setRecherche(e.target.value)}
      />

      {etudiantsFiltres.length === 0 ? (
        <p className="vide">Aucun étudiant à afficher</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Nom</th>
              <th>Prénom</th>
              <th>Note</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {etudiantsFiltres.map((s) => (
              <tr key={s.id}>
                <td>{s.nom}</td>
                <td>{s.prenom}</td>
                <td>{s.note}</td>
                <td>
                  <button className="supprimer" onClick={() => onDelete(s.id)}>
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default StudentList;
