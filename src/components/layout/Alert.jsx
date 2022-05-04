import { Alert } from "react-daisyui"

const Bildirgi = ({msg, type}) => {
  return (
    <Alert status={type}>{msg}</Alert>
  )
}

export default Bildirgi