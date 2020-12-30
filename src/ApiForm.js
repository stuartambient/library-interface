import React, { useState, useEffect } from 'react';

const ApiForm = () => {
  const [form, setForm] = useState(null);

  const handleFormSwitch = e => {
    console.log(e.target.id);
    setForm(e.target.id);
  };
  return (
    <div className="api-console">
      <h1>User Inteface</h1>
      <button id="set" onClick={e => handleFormSwitch(e)}>
        Set
      </button>
      <button id="get" onClick={e => handleFormSwitch(e)}>
        Get
      </button>

      {form === 'set' && (
        <div className="set">
          <form className="set-form">
            <label for="drives">Add drive:</label>
            <select name="drives" id="drives">
              <option value="D">D</option>
              <option value="H">H</option>
              <option value="I">I</option>
            </select>
          </form>
        </div>
      )}

      {form === 'get' && (
        <div className="get">
          <form className="get-form">
            <label for="retrieve">retrieve</label>
            <input type="checkbox" name="retrieve" id="retrieve"></input>
          </form>
        </div>
      )}
    </div>
  );
};

export default ApiForm;
