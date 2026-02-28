import css from './RootBody.module.css';

export const RootBody = ({ children }: React.PropsWithChildren) => {
	return <body className={css.body}>{children}</body>;
};
