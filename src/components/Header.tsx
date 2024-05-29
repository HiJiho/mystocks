import styles from '../styles/Header.module.css';

const Header = () => {
	return (
		<header className={styles.header}>
			<div>
				<p className={styles.p}>My Stocks</p>
			</div>
			<div>
				<nav className={styles.nav}>
					<a href='/login'>Login</a>
					<a href='/signup'>Sign Up</a>
				</nav>
			</div>
		</header>
	);
};

export default Header;
