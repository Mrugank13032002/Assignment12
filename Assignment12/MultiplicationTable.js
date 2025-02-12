function multiplicationTable(num) {
    let table = [];
    for (let i = 1; i <= 10; i++) {
        table.push(`${num} x ${i} = ${num * i}`);
    }
    return table;
}
