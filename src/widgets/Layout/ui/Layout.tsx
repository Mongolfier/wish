import type { ReactNode } from 'react';
import styles from './Layout.module.css';
import { LanguageSwitcher } from '../../../shared/ui/LanguageSwitcher/LanguageSwitcher';

interface LayoutProps {
    children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
    return (
        <div className={styles.layout}>
            <header className={styles.layout__header}>
                <LanguageSwitcher />
            </header>

            <main className={styles.layout__main}>
                {children}
            </main>

            <footer className={styles.layout__footer}>
                {/* Footer will be added here */}
            </footer>
        </div>
    );
}; 