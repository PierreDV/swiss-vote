import React from 'react';

function ResultsTable(props) {
  return (
    <div>
      <h2>{props.description.en}</h2>
      <table>
        <tbody>
          <tr key="header">
            {Object.keys(props.results[0]).map((key) => <th key={key}>{key}</th>)}
          </tr>
          {props.results.map((result) => {
            return (
              <tr key={result.canton}>
                <td>{result.canton}</td>
                <td>{result.yes}</td>
                <td>{result.no}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ResultsTable;