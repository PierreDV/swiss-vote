import React from 'react';

function ResultsTable({ description, results }) {
  return (
    <div>
      <h2>{description && description.en}</h2>
      <table>
        <thead>
          <tr key="header">
            {results && Object.keys(results[0]).map((key) => <th key={key}>{key}</th>)}
          </tr>
        </thead>
        <tbody>
          {results && results.map((result) => {
            return (
              <tr key={result.canton}>
                <td>{result.canton}</td>
                <td>{result.yes}</td>
                <td>{result.no}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ResultsTable;