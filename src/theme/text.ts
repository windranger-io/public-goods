export const Text = {
  // style object for base or default style
  baseStyle: {
    color: 'brand.green',
    fontSize: '19px',
  },
  // styles for different sizes ("sm", "md", "lg")
  sizes: {
    small: {
      fontSize: '12px',
    },
  },
  // styles for different visual variants ("outline", "solid")
  variants: {
    inter: {
      fontFamily: 'Inter, sans-serif',
    },
    italic: {
      fontFamily: 'Nib Italic Pro',
    },
    semiBold: {
      fontFamily: 'Nib Semibold Pro',
    },
    indent: {
      marginBottom: '44px',
      textIndent: '40px',
    },
  },
  // default values for `size` and `variant`
  defaultProps: {
    size: '',
    variant: '',
  },
}
