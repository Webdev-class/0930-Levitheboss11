const students = require('./students.json');

//Írj függvényt annak kiszűrésére, hogy a tanulók melyik emeleten laknak.
function f1(floor) {
   return students.filter(
    (st) => {
        return st.dormitoryFloor === floor
    }
   )
  }

    console.log(f1(2))
    function clubhozzadas() {
        let clubNames = [];
        let sum = 1;
        //Arra nem talaltam megoldast hogy azt hogyan kene hogy a tagjait is nezze esetleg majd abban segitsegek kernek(helyette csak egy basic sumot csinaltam)
        students.forEach((student) => {
            let clubName = student.club +" "+ sum++;
                    
            clubNames.push(clubName);
        });
    
        return clubNames; 
    }
    
    console.log(clubhozzadas());
    
    function dormitores(){
        let sum1 = 0;
        let sum2 = 0;
        students.forEach((students) =>{
            
            if (students.dormitoryFloor == false) {
                sum1++;
            }
            if (students.dormitoryPrice == undefined) {
                sum2++
            }
        })
        let kulonbseg = sum2-sum1
        return "Dormitory floor: "+sum1+" Dormitory price: "+sum2+" Különbség: "+kulonbseg;
    }
    console.log(dormitores())
    
    function mennyienlaknak2on(){
        return f1(2).length
    }
    console.log(mennyienlaknak2on())
    
    