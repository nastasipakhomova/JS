//1*
let age_2 = 18
let age_3 = 60
function show(age_1) {
    if (age_1 < age_2) {
        console.log("You don't have access cause your age is " + age_1 + " It's less then")
    }
    else if (age_1 >= age_2 && age_1 < age_3) {
        console.log("Welcome!")
    }
    else if (age_1 > age_3) {
        console.log("Keep calm and look Culture channel")
        }
    else {
        console.log("Technical work")
    }
}
show(25)

//2*
function fun_2(age_1) {
    if (typeof age_1 != 'number') {
        // throw 'Error'
        console.log('Error')
    }
    else {
        if (age_1 < age_2) {
        console.log("You don't have access cause your age is " + age_1 + " It's less then")
        }
        else if (age_1 >= age_2 && age_1 < age_3) {
        console.log("Welcome!")
        }
        else if (age_1 > age_3) {
        console.log("Keep calm and look Culture channel")
        }
        else {
        console.log("Technical work")
    } }
}
fun_2("dsgsa")
