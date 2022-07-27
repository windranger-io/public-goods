import { Box, Button, Text } from '@chakra-ui/react'
import Image from 'next/image'

const Hero = () => {
  return (
    <Box>
      <Box position="relative" mx={{ base: 0, md: '48px' }} maxWidth="2048px">
        <Box height={{ base: '110vh', md: '115vh' }} className="grain">
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
          pb={{ base: '40px', md: '52px' }}
          px="30px"
        >
          <Image
            alt="Public Goods Logo"
            src="/images/logo.svg"
            width={'250px'}
            height={'70px'}
          />
          <Box textAlign="center" maxWidth="980px" margin="0 auto">
            <Box width={{ base: '46px', sm: '67px' }} margin="0 auto 43px">
              <Image
                alt="Public Goods Logo"
                src="/images/union.svg"
                width={'67.5px'}
                height={'50px'}
              />
            </Box>
            <Text
              color="brand.white"
              fontSize={{ base: '40px', md: '72px' }}
              lineHeight={{ base: '40px', md: '72px' }}
              letterSpacing="-2px"
            >
              {' '}
              Building a positive⇀︎sum world through{' '}
              <span style={{ fontFamily: 'Nib Italic Pro' }}>new</span>{' '}
              mechanisms
              <br />
              <span style={{ fontFamily: 'Nib Italic Pro' }}>for</span> public
              goods.
            </Text>
            <Box my="43px">
              <Button variant="brand">Read proposal</Button>
            </Box>
            <Text
              textTransform="uppercase"
              fontSize={{ base: '11px', md: '12px' }}
              lineHeight={{ base: '17px', md: '19px' }}
              variant="inter"
              color="brand.white"
              maxWidth={{ base: '277px', md: '544px' }}
              margin="0 auto "
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
      Based on Landscape with the Palace at Caserta and Vesuvius
      <br />
      by Jacob Philipp Hackert ‘1793
    </Text>
  )
}
