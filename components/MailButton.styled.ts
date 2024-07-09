import { CSSProperties } from 'react';
import { globalTheme } from '../emails/globalTheme';

const { padding, colors, fonts, space, border, borderRadius } = globalTheme;

export const alertButton: CSSProperties = {
    background: colors.background.default,
    color: colors.text.heading,
    border: border.sm,
    padding: `${padding.sm}`,
    textDecoration: 'none',
    borderRadius: borderRadius.sm,
    display: 'inline-block', 
    width: 'auto',
};