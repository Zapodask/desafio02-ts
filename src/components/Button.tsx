import { Button as ChakraButton } from '@chakra-ui/react'

interface IButtonProps {
  text: string
  onClick: () => void
}

export const Button = ({ text, onClick }: IButtonProps) => {
  return (
    <ChakraButton onClick={onClick} colorScheme='teal' size='sm' width='100%' marginTop='5px'>
      {text}
    </ChakraButton>
  )
}
