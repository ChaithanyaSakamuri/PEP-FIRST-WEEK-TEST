function transformArray(arr) {
    return arr.map(n => n % 2 === 0 ? n * n : n);
}

const input = [2, 3, 4, 5, 6];
const output = transformArray(input);

document.getElementById("result").textContent =
    "Output: [" + output.join(", ") + "]";
