import "./index.css";

const Button = ({ children, onClick, className = "buttons" }) => {
  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
