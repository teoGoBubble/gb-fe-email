import { globalTheme } from '../globalTheme';
import { CSSProperties } from 'react';

const { padding, colors, primitives } = globalTheme;

export const mainWrapper = {
	border: '0',
	margin: '0 auto',
	padding: padding.xl,
	background: primitives.gray50,
};

export const logoWrapper: CSSProperties = {
	width: 'fit-content',
	textAlign: 'center',
	border: '0',
	margin: '0 auto',
	padding: '10px 0px',
};

export const mailContentWrapper: CSSProperties = {
	boxSizing: 'border-box',
	width: '100%',
	padding: padding.md,
	background: colors.background.default,
};

export const mailContent = {
	width: '100%',
	paddingTop: padding.md,
};

export const contentElement = {
	margin: '0px 40px 40px',
	padding: padding.sm,
	background: colors.background.dim,
};

export const buttonStyle = {
	background: '#000',
	color: '#fff',
	padding: '12px 20px',
};
