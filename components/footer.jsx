import Link from 'next/link'

export const Footer = () => {
  return (
    <footer>
      Nautics Sailmate on kotimainen veneilysovellus, joka käyttää karttapohjana Traficomin merikarttaa. Sailmatella on
      yli 150 000 rekisteröitynyttä käyttäjää ja yli 10 vuoden historia suomalaisten veneilijöiden luottokumppanina.
      Nautics Sailmate on kotimainen avainlipputuote. Lue lisää osoitteessa&nbsp;
      <Link href={'https://www.sailmate.com/tutustu'}>sailmate.com/tutustu</Link>
    </footer>
  )
}
