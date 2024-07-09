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

  import { MailButton } from '../../components';
  import * as React from 'react';
  import { globalTheme } from '../globalTheme';
  import { mainWrapper, logoWrapper, mailContentWrapper, headerContent, headerText, subText, alertBox, alertHeader, alertMessage, alertButton, mainButton, footerText, footer, footerNote, footerAddress, Spacer, icon, marginReset } from './layout.styles';

  const {fonts} = globalTheme
  
  const Layout = () => {
    return (
      <Html>
        <Head>
          <Font
            fontFamily={fonts.family.website}
            fallbackFontFamily='sans-serif'
            webFont={{
                url: 'https://fonts.gstatic.com/s/dmsans/v8/rP2Hp2ywxg089UriCZOIHTWEBlw.woff2',
                format: 'woff2',
            }}
            fontWeight={400}
          />
        </Head>
        <Container style={mainWrapper}>
          <Container style={logoWrapper}>
            <Img src='/static/gobubble-logo.png' alt='GoBubble' />
          </Container>
          <Section style={mailContentWrapper}>
            <Container style={headerContent}>
              <Text style={headerText}>
                 [Client], we have detected and hidden repeated content on one of your posts
              </Text>
              <Text style={subText}>
                 Freedom2Hear has detected and automatically hidden a word or phrase that has been repeated 3 or more times in the last 30 minute.
              </Text>
              <Container style={alertBox}>
                <Row>
                    <Column align='left'>
                        <Img src='https://yourdomain.com/static/instagram-icon.png' alt='Instagram' style={icon} />
                    </Column>
                    <Column align='right'>                    
                        <Text style={marginReset}>
                        {/* TODO: Replace with timestamp received from BE*/}
                        {new Date().toLocaleDateString('en-EN', {
                            day: '2-digit',
                            hour: '2-digit',
                            minute: '2-digit'
                        })}
                        </Text>
                    </Column>
                </Row>
                <Text style={alertMessage}>
                  “[critical message]”
                </Text>
                    <MailButton style='secondary' />
              </Container>
              {/* <Text style={subText}>
                You can review or manage this critical content in your Moderation Hub
              </Text>
              <Button href='https://example.com' style={mainButton}>
                Go to alerts
              </Button>
              <Text style={footerText}>
                Thanks,<br />
                Freedom2Hear Team, GoBubble
              </Text> */}
            </Container>
          </Section>
          {/* <Container style={footer}>
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
          </Container> */}
        </Container>
      </Html>
    );
  };
  
  
  export default Layout;