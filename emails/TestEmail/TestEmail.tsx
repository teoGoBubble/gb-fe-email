import {
  Row,
  Column,
  Button,
  Container,
  Html,
  Img,
  Section,
} from '@react-email/components';

import { ResponsiveRow, ResponsiveColumn } from '@responsive-email/react-email';
import * as React from 'react';
import {
  typography,
  title,
  mainWrapper,
  logoWrapper,
  mailContentWrapper,
  mailContent,
  contentContainer,
  contentElement,
} from './styles';

const Email = () => {
  return (
    <Html>
      <div style={{ ...mainWrapper, ...typography, maxWidth: '600px' }}>
        <Container style={logoWrapper}>
          <Img src='/static/gobubble-logo.png' alt='gobubble logo' />
        </Container>
        <Section style={mailContentWrapper}>
          <Container style={mailContent}>
            {/* <ResponsiveRow> */}
              {/* <ResponsiveColumn span={6}> */}
                <Container style={{...contentElement, ...title}}>
                [Client], we have detected and hidden repeated content on one of your posts
                </Container>
                <Container>
                Freedom2Hear has detected and automatically hidden a word or phrase that has been repeated [repetitions] or more times in the last [interval] minutes.
                </Container>
              {/* </ResponsiveColumn> */}
              <Container style={contentContainer}>
                <Container style={contentElement}>
                  Alert Content Here
                </Container>
                <Container style={contentElement}></Container>
              </Container>
            {/* </ResponsiveRow> */}
          </Container>
          <Container>
              <Button
              href='https://example.com'
              style={{ background: '#000', color: '#fff', padding: '12px 20px' }}
            >
              Click me
            </Button>
          </Container>
        </Section>
        <Container style={{ ...contentElement }}>
          <Container>
            <Section>
              <Row>
                <Column style={{ paddingLeft: '9vw', paddingRight: '1vw'}}>
                  <Button href='https://uk.linkedin.com/company/gobubble'>
                    <Img src='/static/linkedIn.png' alt="LinkedIn" width="36" height="36"/>
                  </Button>
                </Column>
                <Column style={{paddingRight: '1vw'}}>
                  <Button href='https://x.com/gobubbleteam'>
                    <Img src='/static/x.png' alt="Twitter" width="36" height="36" />
                  </Button>
                </Column>
                <Column style={{paddingRight: '1vw'}}>
                  <Button href='https://www.instagram.com/gobubbleteam/'>
                    <Img src='/static/instagram.png' alt="Instagram" width="36" height="36"/>
                  </Button>
                </Column>
                <Column style={{ paddingRight: '9vw'}}>
                  <Button href='https://www.facebook.com/mygobubble/'>
                    <Img src='/static/facebook.png' alt="Facebook" width="36" height="36"/>
                  </Button>
                </Column >
              </Row>
            </Section>
          </Container>
        </Container>
      </div>
    </Html>
  );
};

export default Email;