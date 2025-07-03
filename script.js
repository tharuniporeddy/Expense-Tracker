let form = document.getElementById("transaction-form");
let name1 = document.getElementById("name");
let amount = document.getElementById("amount");
let category = document.getElementById("category");
let date = document.getElementById("date");
let table = document.getElementById("transaction-body");
let total = document.getElementById("total");
let filter = document.getElementById("filter-category");
let totalAmount = 0;

form.addEventListener("submit", function (event) {
    event.preventDefault();
    if (name1.value !== "" && amount.value !== "" && category.value !== "" && date.value !== "") {
        let row = document.createElement("tr");
        let tname = document.createElement("td");
        let tamount = document.createElement("td");
        let tcategory = document.createElement("td");
        let tdate = document.createElement("td");
        let taction = document.createElement("td");
        let button = document.createElement("button");
        let button1 = document.createElement("button");
        button.textContent = "Edit";
        button.id = "button";
        button1.id = "button1";
        button1.textContent = "Delete";
        button.classList.add("btn", "bg-gray-100", "border-black", "font-medium", "mx-1");
        button1.classList.add("btn", "bg-gray-100", "border-black", "font-medium", "mx-1");
        let div = document.createElement("div");
        div.classList.add("d-flex", "flex-row");
        div.appendChild(button);
        div.appendChild(button1);
        taction.appendChild(div);
        tname.textContent = name1.value;
        let currentAmount = parseFloat(amount.value);
        totalAmount += currentAmount;
        total.textContent = `$${totalAmount.toFixed(2)}`;
        tamount.textContent = `$${currentAmount.toFixed(2)}`;
        tcategory.textContent = category.value;
        tdate.textContent = date.value;
        row.appendChild(tname);
        row.appendChild(tamount);
        row.appendChild(tcategory);
        row.appendChild(tdate);
        row.appendChild(taction);
        table.appendChild(row);
        form.reset();

        button1.addEventListener("click", function () {
            totalAmount -= currentAmount;
            total.textContent = `$${totalAmount.toFixed(2)}`;
            row.remove();
        });

        button.addEventListener("click", function () {
            name1.value = tname.textContent;
            amount.value = currentAmount;
            category.value = tcategory.textContent;
            date.value = tdate.textContent;
            totalAmount -= currentAmount;
            total.textContent = `$${totalAmount.toFixed(2)}`;
            row.remove();
        });
    }
});

filter.addEventListener("change", function () {
    let selected = filter.value ;
    let rows = table.getElementsByTagName("tr");
    for (let i = 0; i < rows.length; i++) {
        let cell = rows[i].cells[2];
        if (!cell) continue;
        let value = cell.textContent;
        if (selected === "" || selected === value) {
            rows[i].style.display = "";
        } else {
            rows[i].style.display = "none";
        }
    }
});
