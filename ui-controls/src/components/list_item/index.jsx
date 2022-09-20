import React from 'react';
import './style.css';
import Button from '../button/';
import 'remixicon/fonts/remixicon.css';

export default ({ title, completed = true, cmpAction, rmAction }) => {
  return (
    <div className="flex border px-6 py-2 my-2 rounded-xl items-center justify-between">
      <div className="flex items-center">
        <i
          className={`ri-checkbox-blank-circle-line mr-4 ${
            completed ? 'blue' : 'brown'
          }`}
        ></i>
        <p className="item_text">{title}</p>
      </div>

      <div className="flex items-center">
        {completed ? (
          <p className="item_text small uppercase mx-3">Completed</p>
        ) : (
          <Button title="Mark Complete" style={'success'} action={cmpAction} />
        )}
        <i
          className="ri-delete-bin-6-line cursor-pointer"
          onClick={rmAction}
        ></i>
      </div>
    </div>
  );
};
