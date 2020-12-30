import React, { useState, useEffect } from 'react';
import useLibrary from './hooks/useLibrary';

const ApiForm = () => {
  const [form, setForm] = useState(null);
  const { setGetter } = useLibrary('music');
  const [checked, setChecked] = useState(false);

  const handleFormSwitch = e => {
    console.log(e.target.id);
    setForm(e.target.id);
  };

  const handleCheckbox = e => {
    setChecked(!checked);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(e.target);
  };
  return (
    <div className="api-console">
      <h3>User Inteface</h3>
      <button id="set" onClick={e => handleFormSwitch(e)}>
        Set
      </button>
      <button id="get" onClick={e => handleFormSwitch(e)}>
        Get
      </button>

      {form === 'set' && (
        <div className="set">
          <form className="set-form" onSubmit={e => handleSubmit(e)}>
            <label htmlFor="drives">Add drive:</label>
            <select name="drives" id="drives">
              <option value="D">D</option>
              <option value="H">H</option>
              <option value="I">I</option>
            </select>
            <button type="submit">Go!</button>
          </form>
        </div>
      )}

      {form === 'get' && (
        <div className="get">
          <form className="get-form" onSubmit={e => handleSubmit(e)}>
            <label htmlFor="retrieve">
              <input
                type="checkbox"
                name="retrieve"
                id="retrieve"
                value={checked}
                onChange={e => handleCheckbox(e)}
              ></input>
              retrieve
            </label>
            <button type="submit">Go!</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ApiForm;
