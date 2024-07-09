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
import { alertButton } from './MailButton.styled';


const link = 'https://example.com';


export const MailButton = ({style: string}) => {

    // TODO conditionally render primary or econdary button depending on props

    return (
        <Button href={link} style={alertButton}>
        <Row>
            <Column>
                Go to post
            </Column>
            <Column style={{ width: '10px' }}></Column>
            <Column >
                <Img src='/static/share-box-line.png' alt='Go to website image' />
            </Column>
        </Row>
        </Button>
    )
}