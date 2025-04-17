const findTheOldest = function(people) {
    const getAge = (person) => {
      const deathYear = person.yearOfDeath || new Date().getFullYear();
      return deathYear - person.yearOfBirth;
    };
  
    return people.reduce((oldest, current) => {
      return getAge(current) > getAge(oldest) ? current : oldest;
    });
  };

// Do not edit below this line
module.exports = findTheOldest;
