
let view: number|string = 1;

view = '1M'

let apiRequestStatus: "success" | "error" | "pending" = "pending";
apiRequestStatus = "success"

let orders = ["123", "456", "789"];

let currentOrder: string | undefined;

for (const order of orders) {
    if (order === "456") {
        currentOrder = order;
    }
}


console.log(currentOrder)