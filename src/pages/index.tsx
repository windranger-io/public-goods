import { Box, Button, Text } from '@chakra-ui/react'
import Image from 'next/image'

const Home = () => {
  return (
    <Box>
      <Image
        alt="hero"
        src="/images/hero.png"
        layout="responsive"
        width={700}
        height={475}
      />
      <Box>
        <Text>Logo</Text>
        <Box>
          <Text>
            Building a positive⇀︎sum world through new mechanisms for public
            goods.
          </Text>
          <Button>Read Proposal</Button>
        </Box>
      </Box>
    </Box>
  )
}

export default Home
