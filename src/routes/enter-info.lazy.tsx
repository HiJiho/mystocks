import { createLazyFileRoute } from '@tanstack/react-router';
import { useAtom } from 'jotai';
import DatePicker from 'react-datepicker';
import { formDataAtom, stockDataAtom } from '../atoms';
import styles from '../styles/EnterInfo.module.css';

export const Route = createLazyFileRoute('/enter-info')({
	component: EnterInfo,
});

function EnterInfo() {
	const [stockData, setStockData] = useAtom(stockDataAtom);
	const [formData, setFormData] = useAtom(formDataAtom);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setStockData((prevStockData) => ({
			...prevStockData,
			[name]: value,
		}));
	};

	// todo: 사용자 입력 타입 검사
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setFormData((prevFormData) => ({
			...prevFormData,
			stockData: [...prevFormData.stockData, stockData],
		}));
		setStockData({
			stockName: '',
			purchasePrice: '',
			quantity: null,
			purchaseDate: null,
		});
	};

	const handleDateChange = (date: Date | null) => {
		setStockData((prevStockData) => ({
			...prevStockData,
			purchaseDate: date,
		}));
	};

	return (
		<main className={styles.main}>
			<section className={styles.section}>
				<div className={styles.pContainer}>
					<p>
						{formData.uname}님이 보유 중인 주식의 종목, 매수가격, 매수수량,
						매수일을 입력해 주세요.
					</p>
				</div>
			</section>
			<section className={styles.section}>
				<form className={styles.form} onSubmit={handleSubmit}>
					<input
						className={styles.input}
						placeholder='종목'
						name='stockName'
						value={stockData.stockName}
						onChange={handleInputChange}
					/>
					{/* <input
						className={styles.input}
						placeholder='매수일'
						name='purchaseDate'
						value={
							stockData.purchaseDate !== null ? stockData.purchaseDate : ''
						}
						onChange={handleInputChange}
					/> */}
					<DatePicker
						selected={stockData.purchaseDate}
						onChange={handleDateChange}
						placeholderText='매수일'
						dateFormat='yyyy-MM-dd'
					/>
					<input
						className={styles.input}
						placeholder='매수가격'
						name='purchasePrice'
						value={stockData.purchasePrice}
						onChange={handleInputChange}
					/>
					<input
						className={styles.input}
						placeholder='수량'
						name='quantity'
						value={stockData.quantity !== null ? stockData.quantity : ''}
						onChange={handleInputChange}
					/>
					<button className={styles.button} type='submit'>
						다음 단계
					</button>
				</form>
			</section>
		</main>
	);
}
