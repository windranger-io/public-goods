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
      borderBottom: '1px solid',
      fontFamily: 'Nib Semibold Pro',
      color: 'brand.green',
      fontSize: '19px',
      transition: 'all 0.2s ease',
      _hover: {
        mx: '4px',
        opacity: '0.9',
        transform: 'scale(1.1)',
      },
    },

    'as-footer': {
      color: 'rgba(34, 83, 80, 0.8)',
      fontFamily: 'Inter, sans-serif',
      fontSize: '12px',
      fontWeight: '400',
      textTransform: 'uppercase',
      _hover: {
        color: 'rgba(34, 83, 80, 1)',
      },
      _active: {
        color: 'rgba(34, 83, 80, 0.9)',
      },
    },
  },
}
