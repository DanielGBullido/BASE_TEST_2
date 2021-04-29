import React from 'react';

interface FooterProps {
  links: {
    name: string;
    url: string;
  }[];
  fill: string;
}

const Footer: React.FC<FooterProps> = ({}) => {
  
  return (
    <footer className="text-center-xs space--xs bg-black">
      <div className="container">
        <div className="row footer-first-row">
          <div className="d-block d-sm-none col-1"/>
          <div className="col-md-2 col-sm-4 col-xl-2 col-5">
            <div className="row color--white base-30">Tracks</div>
          </div>
          <div className="col-md-2 col-sm-4 col-xl-2 col-5">
            <div className="row color--white base-30">Base</div>
          </div>
          <div className="d-block d-sm-none col-1"/>
          <div className="col-md-2 col-sm-4 col-xl-2 d-none d-sm-block">
          
          </div>
          <div className="col-md-1 col-0 col-xl-2"/>
          <div className="col-md-4 col-lg-4">
            <div className="row color--white base-30 pb-3 pl-4 pl-sm-0">We send really nice emails</div>
            <div className="row" id="mc_embed_signup">
            </div>
            <div className="row mt30 float-md-right color--white base-18-bullets">
              <span className="pr25 pl-xs-1 pl-4 pl-sm-0">Follow us</span>
              <ul className="social-list list-inline list--hover color--white">
                <li><a href="https://www.facebook.com/trackyourbase/" target="_blank">
                  <img className="image--xxs" src="img/facebook_white.svg"/></a>
                </li>
                <li><a href="https://www.instagram.com/get_base/" target="_blank">
                  <img className="image--xxs" src="img/instagram_white.svg"/></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row footer-bottom pt-5">
          <div className="col-sm-12">
            <div className="row color--white">
              <img className="image--xxs pl-xs-1 pl-4 pl-sm-0" src="img/logo_white.svg"/>
              <span className="type--fine-print color--white">© <span className="update-year color--white">2020</span> Base</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
  
};
export default Footer;
