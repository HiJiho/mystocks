import { createLazyFileRoute, useNavigate } from '@tanstack/react-router';
import { useAtom } from 'jotai';
import type React from 'react';
import { formDataAtom } from '../atoms';
import styles from '../styles/EnterName.module.css';

export const Route = createLazyFileRoute('/enter-name')({
	component: EnterName,
});

function EnterName() {
	const [formData, setFormData] = useAtom(formDataAtom);
	const navigate = useNavigate();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData((prevFormData) => ({
			...prevFormData,
			uname: e.target.value,
		}));
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log('Submitted Name:', formData.uname);
		if (formData.uname === '') {
			//todo
			alert('이름을 입력해주세요!');
		} else {
			navigate({ to: '/enter-info' });
		}
	};

	return (
		<main className={styles.main}>
			<section className={styles.section}>
				<div className={styles.pContainer}>
					<p>이름을 입력해 주세요.</p>
				</div>
			</section>
			<section className={styles.section}>
				<form className={styles.form} onSubmit={handleSubmit}>
					<input
						className={styles.input}
						placeholder='이름'
						value={formData.uname}
						onChange={handleChange}
					/>
					<button className={styles.button} type='submit'>
						다음 단계
					</button>
				</form>
			</section>
		</main>
	);
}
