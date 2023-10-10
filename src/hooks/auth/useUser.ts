import { useRecoilValue } from 'recoil'
import { userAtom } from '@store/atom/user'

function useUser() {
  return useRecoilValue(userAtom)
}

export default useUser
