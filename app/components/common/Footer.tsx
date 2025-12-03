import React from 'react'
import FooterText from './Footer/footer-text'
import SubscribeBox from './Footer/subscribe'
import FooterRightSection from './Footer/footer-right'
import Copyright from './Footer/copyright'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className="footer-wrapper relative bg-black ">
      <div className="container mx-auto">
        <div className="grid grid-cols-12 items-center pt-10 pb-8">
          <div className="col-span-5  pe-10 pt-6 p-4  border-e border-white/30">
            <FooterText />
            <SubscribeBox />
          </div>
          <div className="col-span-7 p-4">
            <FooterRightSection />
          </div>
        </div>
        <Copyright />
        <div className="vibes-footer-logo">
          <Image
            src={"/assests/img/home/footer_vibes_icon.png"}
            alt=''
            width={100}
            height={100}
          />
        </div>
      </div>
    </div>
  )
}
export default Footer
