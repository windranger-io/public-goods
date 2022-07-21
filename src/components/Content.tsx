import { Box, Grid, Input, Link, Text, Button } from '@chakra-ui/react'

const Content = () => {
  return (
    <Box
      mx="16px"
      mt={{ base: '80px', md: '34px' }}
      mb={{ base: '80px', md: '115px' }}
    >
      <Grid
        maxWidth="663px"
        templateRows="3"
        gridGap={'40px'}
        textAlign="justify"
        margin="0 auto"
      >
        {/* Start Body copy */}
        <Text variant="indent">
          pgDAO is an impact investment DAO,{' '}
          <Text as="span" variant="italic">
            proposed by
          </Text>
          &nbsp;
          <Text as="span" variant="semiBold">
            Gitcoin
          </Text>
          &nbsp;and{' '}
          <Text as="span" variant="semiBold">
            BitDAO
          </Text>
          , focused on accelerating the web3 public goods ecosystem. It builds
          on the idea of{' '}
          <Text as="span" variant="italic">
            impact = profit
          </Text>{' '}
          put forward by{' '}
          <Text as="span" variant="semiBold">
            Optimism
          </Text>{' '}
          — leveraging crypto-native capital deployment mechanisms to produce
          and invest in the next generation of web3 infrastructure.
        </Text>
        <Text variant="indent">
          Our unique value proposition comes from years of building out
          mechanisms and tools that have helped sustain some of the largest,
          most impactful names in the space including{' '}
          <Text as="span" variant="semiBold">
            Dune Analytics, Plasma Group (now Optimism), Uniswap, WalletConnect,
            xDAI
          </Text>{' '}
          and{' '}
          <Text as="span" variant="semiBold">
            Yearn Finance
          </Text>
          . It’s this experience we draw from as we operationalize an
          ecosystem-wide flywheel driving public goods investment.
        </Text>
        <Text variant="indent">
          pgDAO is the machine that builds the machine behind the shared
          substrate of web3: public goods infrastructure{' '}
          <Text as="span" variant="semiBold">
            {' '}
            — Sign up to the mail list to get involved
          </Text>
          .
        </Text>
        {/* End Body copy */}
        <SignUp />
        {/* Start Connect */}
        <Box>
          <Text textAlign={'left'}>
            Follow us on&nbsp;
            <Link borderBottom="1px solid">
              <Text as="span" variant="semiBold">
                Twitter
              </Text>
            </Link>{' '}
            for the latest updates or get in touch via&nbsp;
            <Link>
              <Text as="span" variant="semiBold">
                mail.
              </Text>
            </Link>
          </Text>
        </Box>
        {/* End Connect */}
      </Grid>
    </Box>
  )
}

export default Content

const SignUp = () => {
  return (
    <form
      action="https://www.getrevue.co/profile/pgDAO/add_subscriber"
      method="post"
      id="revue-form"
      name="revue-form"
      target="_blank"
    >
      {/* <input placeholder="Your email address..." type="email" name="member[email]" id="member_email"></input>
      <input type="submit" value="Subscribe" name="member[subscribe]" id="member_submit"></input> */}
      <Box display="flex">
        <Input
          variant="unstyled"
          placeholder="Type your email address..."
          type="email"
          name="member[email]"
          id="member_email"
        />
        <Button
          variant="submit"
          type="submit"
          value="Sign up"
          name="member[subscribe]"
          id="member_submit"
        >
          Sign up
        </Button>
      </Box>
      <Separator />
      <Text
        variant="inter"
        fontSize={'12px'}
        textTransform="uppercase"
        textAlign={'center'}
        letterSpacing="0.01em"
        mt="15px"
      >
        By subscribing, you agree with Revue&apos;s Terms of Service and Privacy
        Policy.
      </Text>
    </form>
  )
}

const Separator = () => {
  return (
    <Box
      display="flex"
      width="100%"
      justifyContent={'space-between'}
      alignItems="center"
    >
      <Box
        width="5px"
        height="5px"
        bg="#225350"
        transform="rotate(45deg)"
        ml="-3px"
      />
      <Box height="1px" width={'100%'} background="#225350" />
      <Box
        width="5px"
        height="5px"
        bg="#225350"
        transform="rotate(45deg)"
        mr="-3px"
      />
    </Box>
  )
}
