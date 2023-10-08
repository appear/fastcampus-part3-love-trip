import { useEffect } from 'react'

declare global {
  interface Window {
    Kakao: any
  }
}

function useLoadKakao() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://t1.kakaocdn.net/kakao_js_sdk/2.4.0/kakao.min.js'
    script.async = true

    document.head.appendChild(script)

    script.onload = () => {
      if (!window.Kakao.isInitialized()) {
        window.Kakao.init(process.env.REACT_APP_KAKAO_API_KEY)
      }
    }
  })
}

export default useLoadKakao
