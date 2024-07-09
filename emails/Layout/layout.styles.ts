import { CSSProperties } from 'react';
import { globalTheme } from '../globalTheme';

const { padding, colors, fonts, space, border, borderRadius } = globalTheme;

export const mainWrapper: CSSProperties = {
    border: '0',
    margin: '0 auto',
    padding: padding.md,
    background: colors.background.dim,
    maxWidth: '600px',
    fontFamily: fonts.family.website,
};

export const logoWrapper: CSSProperties = {
    width: 'fit-content',
    textAlign: 'center',
    border: '0',
    margin: `${space.multiple(2)} auto ${space.xl}`,
};

export const mailContentWrapper: CSSProperties = {
    boxSizing: 'border-box',
    width: '100%',
    padding: padding.md,
    background: colors.background.default,
};

export const headerContent: CSSProperties = {
    width: '100%',
};

export const headerText: CSSProperties = {
    color: colors.text.heading,
    fontSize: fonts.size.lg,
    fontWeight: fonts.weight.semiBold,
    textAlign: 'center',
    margin: `0 auto ${space.xl}`,
};

export const subText: CSSProperties = {
    color: colors.text.body,
    fontSize: fonts.size.md,
    fontWeight: fonts.weight.regular,
    textAlign: 'center',
    margin: `0 auto ${space.xl}`,
};

export const alertBox: CSSProperties = {
    background: colors.background.default,
    padding: space.multiple(5),
    borderRadius: borderRadius.xs,
    border: border.sm,
    textAlign: 'center',
    marginBottom: space.md,
};

export const alertHeader: CSSProperties = {
    fontSize: fonts.size.md,
    fontWeight: fonts.weight.bold,
    margin: 0,
    marginBottom: space.sm,
};

// export const Spacer: CSSProperties ={
//     width: '40px',
// }

export const alertMessage: CSSProperties = {
    fontSize: fonts.size.md,
    fontStyle: 'italic',
    marginBottom: space.md,
};

export const alertButton: CSSProperties = {
    background: colors.background.default,
    color: colors.text.heading,
    border: border.sm,
    padding: `${padding.sm}`,
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

export const marginReset: CSSProperties = {
    margin: 0,
}