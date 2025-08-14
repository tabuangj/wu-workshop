import express from "express";
import axios from "axios";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
    
const url = "https://6892d299c49d24bce8686a32.mockapi.io/api/v1/employee";


async function fetchData(url) {
  const result = await axios.get(url).then((response) => response.data);
  return result;
}

async function htmlTable() {
    const tableStyle = `
        border-collapse: separate;
        border-spacing: 0 10px;
        width: 100%;
        background: #f9f9f9;
        font-family: Arial, sans-serif;
    `;
    const headerStyle = `
        border: 1px solid #ddd;
        padding: 12px 16px;
        background: #4CAF50;
        color: white;
        text-align: left;
        font-size: 16px;
    `;
    const cellStyle = `
        border: 1px solid #ddd;
        padding: 12px 16px;
        background: #fff;
        font-size: 15px;
    `;
    let html = `<table style="${tableStyle}">
    <tr>
        <th style="${headerStyle}">Name</th>
        <th style="${headerStyle}">Email 1</th>
        <th style="${headerStyle}">Email 2</th>
        <th style="${headerStyle}">Address 1</th>
        <th style="${headerStyle}">Address 2</th>
    </tr>`;
    const data = await fetchData(url);
    data.forEach(item => {
        html += `
        <tr>
            <td style="${cellStyle}">${item.name?.firstname ?? ""} ${item.name?.lastname ?? ""}</td>
            <td style="${cellStyle}">${item.email?.[0] ?? ""}</td>
            <td style="${cellStyle}">${item.email?.[1] ?? ""}</td>
            <td style="${cellStyle}">${item.location?.address1 ?? ""}</td>
            <td style="${cellStyle}">${item.location?.address2 ?? ""}</td>
        </tr>`;
    });
    html += `</table>`;
    return html;
}

app.get("/", async (req, res) => {
  const table = await htmlTable();
  res.send(table);
});

app.post("/employee", async (req, res) => {
  const newEmployee = req.body;
  if (!newEmployee || Object.keys(newEmployee).length === 0) {
    res.status(400).json({ error: "Invalid employee data" });
    return;
  }
  const result = await axios.post(url, newEmployee);
  res.status(200).json({ message: "Data created successfully", data: result.data });
});