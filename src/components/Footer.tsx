import { Box, Grid, Link, Text } from '@chakra-ui/react'
// import NextLink from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <Box mx={{ base: '16px', md: '60px' }}>
      <Separator />
      <Box
        display={'flex'}
        justifyContent={{ base: 'center', md: 'space-between' }}
      >
        <Box display={{ base: 'none', md: 'block' }}>
          <Text variant="inter" fontSize={'12px'} color="rgba(34, 83, 80, 0.5)">
            PG DAO, {new Date().getFullYear()}{' '}
          </Text>
        </Box>
        <Grid templateColumns="repeat(3, 1fr)" textAlign={'center'}>
          <Link variant="as-footer">Twitter</Link>
          <Link variant="as-footer">Mail</Link>
          <Link variant="as-footer">Proposal</Link>
        </Grid>
      </Box>
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
