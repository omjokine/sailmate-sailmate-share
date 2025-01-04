import Link from 'next/link'

export const Header = () => {
  return (
    <header>
      <div class="headerText">
        <Link passHref href={'https://www.sailmate.com'}>
          <img
            alt="Sailmate logo"
            src="https://static.wixstatic.com/media/0db8a3_c4a53157cf6d41d58fada8ea54c428ff~mv2.png/v1/fill/w_248,h_71,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/nauticssailmate_vaaka_sini.png"
          />
        </Link>
      </div>
      <img
        alt="Valkoinen aalto"
        src="https://static.wixstatic.com/media/0db8a3_44ba6074cb5041d0bff92115c58625fe~mv2.png/v1/crop/x_288,y_0,w_3182,h_293/fill/w_3111,h_287,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/Kevyt_White-Wave-PNG-Photos%20kopio.png"
      />
    </header>
  )
}
