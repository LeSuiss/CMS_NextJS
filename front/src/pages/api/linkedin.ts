import axios from 'axios';

const companyId = '863h1vtr688r6r';

const companyEndpoint = `https://api.linkedin.com/v2/companies/${companyId}?projection=(id,name,logoV2,description)`;
const postsEndpoint = `https://api.linkedin.com/v2/shares?q=owners&owners=urn:li:organization:${companyId}&count=10&sort=RECENT`;

export default async function handler(req, res) {
  const accessToken =
    'AQUayLnanRy1Pr0Bh3GUKTYK8JBrvpmLUw4hCO0EK9R-Au4l3HosFvzmTOrPv_vh6TICDXs-1U-JFIUg-eZl-w2PnsPR07HGL-MLtO0FfvYMkZH1t4NktFJG3IPmSmLu1_p9A_-iHLwQoQUsNj4mSHJDY2AhHyj-Q1B7IjnmbyFFRV29j_qBhvWdHFli9XvYAjfGXv85q46GDL7fHAMMVXpNokLf6bjvX1ieMyXhsO6zghTLNqHyv9nd_7Qk01MDlT-CujuRI5oT0ZBkQnfHA2cEWC5j4iDWKzIQoqccJyYl0promfDDyFBdts2QjjDHLssYyUacKQtAY2EuBhIZBPIeCNoUog';
  const companyOptions = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'cache-control': 'no-cache',
      'X-Restli-Protocol-Version': '2.0.0',
    },
  };

  const postsOptions = {
    url: postsEndpoint,
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'cache-control': 'no-cache',
      'X-Restli-Protocol-Version': '2.0.0',
    },
  };

  try {
    const toto = await axios.get(companyEndpoint, companyOptions);
    console.log('toto', toto);
    const tota = await axios.get(postsEndpoint, postsOptions);
    console.log('tota', tota);
    // Use companyData and postsData as required
    // ...

    return res.status(200).json({ toto, tota });
  } catch (error) {
    console.error(error.data);
    res.status(500).json({ error: 'Failed to retrieve LinkedIn data' });
  }
}
