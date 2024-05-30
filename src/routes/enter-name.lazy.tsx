import { createLazyFileRoute } from '@tanstack/react-router';
import styles from '../styles/Start.module.css';

export const Route = createLazyFileRoute('/enter-name')({
	component: EnterName,
});

function EnterName() {
	return (
		<main className={styles.main}>
			<section className={styles.section}>
				<div className={styles.pContainer}>
					<p>이름을 입력해 주세요.</p>
				</div>
			</section>
			<section className={styles.section}>
				<form className={styles.form}>
					<input className={styles.input} placeholder='이름' />
					<button className={styles.button} type='submit'>
						다음 단계
					</button>
				</form>
			</section>
		</main>
	);
}
