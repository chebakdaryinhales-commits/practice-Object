import _ from 'lodash';

export default (company) => {
    const {company1, company2} = company
    if (!company1 || !company2){
        console.warn('какая-то херня')
        return false;
    }
    return _.isEqual(company1, company2)
    
    }