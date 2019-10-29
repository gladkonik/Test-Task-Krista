function sumColumnInGroups(groups, col) {
    groups.forEach(group => {
        let sum = 0;
        group.forEach(row => {
            sum += row[col];
        });
        group[0][col] = sum;
    });
}