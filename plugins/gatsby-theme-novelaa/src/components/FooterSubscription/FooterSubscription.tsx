import React from 'react';
import styled from '@emotion/styled';

interface FooterListProps {
  data: {
    title: string,
    links: { title: string, link: string }[],
  }[];
}

const FooterList: React.FC<FooterListProps> = ({data}) => {
  if (!data) return null;
  return (
    <>
      {data.map(option => {
        const name = option.title;
        const links = option.links;
        return (
          <FooterListContainer>
            <div className="footerListTitle">{name}</div>
            <ul>
              {links.map(item => <li><a href="{item.link}">{item.title}</a></li>)}
            </ul>
          
          </FooterListContainer>
        );
      })}
    </>
  );
};

export default FooterList;

const FooterListContainer = styled.div`
  .footerListTitle{
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 165%;
    letter-spacing: -.05em;
    color: #FFFFFF;
  }
  
  ul {
    list-style-type: none;
  }
  
  ul li a{
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 165.5%;
    letter-spacing: -.04em;
     color: #FFFFFF;
  }
`;
