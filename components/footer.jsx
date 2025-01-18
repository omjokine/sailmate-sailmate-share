import Image from 'next/image'
import Link from 'next/link'

export const Footer = () => {
  return (
    <footer>
      <Image alt="Avainlippu" src="/images/avainlippu.avif" width="87" height="81" className="avainlippu" />
      <div className="companyDescription">
        Nautics Sailmate on kotimainen veneilysovellus, joka käyttää karttapohjana Traficomin merikorttia. Sailmatella
        on yli 100 000 rekisteröitynyttä käyttäjää ja yli 15 vuoden historia suomalaisten veneilijöiden
        luottokumppanina. Nautics Sailmate on kotimainen avainlipputuote. Lue lisää osoitteessa&nbsp;
        <Link href={'https://www.sailmate.com/tutustu'}>www.sailmate.com/tutustu</Link>
      </div>
    </footer>
  )
}
