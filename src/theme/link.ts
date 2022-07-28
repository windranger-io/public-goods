export const Link = {
  baseStyle: {
    _hover: {
      textDecoration: 'none',
    },
  },
  // styles for different sizes ("sm", "md", "lg")
  sizes: {
    sm: {},
    md: {},
  },
  // styles for different visual variants ("outline", "solid")
  variants: {
    'as-content': {
      borderBottom: '1px solid  rgba(34, 83, 80, 0.8)',
      fontFamily: 'Nib Semibold Pro',
      color: 'brand.green',
      fontSize: '19px',
      _hover: {
        opacity: '0.9',
      },
    },

    'as-footer': {
      color: 'rgba(34, 83, 80, 0.8)',
      display: 'block',
      fontFamily: 'Inter, sans-serif',
      fontSize: '12px',
      fontWeight: '400',
      textTransform: 'uppercase',
      _hover: {
        color: 'rgba(34, 83, 80, 1)',
        textDecoration: 'underline',
      },
      _active: {
        color: 'rgba(34, 83, 80, 0.9)',
      },
    },
  },
}
