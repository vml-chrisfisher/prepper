const axios = require('axios');

module.exports.addToNewsletter = (event, context, callback) => {
  console.log(context)
  const regionName = 'us18'
  const apiKey = 'c417709f577d01af5080ed850037afcb'
  const listId = 'c098a83acd'
  const url = `https://${regionName}.api.mailchimp.com/3.0/lists/${listId}/members/`;
  const { email } = context;
  axios
    .post(
      url,
      {
        // Tell Mailchimp to subscribe this email
        status: 'subscribed',
        // Note that Mailchimp takes an email_address field, not just email
        email_address: email,
      },
      {
        headers: {
          Authorization: `apikey ${apiKey}`,
        },
      }
    )
    .then(() => {
      // Things went well
      callback(null, { message: 'Email subscribed!' })
    })
    .catch(error => {
      // Things didn't go well
      callback(error.response.data)
    })
};