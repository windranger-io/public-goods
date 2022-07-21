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
    'as-footer': {
      color: 'rgba(34, 83, 80, 0.5)',
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
