enum weekDays{
    Monday='monday',
    Tuesday='tuesday',
    Wendesday='wendesday',
    Thirsday='thirsday',
    Friday='friday',
    Saturday='saturday',
    Sunday='sunday',
}
for(let key in weekDays){
    console.log(weekDays[key as keyof typeof weekDays]);
}
