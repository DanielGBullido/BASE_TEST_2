import React from 'react';
import styled from '@emotion/styled';
import Icons from '@icons';

const FooterSubscription: React.FC = ({data}) => {
  const Icon = Icons.Mailto;
  return (
    <FooterSubscriptionContainer>
      <div className="title">We send really nice emails</div>
      <div className="form">
        <form
          action="https://moxhealth.us4.list-manage.com/subscribe/post?u=502e504c3a4726548374ba48d&amp;id=4bb11b6340"
          method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" target="_blank"
          noValidate>
          <div id="mc_embed_signup_scroll" className="form-group mr10 base-email-form-group">
            <input type="email" name="EMAIL"
                   className="form-control email-subscribe email email-input-footer color--white base-24-tag text-left"
                   id="mce-EMAIL" placeholder="email address" required/>
            <div className="clear">
              <button value="Submit" name="subscribe" id="mc-embedded-subscribe"
                      type="submit" className="btn">
                <Icon fill={'#FFFFFF'} />
              </button>
            </div>
          </div>
        </form>
      </div>
    </FooterSubscriptionContainer>
  );
};

export default FooterSubscription;

const FooterSubscriptionContainer = styled.div`
  .title{
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 165%;
    letter-spacing: -.05em;
    color: #fff;
  }
  
  .form{
    position:relative
  }
  
  .form input{
    background: #000;
    color: #fff;
    padding-left: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    border: 0 solid #fff;
    margin-right: 0;
    border-radius: 0;
    margin-top: 7px;
    min-height: 55px;
    min-width: 300px;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 165%;
    letter-spacing: -.05em;
    border: 1px solid #fff;
    padding-right: 0;
  }
  .form .clear{
    position: absolute;
    top: 24px;
    right: 15px;
  }
  
  .form svg{
    width: 30px !important;
    height: auto;
  }
`;
