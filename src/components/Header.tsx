import { FlexContainer } from './styles'

interface HelloWorldProps {
  foo?: string
}

const HelloWorld = ({}: HelloWorldProps) => {
  return <FlexContainer>Public Goods</FlexContainer>
}

export default HelloWorld
