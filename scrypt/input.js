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
            <td><input type="number" class="col_a" value="100"></td>
            <td><input type="number" class="col_b" value="40"></td>
            <td><input type="number" class="col_c" value="123"></td>
            <td><input type="number" class="col_d" value="3"></td>
            <td><input type="number" class="col_e" value="4"></td>
        </tr>
    `;

document.getElementById("data").innerHTML = columnNames + table.repeat(9);
