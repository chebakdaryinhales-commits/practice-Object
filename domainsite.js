import getDomainInfo from './domain.js'

const info = { domain: 'https://yandex.ru', scheme: 'http' };
const result = getDomainInfo(info);

console.log(result)