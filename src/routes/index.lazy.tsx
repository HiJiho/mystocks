// 확장자가 .lazy.tsx인 루트 파일은
// 별도의 번들을 통해 지연 로드되어 메인 번들 크기를 최대한 간결하게 유지

import { createLazyFileRoute } from '@tanstack/react-router';
import App from '../components/App';

export const Route = createLazyFileRoute('/')({
	component: Index,
});

function Index() {
	return (
		<>
			<App />
		</>
	);
}
