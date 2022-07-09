let company = {
    names:`chicken and ribs`,
    yearly_revenue: 256890944,
    ceo: `ai`,
    number_of_employees: 9849,
    managers: [manager1 = {
        name: `tom`,
        salary: 333333,
        is_senior: true
    }, manager2 = {
        name: `sue`,
        salary: 222222,
        is_senior: false
    }, manager3 = {
        name: `jerry`,
        salary: 155555,
        is_senior: true
    }]
}

if (company[`yearly_revenue`] >= 1000000) {
    console.log(`name: ${company[`names`]}, ceo: ${company[`ceo`]}, number of employees: ${company[`number_of_employees`]}`);
} else {
    console.log(`try harder`);
}

let counter = 0;
while (counter < company[`managers`].length) {
    console.log(company[`managers`][counter]);
    counter++;
}

for (let counter = 0; counter < company[`managers`].length; counter++) {
    console.log(company[`managers`][counter]);
}

let counter2 = 0;
while (counter2 < company[`managers`].length) {
    if ((company[`managers`][counter2][`is_senior`])) {
    console.log(company[`managers`][counter2][`name`]);
    console.log(company[`managers`][counter2][`salary`]);
    
    console.log(`senior manager`);
    } else {
        console.log(company[`managers`][counter2][`name`]);
        console.log(company[`managers`][counter2][`salary`]);
        
    }
    counter2++;
}

for (counter2 = 0; counter2 < company[`managers`].length; counter2++ ) {
    if ((company[`managers`][counter2][`is_senior`])) {
        console.log(company[`managers`][counter2][`name`]);
        console.log(company[`managers`][counter2][`salary`]);
        
        console.log(`senior manager`);
        } else {
            console.log(company[`managers`][counter2][`name`]);
            console.log(company[`managers`][counter2][`salary`]);
            
        }
}