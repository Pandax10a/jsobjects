let company = {
    names:`chicken and ribs`,
    yearly_revenue: 256890944,
    ceo: `ai`,
    number_of_employees: 9849,
    managers: [manager1 = {
        name: `tom`,
        salry: 333333,
        is_senior: true
    }, manager1 = {
        name: `sue`,
        salry: 222222,
        is_senior: false
    }, manager1 = {
        name: `jerry`,
        salry: 155555,
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