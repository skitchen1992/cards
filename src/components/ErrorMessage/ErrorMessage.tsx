import React from 'react';
import img from './error.gif';

interface IErrorMessage {
  error: boolean;
}

const ErrorMessage: React.FC<IErrorMessage> = (props) => {
  const { error } = props;

  if (!error) return null;

  return (
    <div>
      <img
        style={{
          display: 'block',
          width: '250px',
          height: '250px',
          objectFit: 'contain',
          margin: '0 auto',
        }}
        src={img}
        alt="Error"
      />
    </div>
  );
};

export default ErrorMessage;
