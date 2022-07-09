let company = {
    names:`chicken and ribs`,
    yearly_revenue: 256890944,
    ceo: `ai`,
    number_of_employees: 9849
}

if (company[`yearly_revenue`] >= 1000000) {
    console.log(`name: ${company[`names`]}, ceo: ${company[`ceo`]}}, number of employees: ${company[`number_of_employees`]}`);
}