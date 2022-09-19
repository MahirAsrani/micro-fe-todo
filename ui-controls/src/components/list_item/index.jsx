import React from 'react';
import './style.css';
import Button from '../button/';
import 'remixicon/fonts/remixicon.css';

export default ({ title, completed = true, action }) => {
  return (
    <div className="flex border px-6 py-2 my-2 rounded-xl items-center justify-between">
      <div className="flex">
        <i
          className={`ri-checkbox-blank-circle-line mr-4 ${
            completed ? 'blue' : 'brown'
          }`}
        ></i>
        <p className="item_text">{title}</p>
      </div>
      {completed ? (
        <p className="item_text small uppercase">Completed</p>
      ) : (
        <Button title="Mark Complete" style={'success'} action={action} />
      )}
    </div>
  );
};
