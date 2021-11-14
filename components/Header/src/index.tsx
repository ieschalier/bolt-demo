interface Props {
  name: string
}

function Header({ name }: Props) {
  return <header>Hello {name}</header>
}

export default Header
