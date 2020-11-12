function addEmployee() {
    let deptChoices = [];
    let query = "SELECT department_name FROM departments;"
    connection.query(query, function (err, res) {
        for (let index = 0; index < res.length; index++) {
            deptChoices.push(array[index]);
        }
        return console.log(deptChoices);
    })

    inquirer
        .prompt({
            name: "department",
            type: "list",
            message: "Choose a department or create a new department",
            choices: deptChoices
        }).then(function (answer) {
            console.log(answer);
            runSearch();
        });
}