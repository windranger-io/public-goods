import { Box } from '@chakra-ui/react'
import Image from 'next/image'

const Footer = () => {
  return (
    <Box mx={{ base: '16px', md: '60px' }}>
      <Separator />
      <Box>
        <Image
          alt="Public Goods Logo"
          src="/images/public-goods.svg"
          layout="responsive"
          width={2427}
          height={450}
        />
      </Box>
    </Box>
  )
}

export default Footer

const Separator = () => {
  return (
    <Box
      display="flex"
      width="100%"
      justifyContent={'space-between'}
      alignItems="center"
    >
      <Box
        width="0"
        height="0"
        borderTop="6px solid transparent"
        borderLeft="12px solid rgba(34, 83, 80, 0.1)"
        borderBottom="6px solid transparent"
        mr="-1px"
      />
      <Box height="1px" width={'100%'} background="rgba(34, 83, 80, 0.1)" />
      <Box
        width="0"
        height="0"
        borderTop="6px solid transparent"
        borderRight="12px solid rgba(34, 83, 80, 0.1)"
        borderBottom="6px solid transparent"
        ml="-1px"
      />
    </Box>
  )
}
