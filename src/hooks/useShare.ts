import { useCallback } from 'react'

// const share = useShare()

interface shareProps {
  title: string
  description: string
  imageUrl: string
  buttonLabel: string
}

function useShare() {
  const handleShare = useCallback(
    ({ title, description, imageUrl, buttonLabel }: shareProps) => {
      window.Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
          title,
          description,
          imageUrl,
          link: {
            mobileWebUrl: window.location.href,
            webUrl: window.location.href,
          },
        },
        buttons: [
          {
            title: buttonLabel,
            link: {
              mobileWebUrl: window.location.href,
              webUrl: window.location.href,
            },
          },
        ],
      })
    },
    [],
  )

  return handleShare
}

export default useShare
