function minValColumnInGroups(groups, col) {
    groups.forEach(group => {
        let max = Number.MAX_SAFE_INTEGER;
        group.forEach(row => {
            if (row[col] < max) {
                max = row[col];
            }
        });
        group[0][col] = max;
    });
}