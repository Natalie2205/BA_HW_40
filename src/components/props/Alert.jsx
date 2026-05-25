const Alert = ({ type, message }) => {
  return (
    <div className={`alert alert-${type}`}>
      <span className="icon">⚠️</span>
      <p>{message}</p>
    </div>
  );
}
 
export default Alert;