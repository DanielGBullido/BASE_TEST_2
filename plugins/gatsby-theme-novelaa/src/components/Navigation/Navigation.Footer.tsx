import React from "react";
import styled from "@emotion/styled";
import {graphql, useStaticQuery} from "gatsby";

import Section from "@components/Section";
import SocialLinks from "@components/SocialLinks";
import FooterList from "@components/FooterList";
import FooterSubscription from "@components/FooterSubscription";

import mediaqueries from "@styles/media";

const siteQuery = graphql`
  {
    allSite {
      edges {
        node {
          siteMetadata {
            name
            social {
              url
              name
            }
          }
        }
      }
    }
    allMdx(
      sort: { fields: frontmatter___date, order: ASC }
      filter: { frontmatter: { date: { ne: null } } }
    ) {
      edges {
        node {
          frontmatter {
            date
          }
        }
      }
    }
  }
`;

const Footer: React.FC<{}> = () => {
  const results = useStaticQuery(siteQuery);
  const {name, social} = results.allSite.edges[0].node.siteMetadata;
  
  const dataList = [
    {
      title: 'Tracks',
      links: [
        {title: 'Sleep', link: ''},
        {title: 'Diet', link: ''},
        {title: 'Energy', link: ''},
        {title: 'Stress', link: ''},
        {title: 'SexDrive', link: ''},
        {title: 'BaseQuiz', link: ''},
      ]
    },
    {
      title: 'Base',
      links: [
        {title: 'Our Company', link: ''},
        {title: 'Science/Why Blood', link: ''},
        {title: 'Gift', link: ''},
        {title: 'Blog', link: ''},
      ]
    },
    {
      title: 'Help',
      links: [
        {title: 'Contact', link: ''},
        {title: 'Terms', link: ''},
        {title: 'Privacy Policy', link: ''},
      ]
    },
  ];
  
  const copyrightDate = (() => {
    const {edges} = results.allMdx;
    const years = [0, edges.length - 1].map((edge) =>
      new Date(edges[edge].node.frontmatter.date).getFullYear()
    );
    return years[0] === years[1] ? `${years[0]}` : `${years[0]}–${years[1]}`;
  })();
  
  return (
    <>
      <Section fullwidth css={{backgroundColor: '#000000'}}>
        <Section narrow>
          <FooterContainer>
            <FooterList data={dataList} />
            <FooterSubscription/>
          </FooterContainer>
          <FooterContainer>
            <FooterText>
              © {2021} Base
            </FooterText>
            <div>
              <SocialLinks links={social}/>
            </div>
          </FooterContainer>
        </Section>
      </Section>
    </>
  );
};

export default Footer;

const FooterContainer = styled.div`
  position: relative;
  display: flex;
  align-items: top;
  justify-content: space-between;
  padding-top: 3.71428571em;
  padding-bottom: 3.71428571em;
  color: ${p => p.theme.colors.grey};

  ${mediaqueries.tablet`
    flex-direction: column;
    padding-bottom: 100px;
  `}

  ${mediaqueries.phablet`
    padding-bottom: 50px;
  `}
`;

const HoritzontalRule = styled.div`
  position: relative;
  margin: 140px auto 50px;
  border-bottom: 1px solid ${p => p.theme.colors.horizontalRule};

  ${mediaqueries.tablet`
    margin: 60px auto;
  `}

  ${mediaqueries.phablet`
    display: none;
  `}
`;

const FooterText = styled.div`
    padding-top: 10px;
    padding-left: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 85.5%;
    letter-spacing: -.04em;
    color: #fff;
    font-size: 15px;
  ${mediaqueries.tablet`
    margin-bottom: 80px;
  `}

  ${mediaqueries.phablet`
    margin: 120px auto 100px;
  `}
`;
