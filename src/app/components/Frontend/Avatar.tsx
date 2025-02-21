import { AvatarCircles } from '@/components/ui/Avatar'
import React from 'react'

 const Avatar = () => {
  return (
    <div>
         <AvatarCircles
              avatarUrls={[
                {
                  imageUrl: "/avatar/pic1.avif",
                  profileUrl: "https://github.com/shrutisinghz",
                },
                {
                  imageUrl: "/avatar/pic2.avif",
                  profileUrl: "https://github.com/shrutisinghz",
                },
                {
                  imageUrl: "/avatar/pic3.avif",
                  profileUrl: "https://github.com/shrutisinghz",
                },
                {
                  imageUrl: "/avatar/pic4.avif",
                  profileUrl: "https://github.com/shrutisinghz",
                },
                {
                  imageUrl: "/avatar/pic5.avif",
                  profileUrl: "https://github.com/shrutisinghz",
                },
              ]}
            />
    </div>
  )
}
export default Avatar