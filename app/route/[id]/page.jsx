import Image from 'next/image'
import Link from 'next/link'

const Page = () => {
  return (
    <div>
      Lataa Sailmate
      <Link passHref href={'https://play.google.com/store/apps/details?id=fi.nautics.hybridsailmate'}>
        <Image alt="Google Play icon" src="/images/en_badge_web_generic.png" width="200" height="200" />
      </Link>
      <Link passHref href={'https://apps.apple.com/fi/app/nautics-sailmate/id1536945201'}>
        <Image
          alt="Google Play icon"
          src="/images/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
          width="200"
          height="200"
        />
      </Link>
    </div>
  )
}

export default Page
