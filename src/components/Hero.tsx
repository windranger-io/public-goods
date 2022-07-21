import { Box, Button, Text } from '@chakra-ui/react'
import Image from 'next/image'

const Hero = () => {
  return (
    <Box>
      <Box position="relative" mx={{ base: 0, md: '48px' }}>
        <Box height="90vh">
          <Image
            alt="hero"
            src="/images/hero.png"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </Box>
        <Box
          position="absolute"
          top="0"
          bottom="0"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          width="100%"
          pt={{ base: '48px', md: '114px' }}
        >
          <Image
            alt="Public Goods Logo"
            src="/images/logo.svg"
            width={250}
            height={70}
          />
          <Box textAlign="center">
            <Text
              color="brand.white"
              fontSize={{ base: '45px', md: '72px' }}
              lineHeight={{ base: '45px', md: '72px' }}
            >
              {' '}
              Building a positive⇀︎sum world through new mechanisms for public
              goods.
            </Text>
            <Button>Read Proposal</Button>
            <Text
              textTransform="uppercase"
              size="small"
              variant="inter"
              color="brand.white"
            >
              Public goods DAO, focused on accelerating the web3 public goods
              ecosystem. proposed by Gitcoin and BitDAO.
            </Text>
          </Box>
        </Box>
      </Box>
      <Attribution />
    </Box>
  )
}

export default Hero

const Attribution = () => {
  return (
    <Text
      fontSize={{ base: '10px', md: '12px' }}
      lineHeight={{ base: '16px', md: '19px' }}
      ml={{ base: '16px', md: '48px' }}
      mt="16px"
      opacity="0.5"
    >
      Landscape with the Palace at Caserta and Vesuvius
      <br />
      by Jacob Philipp Hackert ‘1793
    </Text>
  )
}
