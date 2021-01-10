const entrepreneurs = [
    { first: 'Steve', last: 'Jobs', year: 1955 },
    { first: 'Oprah', last: 'Winfrey', year: 1954 },
    { first: 'Bill', last: 'Gates', year: 1955 },
    { first: 'Sheryl', last: 'Sandberg', year: 1969 },
    { first: 'Mark', last: 'Zuckerberg', year: 1984 },
    { first: 'Beyonce', last: 'Knowles', year: 1981 },
    { first: 'Jeff', last: 'Bezos', year: 1964 },
    { first: 'Diane', last: 'Hendricks', year: 1947 },
    { first: 'Elon', last: 'Musk', year: 1971 },
    { first: 'Marissa', last: 'Mayer', year: 1975 },
    { first: 'Walt', last: 'Disney', year: 1901 },
    { first: 'Larry', last: 'Page', year: 1973 },
    { first: 'Jack', last: 'Dorsey', year: 1976 },
    { first: 'Evan', last: 'Spiegel', year: 1990 },
    { first: 'Brian', last: 'Chesky', year: 1981 },
    { first: 'Travis', last: 'Kalanick', year: 1976 },
    { first: 'Marc', last: 'Andreessen', year: 1971 },
    { first: 'Peter', last: 'Thiel', year: 1967 }
];

// Sors un array qui ne contient que le prénom & nom des entrepreneurs
const firstNameLastName = array => {
    const firstLast = array.map(user => ({ first: user.first, last: user.last }));
    console.log("Les prénoms et noms des entrepreneurs:");
    return firstLast
};
console.log(firstNameLastName(entrepreneurs));


//Pour chaque entrepreneur, remplace la date de naissance par l'âge de l'entrepreneur qu'il aurait aujourd'hui
const age = array => {
    const ageToday = array.map(user => ({
        first: user.first,
        last: user.last,
        age: new Date().getFullYear() - user.year
    }));
    console.log("Les entrepreneurs et leurs âges: ")
    return ageToday;
};
console.log(age(entrepreneurs));


//Les clés first et last manquent de lisibilité, remplace-les par firstName et lastName
const keys = array => {

    const keysChanged = array.map(user => ({
        firstName: user.first,
        lastName: user.last,
        year: user.year
    }));
    console.log("Les clefs first et last modifiées:")
    return keysChanged;
};
console.log(keys(entrepreneurs));


//Filtre dans cette liste les entrepreneurs qui sont nés dans les années 70
const seventy = array => {
    const arraySeventy = array.filter(user => 1969 < user.year && user.year < 1980);
    console.log("Les entrepreneurs nés dans les années 70:")
    return arraySeventy;
};
console.log(seventy(entrepreneurs));