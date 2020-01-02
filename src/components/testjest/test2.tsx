import * as _ from 'lodash';

const filterArray = (theArr: string[], filterString: string) =>{
    const farr = _.filter(theArr, (i)=>i.includes(filterString));
    if (farr.length > 0){
        return farr[0];
    }
    return '';
}

export default filterArray;