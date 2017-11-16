import React from 'react';
import {render} from 'react-dom';

import {I18nextProvider} from 'react-i18next';

import i18n from './i18n';
import './settings/settings';
import App from './Components/App/AppComponent';

// formspree form for contact
// <form action="https://formspree.io/sergiomarcusrgomes@hotmail.com" method="POST">
// <input type="hidden" name="_next" value="//site.io/thanks.html"/>
// <input type="hidden" name="_language" value="pt"/>
// <input type="hidden" name="_cc" value="fcgomes.92@gmail.com"/>
// <input type="hidden" name="_subject" value="New submission!"/>
// <input type="text" name="name" placeholder="Name"/>
// <input type="text" name="_gotcha" style={{
//   display: "none"
// }}/>
// <input type="email" name="_replyto" placeholder="Your Email"/>
// <textarea name="message" placeholder="Your message"></textarea>
// <input type="submit" value="Send"/>
// </form>

render(
    <I18nextProvider i18n={i18n}><App/></I18nextProvider>,
    document.getElementById('root'));
