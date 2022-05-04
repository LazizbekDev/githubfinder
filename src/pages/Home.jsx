import { useContext } from 'react'
import Bildirgi from '../components/layout/Alert'
import UserResults from '../components/users/UserResults'
import UserSearch from '../components/users/UserSearch'
import AlertContext from '../context/AlertContext'
const Home = () => {
  const { alert } = useContext(AlertContext)
  return (
    <>
      {alert && (
        <Bildirgi type={alert.type} msg={alert.msg} />
      )}
      <UserSearch />
      <UserResults />
    </>
  )
}

export default Home