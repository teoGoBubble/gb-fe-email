import {
    Container,
    Html,
    Img,
    Section,
    Text,
    Button,
    Row,
    Column,
    Head,
    Font,
  } from '@react-email/components';
  import * as React from 'react';
  import { mainWrapper, logoWrapper, mailContentWrapper, mailContent, headerText, subText, alertBox, alertHeader, alertMessage, alertButton, mainButton, footerText, footer, footerNote, footerAddress, icon } from './newEmail.styles';

  
  const Email = () => {
    return (
      <Html>
        <Head>
          <Font
            fontFamily='Roboto'
            fallbackFontFamily='Verdana'
            webFont={{
              url: 'https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2',
              format: 'woff2',
            }}
            fontWeight={400}
            fontStyle='normal'
          />
        </Head>
        <Container style={mainWrapper}>
          <Container style={logoWrapper}>
            <Img src='/static/gobubble-logo.png' alt='GoBubble' />
          </Container>
          <Section style={mailContentWrapper}>
            <Container style={mailContent}>
              <Text style={headerText}>
                [Client], we have detected and hidden a critical comment on your feed
              </Text>
              <Text style={subText}>
                Freedom2Hear has detected and automatically hidden a critical comment.
              </Text>
              <Container style={alertBox}>
                <Text style={alertHeader}>
                  <Img src='https://yourdomain.com/static/instagram-icon.png' alt='Instagram' style={icon} />
                  mancity
                </Text>
                <Text style={alertMessage}>
                  “[critical message]”
                </Text>
                <Button href='https://example.com' style={alertButton}>
                  Go to post
                </Button>
              </Container>
              <Text style={subText}>
                You can review or manage this critical content in your Moderation Hub
              </Text>
              <Button href='https://example.com' style={mainButton}>
                Go to alerts
              </Button>
              <Text style={footerText}>
                Thanks,<br />
                Freedom2Hear Team, GoBubble
              </Text>
            </Container>
          </Section>
          <Container style={footer}>
            <Row>
              <Column>
                <Button href='https://uk.linkedin.com/company/gobubble'>
                <Img src='/static/linkedIn.png' alt="LinkedIn" width="36" height="36"/>
                </Button>
              </Column>
              <Column>
                <Button href='https://x.com/gobubbleteam'>
                <Img src='/static/x.png' alt="Twitter" width="36" height="36" />
                </Button>
              </Column>
              <Column>
                <Button href='https://www.instagram.com/gobubbleteam/'>
                <Img src='/static/instagram.png' alt="Instagram" width="36" height="36"/>
                </Button>
              </Column>
              <Column>
                <Button href='https://www.facebook.com/mygobubble/'>
                <Img src='/static/facebook.png' alt="Facebook" width="36" height="36"/>
                </Button>
              </Column>
            </Row>
            <Text style={footerNote}>
              This is an automated email. If you have any questions feel free to contact us at <a href="mailto:care@gobubble.com">care@gobubble.com</a>.<br />
              If you no longer wish to receive critical alert notifications, you can <a href="https://example.com/unsubscribe">unsubscribe here</a>.
            </Text>
            <Text style={footerAddress}>
              Unit 208, Level 1, Gate Avenue - South Zone, DIFC, Dubai, United Arab Emirates
            </Text>
          </Container>
        </Container>
      </Html>
    );
  };
  
  
  export default Email;