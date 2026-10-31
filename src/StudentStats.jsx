function StudentStats({ students }) {
  const total = students.length;

  if (total === 0) {
    return (
      <div className="stats">
        <p>Aucun étudiant</p>
      </div>
    );
  }

  const somme = students.reduce((acc, s) => acc + s.note, 0);
  const moyenne = (somme / total).toFixed(2);

  return (
    <div className="stats">
      <div>
        <span>Nombre d'étudiants</span>
        <strong>{total}</strong>
      </div>
      <div>
        <span>Moyenne générale</span>
        <strong>{moyenne}/20</strong>
      </div>
    </div>
  );
}

export default StudentStats;
