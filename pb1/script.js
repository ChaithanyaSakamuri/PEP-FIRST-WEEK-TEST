const container = document.getElementById("container");
const ul = document.createElement("ul");
const students = [
    { name: "Rahul", marks: 85 },
    { name: "Anita", marks: 92 },
    { name: "Kiran", marks: 78 }
];
students.forEach((student, index) => {
    const li = document.createElement("li");
    li.textContent = `${student.name} – ${student.marks}`;
    li.style.backgroundColor = index % 2 === 0 ? "#d1e7dd" : "#f8d7da";
    li.style.padding = "8px";
    li.style.margin = "5px 0";
    li.style.listStyleType = "none";

    ul.appendChild(li);
});
container.appendChild(ul);
