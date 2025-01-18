import Image from 'next/image'
import Link from 'next/link'

const Page = () => {
  return (
    <div>
      <h1>Sinulle on jaettu veneilyreitti Sailmate-sovelluksessa</h1>
      <div className="paragraph">
        Eikö sinulla ole Nautics Sailmate-sovellusta? Pääset katsomaan jaetun reitin lataamalla sovelluksen ja
        kirjautumalla Sailmate-tilillesi. Jos sinulla ei ole Sailmate-tiliä, teemme sinulle sellaisen.
      </div>
      <div className="paragraph">
        Lue lisää Sailmaten käytöstä:
        <br />
        <Link href={'https://www.sailmate.com/kayttoohjeet'}>www.sailmate.com/kayttoohjeet</Link>
      </div>
      <h2>Lataa sovellus</h2>
      <Link passHref href={'https://play.google.com/store/apps/details?id=fi.nautics.hybridsailmate'}>
        <Image alt="Google Play icon" src="/images/en_badge_web_generic.png" width="200" height="200" />
      </Link>
      <Link passHref href={'https://apps.apple.com/fi/app/nautics-sailmate/id1536945201'}>
        <Image
          alt="App Store Badge"
          src="/images/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
          width="160"
          height="160"
        />
      </Link>
    </div>
  )
}

export default Page
