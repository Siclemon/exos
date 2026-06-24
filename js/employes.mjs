async function main() {
    const json = await fetch('https://arfp.github.io/tp/web/javascript2/03-employees/employees.json').then(res => res.json())
    const tableau = json.data;

    console.table(tableau)

    const id = function (obj) {
        return obj.id;
    }
    const full_name = function (obj) {
        return obj['employee_name'];
    }
    const email = function (obj) {
        const arr = obj['employee_name'].toLowerCase().split(' ');
        return arr[0][0] + '.' + arr[1] + '@gmail.com';
    }
    const income_monthly = function (obj) {
        return parseFloat((obj['employee_salary'] / 12).toFixed(2));
    }
    const year_of_birth = function (obj) {
        return 2026 - obj['employee_age'];
    }

    const dataProcessing = {
        id,
        full_name,
        email,
        income_monthly,
        year_of_birth,
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

