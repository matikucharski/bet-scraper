import { Meteor } from 'meteor/meteor';
import phantom from 'phantom';

export default async () => {
    // if the Links collection is empty

    let content;

    const instance = await phantom.create(['--ignore-ssl-errors=yes', '--load-images=no']);
    const page = await instance.createPage();
    page.on('onResourceRequested', function(requestData) {
        console.info('Requesting', requestData.url)
    });

    const status = await page.open(process.env.BID_URL);
    if (status !=='success' ) throw new Meteor.Error(status, 'Problem with opening source');

    return page;
    // await instance.exit();
};