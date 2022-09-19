import('./style.css');

import React from 'react';

export default ({ title = 'Button', style = 'dark', action }) => {
  return (
    <div className={`btn px-8 py-1 mx-3 ${style}`} onClick={action}>
      {title}
    </div>
  );
};
