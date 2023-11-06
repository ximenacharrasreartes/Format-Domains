//type Accounts = 'tiendadexime1' | 'marca1' | 'marca2' | 'marca3'| 'marca4'

const formatDomainUrl = (): string => {
  const [subdomain, ...rest] = window?.location?.hostname?.split('.');

  const currEnv = (/^uat/).test(subdomain) ? "uat" : rest.includes('myvtex') ? 'myvtex' : 'prod';

  const currWorkspace = subdomain.indexOf("--") != -1 ? `${subdomain.split("--")[0]}--` : "";

  

  const domainDictionary = {
    "myvtex": `${currWorkspace}tiendadexime1`,
    "uat": "uattiendadexime1",
    "prod": "tiendadexime1"
  };

  const newSubdomain = domainDictionary[currEnv];

  return `https://${newSubdomain}.myvtex.com`;
}

export default formatDomainUrl;
