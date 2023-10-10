import Flex from '@shared/Flex'
import Spacing from '@shared/Spacing'
import Button from '@shared/Button'

import useGoogleSignin from '@hooks/useGoogleSignin'

function SigninPage() {
  const { signin } = useGoogleSignin()

  return (
    <Flex direction="column" align="center" style={{ padding: 24 }}>
      <Spacing size={100} />
      <img
        src="https://cdn2.iconfinder.com/data/icons/line-drawn-social-media/30/send-64.png"
        alt=""
        width={120}
        height={120}
      />
      <Spacing size={60} />
      <Button size="medium" onClick={signin}>
        <Flex align="center" justify="center">
          <img
            src="https://cdn3.iconfinder.com/data/icons/logos-brands-3/24/logo_brand_brands_logos_google-64.png"
            alt=""
            width={20}
            height={20}
          />
          <Spacing direction="horizontal" size={4} />
          Google 로그인
        </Flex>
      </Button>
    </Flex>
  )
}

export default SigninPage
