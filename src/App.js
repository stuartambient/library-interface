import React from 'react';
import useLibrary from './hooks/useLibrary';
const App = () => {
  const { entries } = useLibrary('music');
  return (
    <div className="container">
      {!entries ? (
        <p>No entries</p>
      ) : (
        <ul>
          {entries.map(entry => (
            <li>
              {entry.artist}--{entry.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
