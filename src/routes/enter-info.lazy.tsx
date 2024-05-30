import { createLazyFileRoute } from '@tanstack/react-router';
import { useAtom } from 'jotai';
import { userNameAtom } from '../atoms';
import styles from '../styles/EnterInfo.module.css';

export const Route = createLazyFileRoute('/enter-info')({
	component: EnterInfo,
});

function EnterInfo() {
	const [userName] = useAtom(userNameAtom);
	return (
		<main className={styles.main}>
			<section className={styles.section}>
				<div className={styles.pContainer}>
					<p>
						{userName}님이 보유 중인 주식의 종목, 매수가격, 매수수량, 매수일을
						입력해 주세요.
					</p>
				</div>
			</section>
			<section className={styles.section}>
				<form
					className={styles.form}
					// onSubmit={handleSubmit}
				>
					<input
						className={styles.input}
						placeholder='종목'
						// value={stockName}
						// onChange={handleChange}
					/>
          <input
						className={styles.input}
						placeholder='매수가격'
						// value={purchasePrice}
						// onChange={handleChange}
					/>
					<input
						className={styles.input}
						placeholder='수량'
						// value={quantity}
						// onChange={handleChange}
					/>
          <input
						className={styles.input}
						placeholder='매수일'
						// value={purchaseDate}
						// onChange={handleChange}
					/>
					<button className={styles.button} type='submit'>
						다음 단계
					</button>
				</form>
			</section>
		</main>
	);
}
