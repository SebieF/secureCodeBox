const uuid = require('uuid/v4');

async function parse(fileContent) {
  return fileContent
    .split('\n')
    .filter(Boolean)
    .map(domainJson => {
      console.log(domainJson);
      const domain = JSON.parse(domainJson);
      return {
        id: uuid(),
        name: domain.name,
        description: `Found subdomain ${domain.name}`,
        category: 'Subdomain',
        location: domain.name,
        osi_layer: 'NETWORK',
        severity: 'INFORMATIONAL',
        attributes: {
          tag: domain.tag,
          name: domain.name,
          source: domain.source,
          domain: domain.domain,
          addresses: domain.addresses,
        },
      };
    });
}

module.exports.parse = parse;
