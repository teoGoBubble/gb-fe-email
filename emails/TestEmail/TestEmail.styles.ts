import { globalTheme } from '../globalTheme';
import { CSSProperties } from 'react';

const { padding, colors, primitives, fonts, space, border, borderRadius } = globalTheme;



export const mainWrapper: CSSProperties = {
  textAlign: 'center',
  border: '0',
  margin: '0 auto',
  padding: padding.lg,
  background: primitives.gray50,
};

export const logoWrapper: CSSProperties = {
  width: 'fit-content',
  textAlign: 'center',
  border: '0',
  margin: '0 auto 40px',
};

export const mailContentWrapper: CSSProperties = {
  boxSizing: 'border-box',
  width: '100%',
  padding: padding.md,
  background: colors.background.default,
};

export const typography: CSSProperties = {
  font: fonts.family.website,
  color: colors.text.body,
}

export const title: CSSProperties = {
  font: fonts.family.website,
  color: colors.text.heading,
  fontSize: fonts.size.xl,
  fontWeight: fonts.weight.semiBold,
  padding: space.xs,
}

export const mailContent = {
  width: '100%',
  // paddingTop: padding.md,
};

export const contentContainer = {
  border: border.sm,
  borderRadius: borderRadius.sm,
}

export const contentElement = {
  marginBottom: space.md,
  padding: padding.sm,
};

export const buttonStyle = {
  background: '#000',
  color: '#fff',
  padding: '12px 20px',
};
