export const Button = {
  // style object for base or default style
  baseStyle: {
    borderRadius: '40px',
    color: 'brand.green',
    transition: 'all 0.2s ease',
    _hover: {
      transform: 'scale(1.05)',
    },
  },
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    brand: {
      background: 'brand.white',
      fontFamily: 'Nib Semibold Pro',
      fontSize: '18px',
      lineHeight: '27px',
      padding: '24px 33px',

      _hover: {
        color: 'rgba(34, 83, 80, 0.8)',
      },
      _active: {
        color: 'brand.green',
        outline: '1px solid #ffffff',
      },
    },
    submit: {
      fontFamily: 'Nib Semibold Pro',
      padding: '0',
    },
  },
  // default values for `size` and `variant`
}
