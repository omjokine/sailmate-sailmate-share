import Image from 'next/image'
import Link from 'next/link'

const Page = () => {
  return (
    <div>
      <h1>Sinulle on jaettu veneilyreitti Sailmatessa</h1>
      <div>
        Olet tällä sivulla, koska sinulle on jaettu veneilyreitti sovelluksessa Nautics Sailmate. Paina alla olevasta
        napista avataksesi reitti Sailmate-sovelluksessa
      </div>
      <div>
        Eikö sinulla ole asennettuna Sailmate-sovellusta? Pääset katsomaan sinulle jaettua reittiä lataamalla
        sovelluksen ja kirjautumalla sisään Sailmate-tilillesi. Sailmate-sovelluksen lataaminen ja jaetun reitin
        katsominen on ilmaista. Lataa sovellus:
      </div>
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
      <h2>Minulla ei ole Sailmate-tiliä, haluan silti nähdä minulle jaetun reitin, miten toimin?</h2>
      <div>
        Pääset katsomaan sinulle jaettua reittiä lataamalla sovelluksen ja luomalla Sailmate-tilin. Tili luodaan
        sovelluksen ensimmäisellä käynnistyskerralla. Tilin luonti on täysin ilmaista ja kestää vain minuutin. Kun olet
        ladannut Sailmaten ja luonut Sailmate -tilin, paina uudelleen sinulle jaettua reittilinkkiä, niin reitti aukeaa
        Sailmate-sovelluksessa. Lue lisää Sailmaten käytöstä:
        <br />
        <Link href={'https://www.sailmate.com/kayttoohjeet'}>sailmate.com/kayttoohjeet</Link>
      </div>
    </div>
  )
}

export default Page
