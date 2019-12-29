// FLAT
console.log('===================== FLAT =====================');

const movies = [
    [ 'Van Helsing', 'Constantine', 'Dredd', ['Resident Evil', 'Resident Evil II'] ], // horror
    [ 'Sr. & Sra. Smith', 'Jumper', 'Prince of Persia: The Sands of Time', [ 'Harry Potter', 'Harry Potter II'] ], // fantasy
    [ 'Inception' ] // intelligent
]; 

console.log('movies', movies); 
// merge arrays 1 subnivel
console.log(movies.flat());
// merge arrays 2 subnivel
console.log(movies.flat(2));

//FLAT MAP 
console.log('===================== FLATMAP =====================');
const numbers = [7.8, 8.0, 6.2, 6.4];
// add round number after number in array
const numbersFlatMap = numbers.flatMap( number => [number, Math.round(number) ] );
console.log('numbersFlatMap', numbersFlatMap);