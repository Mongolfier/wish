'use client';

import { useState } from 'react';
import { AuthDialog } from '../AuthDialog/AuthDialog';
import { useTranslation } from '@/core/shared/i18n/client';

export const Auth = () => {
    const { t } = useTranslation('header');
    const [open, setOpen] = useState(false);

    return <>
        <button onClick={() => setOpen(true)}>{t('header:login')}</button>
        <AuthDialog open={open} onOpenChange={setOpen} />
    </>;
};