import classes from './index.module.css';

function Navbar() {
  return (
    <div className={classes.navbar}>
      <h2>
        <span>Covid</span> Overflow
      </h2>
      <ul className={classes.buttons}>
        <li>Readings</li>
        <li>Maps</li>
      </ul>
    </div>
  );
}

export default Navbar;
