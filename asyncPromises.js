const users = [{
id:1,
name:'srikanth',
schoolId:561
},
{
    id:2,
    name:'srilatha',
    schoolId:562
    }];

    const grades = [{
        id:1,
        schoolId:561,
        grade:100
    },{
        id:2,
        schoolId:562,
        grade:10
    },{
        id:3,
        schoolId:561,
        grade:90
    }];

    const getUser = (id) => {
return new Promise((resolve,reject) => {
    const user = users.find((user) => user.id === id);
    if(user){
resolve(user);
    }
    else{
        reject(`unable to fetch user with id of ${id}`);
    }
});
    };

    // getUser(1).then((user) => {
    //     console.log(user);
    // }).catch((e) => {
    //     console.log(e);
    // })

//------------------------------------------------------------------------------
 
const getGrades = (schoolId) => {
        return new Promise((resolve,reject) => {
            resolve(grades.filter((grade) => grade.schoolId === schoolId));
        });
            };
const getStatus = (userId) => {
    let user;
    return getUser(userId).then((tempuser) => {
        user = tempuser;
        return getGrades(user.schoolId);
    }).then((grades) => {
        let average = 0 ;

        if(grades.length > 0){
average = grades.map((grade) => grade.grade).reduce((a,b) => a + b)/grades.length;
        }
        return `${user.name} has a ${average}% in the class.`;
      
    })
}
            
//Async Await  functions

const getStatusAlt = async (userId) => {
  const user = await getUser(userId);
  const grades = await getGrades(user.schoolId);
  
  let average = 0 ;

        if(grades.length > 0){
average = grades.map((grade) => grade.grade).reduce((a,b) => a + b)/grades.length;
        }
        return `${user.name} has a ${average}% in the class.`;

};

getStatusAlt(2).then((status) => {
console.log(status);
}).catch((e) => {
    console.log(e);
});

    // getStatus(2).then((status) => {
    //     console.log(status);
    // }).catch((e) => {
    //     console.log(e);
    // })