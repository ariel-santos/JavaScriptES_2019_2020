// IMPORT DEFAULT 
import * as module from './dynamic-import.html';

// DYNAMIC IMPORT 
const file = './dynamic-import.html';
import(file).then(
    res => {
        res.methodName();
    }
)