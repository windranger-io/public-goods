import { Box, Container, Text } from '@chakra-ui/react'

const Content = () => {
  return (
    <Box>
      <Container textAlign="justify">
        <Text variant="indent">
          pgDAO is an impact investment DAO,{' '}
          <Text variant="italic">proposed by</Text>&nbsp;
          <Text variant="semiBold">Gitcoin</Text>&nbsp;and{' '}
          <Text variant="semiBold">BitDAO</Text>, focused on accelerating the
          web3 public goods ecosystem. It builds on the idea of{' '}
          <Text variant="italic">impact = profit</Text> put forward by{' '}
          <Text variant="semiBold">Optimism</Text> — leveraging crypto-native
          capital deployment mechanisms to produce and invest in the next
          generation of web3 infrastructure.
        </Text>
        <Text variant="indent">
          Our unique value proposition comes from years of building out
          mechanisms and tools that have helped sustain some of the largest,
          most impactful names in the space including{' '}
          <Text variant="semiBold">
            Dune Analytics, Plasma Group (now Optimism), Uniswap, WalletConnect,
            xDAI
          </Text>{' '}
          and <Text variant="semiBold">Yearn Finance</Text>. It’s this
          experience we draw from as we operationalize an ecosystem-wide
          flywheel driving public goods investment.
        </Text>
        <Text variant="indent">
          pgDAO is the machine that builds the machine behind the shared
          substrate of web3: public goods infrastructure{' '}
          <Text variant="semiBold">
            {' '}
            — Sign up to the mail list to get involved
          </Text>
          .
        </Text>
      </Container>
    </Box>
  )
}

export default Content
