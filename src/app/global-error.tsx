'use client';

import { useTranslation } from '@/core/shared/i18n/client';

export default function GlobalError() {
    const { t } = useTranslation('meta');
	const metadata = getGlobalErrorMetadata(t);
    
    return (
        <html>
            <body>
                <h2>Что-то пошло не так!</h2>
                {error.digest && <p>{error.digest}</p>}
                <button onClick={() => reset()}>Попробовать снова</button>
            </body>
        </html>
    );
}
