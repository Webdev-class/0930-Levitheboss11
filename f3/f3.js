const students = require('../students.json');
/* Írj függvényt ami megvizsgálja, hogy van-e eltérés a freeDormitory
 boolean és dormitoryPrice number-ek között 
 (Ha jól van feltöltve a lista a false értékek száma és a null-ok száma megegyezik.
  Ha nem akkor írja ki az eltérést) */
  const f3 = () => {
    let sum1 = 0;
    let sum2 = 0;
    students.forEach((student) => {
        if (student.freeDormitory === false) {
            sum1++;
        }
        if (student.dormitoryPrice === null) {
            sum2++;
        }
    });
    
    let kulonbseg = sum2 - sum1;
    return  kulonbseg;
           
           
  };
  console.log(f3());
  module.exports = f3;