import { Button, Html, Img} from '@react-email/components';

import * as React from 'react';
import {
	mainWrapper,
	logoWrapper,
	mailContentWrapper,
	mailContent,
	contentElement,
} from './styles';

// import gobubbleLogo from '../static/gobubble-logo.png'


const Email = () => {
	return (
		<Html>
			<div id="mainWrapper" style={mainWrapper}>
				<div id="logoWrapper" style={logoWrapper}>
					<Img src='../static/gobubble-logo.png' alt="gobubble logo" width={300} height={20}/>
				</div>
				<div id="mailContentWrapper" style={mailContentWrapper}>
					<div id="mailContent" style={mailContent}>
						<div id="contentElement" style={contentElement}></div>
						<div id="contentElement" style={contentElement}></div>
						<div id="contentElement" style={contentElement}></div>
					</div>
				</div>
				<div
					id="footer"
					style={{ ...contentElement, background: '#fff' }}
				></div>
				{/* <Button
					href="https://example.com"
					style={{ background: '#000', color: '#fff', padding: '12px 20px' }}
				>
					Click me
				</Button> */}
			</div>
		</Html>
	);
};

export default Email;
