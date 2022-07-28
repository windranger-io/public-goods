import { extendTheme } from '@chakra-ui/react'
import { Text } from './text'
import { Button } from './button'
import { Link } from './link'

export const theme = extendTheme({
  components: {
    Text,
    Button,
    Link,
  },
  colors: {
    brand: {
      green: '#225350',
      grey: '#E9E9E9',
      white: '#FFFFFF',
    },
  },
  fonts: {
    body: 'Nib Regular Pro',
  },
  styles: {
    global: {
      body: {
        background: `brand.gey`,
      },
    },
  },
})
