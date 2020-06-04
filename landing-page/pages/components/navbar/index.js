import classes from './index.module.scss';

function Navbar() {
  return (
    <div className={classes.navbar}>
      <h2>
        <span>Covid</span> Overflow
      </h2>
      <ul className={classes.buttons}>
        <li>
          <a href="/articles">Readings</a>
        </li>
        <li>
          <a href="/map">Maps</a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
