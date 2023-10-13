import React from "react";
import "./styles.scss";

export default function History({ history }) {
  return (
    <div>
      <table className="table">
        <tr>
          <th>Historique des chiffres</th>
        </tr>
        {history.map((n, index) => (
          <tr key={index}>
            <td>{n}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
