// Methods related to links

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import oddsPortal from '../oddsPortalInit';
const oddsPortalPromise = oddsPortal();

import cheerio from 'cheerio';

Meteor.methods({
    async 'links.insert'(phrase) {
        check(phrase, String);

        let $;
        const oddsPortalPage = await oddsPortalPromise;

        content = await oddsPortalPage.property('content');
        $ = cheerio.load(content);
        console.log('%c MATIdebug: ', 'background: #222; color: #bada55', $('th.first2.tl').length);
        return content;//$('th.first2.tl');
        // console.log(content);

    },
});
