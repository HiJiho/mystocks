// import reactLogo from '../assets/react.svg';
import { useNavigate } from '@tanstack/react-router';
import styles from '../styles/Main.module.css';

const Main = () => {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate({ to: '/enter-name' });
	};

	return (
		<main className={styles.main}>
			<section className={styles.section}>
				<div>
					<h1 className={styles.h1}>주식 포트폴리오 관리를 한눈에!</h1>
				</div>
				<div>
					<p>한 번의 입력으로 귀찮은 포트폴리오 관리는 끝</p>
				</div>
				<div>
					<button className={styles.button} type='button' onClick={handleClick}>
						시작하기
					</button>
				</div>
			</section>
			<section className={styles.section}>
				<picture>
					<img
						className={styles.img}
						src='https://via.placeholder.com/1080x1420'
						alt=''
					/>
				</picture>
			</section>
		</main>
	);
};

export default Main;
