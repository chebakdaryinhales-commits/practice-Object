
import company from './compare.js';

const company1 = { name: 'Hexlet', state: 'moderating', website:
'https://hexlet.io' };
const company2 = { name: 'CodeBasics', state: 'published', website:
'https://code-basics.com' };

const result = company(company1, company2)

console.log(result)