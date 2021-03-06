import ReactDOM from 'react-dom';

const Portal = ({ children, node }: any) => {
  return ReactDOM.createPortal(children, node);
};

export default Portal;
