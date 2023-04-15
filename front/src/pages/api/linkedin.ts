import axios from 'axios';

const companyId = '863h1vtr688r6r';
const accessToken = 'FSveN8QecLLsX0Yq';

const companyEndpoint = `https://api.linkedin.com/v2/companies/${companyId}?projection=(id,name,logoV2,description)`;
const postsEndpoint = `https://api.linkedin.com/v2/shares?q=owners&owners=urn:li:organization:${companyId}&count=10&sort=RECENT`;

export default async function handler(req, res) {
  const companyOptions = {
    url: companyEndpoint,
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'cache-control': 'no-cache',
      'X-Restli-Protocol-Version': '2.0.0'
    }
  };

  const postsOptions = {
    url: postsEndpoint,
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'cache-control': 'no-cache',
      'X-Restli-Protocol-Version': '2.0.0'
    }
  };

  try {
    const [companyData, postsData] = await Promise.all([
      axios.get(companyEndpoint, companyOptions),
      axios.get(postsEndpoint, postsOptions)
    ]);

    // Use companyData and postsData as required
    // ...

    res.status(200).json({ companyData, postsData });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve LinkedIn data' });
  }
}
