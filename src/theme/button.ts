export const Button = {
  // style object for base or default style
  baseStyle: {
    borderRadius: '40px',
    color: 'brand.green',
    // fontSize: '18px',
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
  },
  // default values for `size` and `variant`
}
