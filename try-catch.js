// try catch default
try {
    throw 'error';
} catch (error) {
    console.log(error);
}

try {
throw 'error';
// no need to create a variable for exception
} catch {
    console.log('error');
}
