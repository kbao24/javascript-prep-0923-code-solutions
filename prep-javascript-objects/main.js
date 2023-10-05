const person = {
  firstName: 'Kevin',
  lastName: 'Bao',
  hobby: 'Reading',
};

console.log(person);

const fullName = person.firstName + ' ' + person.lastName;
console.log("This person's full name is", fullName);

person.job = 'Jerk';

console.log("This person's current job is:", person.job);

person['previousJob'] = 'amigo';

console.log("This person's previous job is:", person['previousJob']);

console.log(person);
