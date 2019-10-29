let columnNames = `
         <tr>
            <th>A</th>
            <th>B</th>
            <th>C</th>
            <th>D</th>
            <th>E</th>
        </tr>
    `;
let table = `
        <tr>
            <td><input type="text" class="col_a" value="1"></td>
            <td><input type="text" class="col_b" value="1"></td>
            <td><input type="text" class="col_c" value="1"></td>
            <td><input type="text" class="col_d" value="1"></td>
            <td><input type="text" class="col_e" value="1"></td>
        </tr>
    `;

document.getElementById("data").innerHTML = columnNames + table.repeat(9);
