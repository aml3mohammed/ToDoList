import uuid from 'uuid/v4';
import { map } from 'lodash';
import Gun from 'gun/gun';

const arr = new Array(5);
export const ids  = map(arr, (id) => {return uuid();} );


var gun = Gun();

const table = {

    "users": {

        [ids[0]]: {"title": "Aml", "id": ids[0], "display": true},

        [ids[1]]: {"title": "Aya", "id": ids[1], "display": true},
        
        [ids[2]]: {"title": "Mai", "id": ids[2], "display": true},
    
        [ids[3]]: {"title": "Bassant", "id": ids[3], "display": true},
    
        [ids[4]]: {"title": "Ghada", "id": ids[4], "display": true}
    },

    "tasks": {},

    "subTasks": {}

}

if(gun.get('data').get('users').once())
    gun.get('data').get('users').put(null)
export const data = gun.get('data').put(table)
// var data1
// if(!gun.get('data').get('users').once())
//     data1 = gun.get('data').put(table)
//     // gun.get('data').get('users').put(null)

// export const data = data1