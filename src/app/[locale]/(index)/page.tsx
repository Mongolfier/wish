import { MainPage } from '@/core/pages';
import { getServerTranslation } from '@/core/shared/i18n/server';

export async function generateMetadata() {
    const { t } = await getServerTranslation('meta');

    return {
        title: t('meta:main.title'),
        description: t('meta:main.description'),
    };
}

export default async function IndexPage() {
    return (
        <main>
            <MainPage />
        </main>
    );
}
