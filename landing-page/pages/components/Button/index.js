import classes from './index.module.css';

function Button(props) {
  return (
    <button className={[classes.btn, props.className].join(' ')}>
      {props.children}
    </button>
  );
}

export default Button;
