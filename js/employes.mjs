async function main() {
    const json = await fetch('https://arfp.github.io/tp/web/javascript2/03-employees/employees.json').then(res => res.json())
    const tableau = json.data;

    console.table(tableau)

    const dataProcessing = {
        id: getId,
        full_name: getFullName,
        email: getEmail,
        income_monthly: getMonthlyIncome,
        year_of_birth: getBirthYear,
    };

    const newTab = [];

    for (const elem of tableau) {
        const obj = {};
        for (const key in dataProcessing) {
            obj[key] = dataProcessing[key](elem);
        }
        newTab.push(obj);
    }

    console.table(newTab);
}

await main();

function getId(obj) {
    return obj.id;
}

function getFullName(obj) {
    return obj['employee_name'];
}

function getEmail(obj) {
    const arr = obj['employee_name'].toLowerCase().split(' ');
    return arr[0][0] + '.' + arr[1] + '@gmail.com';
}

function getMonthlyIncome(obj) {
    return parseFloat((obj['employee_salary'] / 12).toFixed(2));
}

function getBirthYear(obj) {
    return 2026 - obj['employee_age'];
}