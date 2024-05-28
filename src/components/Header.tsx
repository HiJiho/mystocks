import '../styles/Header.module.css';

const Header = () => {
	return (
		<header>
			<div>
				<p>My Stocks</p>
			</div>
			<div>
				<nav>
					<a href='/login'>Login</a>
					<a href='/signup'>Sign Up</a>
				</nav>
			</div>
		</header>
	);
};

export default Header;
