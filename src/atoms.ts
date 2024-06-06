import { atom } from 'jotai';

export interface FormData {
	uname: string;
	stockData: StockData[];
}
export interface StockData {
	stockName: string;
	purchasePrice: string;
	quantity: number | null;
	purchaseDate: Date | null;
}

export const userNameAtom = atom<string>('');
export const formDataAtom = atom<FormData>({
	uname: '',
	stockData: [],
});
export const stockDataAtom = atom<StockData>({
	stockName: '',
	purchasePrice: '',
	quantity: null,
	purchaseDate: null,
});
