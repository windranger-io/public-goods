import { Box, Button, Text } from '@chakra-ui/react'
import Image from 'next/image'

const Hero = () => {
  return (
    <Box position="relative">
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
      <Text>Attribution</Text>
    </Box>
  )
}

export default Hero
