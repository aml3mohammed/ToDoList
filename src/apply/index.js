import * as Runfunctions from './main';
import { get } from 'lodash';
import store from '../store/store'

// console.log(Runfunctions)
export const apply = (params, data={}, state=store.getState(), props={}) => {
    const main_data = get(state, params.path, data)
    let result = get(Runfunctions, params.key, d=>d)(params, main_data, state, {...props, apply: apply})
    if(params.then)
        return apply(params.then, result, state, props) 
    return result 
}