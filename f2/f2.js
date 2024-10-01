const students = require('../students.json');
/* Írj függvényt ami feltölt egy objektumot (lehetőleg üres {}-ről induljon) 
a klubbok nevével és tagjainak számával. (pl. {"club1": 4, "club2": 3....}) */
function f2() {
    let clubs = {};

    students.forEach((student) => {
        let clubName = student.club;
        if (clubs[clubName]) {
            clubs[clubName]++;
        } else {
            clubs[clubName] = 1;
        }
    });

    return clubs; 
}

module.exports = f2;