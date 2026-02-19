import _ from 'lodash';

export default (getDomainInfo) => {
    const { domain, scheme } = getDomainInfo;
    let finalScheme = scheme;
    if (domain.startsWith('https://')) {
        finalScheme = 'https';
    } else if (domain.startsWith('http://')) {
        finalScheme = 'http';
    }
    const name = domain.replace(/^https?:\/\//, '');

    return { scheme: finalScheme, name };
};

