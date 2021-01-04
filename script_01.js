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

//Name
const name = array => {
    const a = []
    array.map(user => {
        const tmp = {}
        tmp["first"] = user.first
        tmp["last"] = user.last
        a.push(tmp)
    });
    console.log("Les prénoms et noms des entrepreneurs:");
    return a
};
console.log(name(entrepreneurs));


//Age
const age = array => {
    const arrayAge = []
    array.map(user => {
        const tmp = {}
        tmp["first"] = user.first
        tmp["last"] = user.last
        tmp["age"] = new Date().getFullYear() - user.year
        arrayAge.push(tmp)
    });
    console.log("Les entrepreneurs et leurs âges: ")
    return arrayAge;
};
console.log(age(entrepreneurs));


//Change Keys
const keys = array => {
    const arrayKeys = []
    array.map(user => {
        const tmp = {}
        tmp["firstName"] = user.first
        tmp["lastName"] = user.last
        tmp["year"] = user.year
        arrayKeys.push(tmp)
    });
    console.log("Les clefs first et last modifiées:")
    return arrayKeys;
};
console.log(keys(entrepreneurs));


//Filter
const seventy = array => {
    const arraySeventy = array.filter(user => 1969 < user.year && user.year < 1980);
    console.log("Les entrepreneurs nés dans les années 70:")
    return arraySeventy;
};
console.log(seventy(entrepreneurs));