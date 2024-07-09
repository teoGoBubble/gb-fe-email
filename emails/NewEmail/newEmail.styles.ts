import { CSSProperties } from 'react';
import { globalTheme } from '../globalTheme';

const { padding, colors, fonts, space, border, borderRadius } = globalTheme;

export const mainWrapper: CSSProperties = {
    border: '0',
    margin: '0 auto',
    padding: padding.lg,
    background: colors.background.dim,
    maxWidth: '600px',
    fontFamily: fonts.family.website,
};

export const logoWrapper: CSSProperties = {
    width: 'fit-content',
    textAlign: 'center',
    border: '0',
    margin: `0 auto ${space.lg}`,
};

export const mailContentWrapper: CSSProperties = {
    boxSizing: 'border-box',
    width: '100%',
    padding: padding.md,
    background: colors.background.default,
};

export const mailContent: CSSProperties = {
    width: '100%',
    paddingTop: padding.md,
};

export const headerText: CSSProperties = {
    fontSize: fonts.size.lg,
    fontWeight: fonts.weight.bold,
    textAlign: 'center',
    marginBottom: space.md,
};

export const subText: CSSProperties = {
    fontSize: fonts.size.md,
    textAlign: 'center',
    marginBottom: space.md,
};

export const alertBox: CSSProperties = {
    background: colors.background.dim,
    padding: padding.md,
    borderRadius: borderRadius.md,
    textAlign: 'center',
    marginBottom: space.md,
};

export const alertHeader: CSSProperties = {
    fontSize: fonts.size.md,
    fontWeight: fonts.weight.bold,
    marginBottom: space.sm,
};

export const alertMessage: CSSProperties = {
    fontSize: fonts.size.md,
    fontStyle: 'italic',
    marginBottom: space.md,
};

export const alertButton: CSSProperties = {
    background: colors.background.primary,
    color: colors.text.onPrimary,
    padding: `${padding.sm} ${padding.md}`,
    textDecoration: 'none',
    borderRadius: borderRadius.sm,
};

export const mainButton: CSSProperties = {
    background: colors.background.primary,
    color: colors.text.onPrimary,
    padding: `${padding.md} ${padding.lg}`,
    textDecoration: 'none',
    borderRadius: borderRadius.sm,
    display: 'block',
    width: 'fit-content',
    margin: `${space.md} auto`,
};

export const footerText: CSSProperties = {
    fontSize: fonts.size.md,
    textAlign: 'center',
    marginTop: space.md,
};

export const footer: CSSProperties = {
    textAlign: 'center',
    padding: padding.md,
    background: colors.background.dim,
};

export const footerNote: CSSProperties = {
    fontSize: fonts.size.sm,
    color: colors.text.dim,
    marginBottom: space.sm,
};

export const footerAddress: CSSProperties = {
    fontSize: fonts.size.sm,
    color: colors.text.dim,
};

export const icon: CSSProperties = {
    width: '20px',
    height: '20px',
    marginRight: space.xs,
};