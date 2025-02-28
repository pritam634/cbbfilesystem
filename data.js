const dataFromJS = [
    {
        fileName: "Sharp Ferro Alloys Pvt Ltd [All Docs]",
        place: "Cab - 7/1"
    },
    {
        fileName: "Calcutta Power Construction [OD]",
        place: "Cab - 3/2"
    },
    {
        fileName: "Saran Alloys Pvt Ltd [All Docs]",
        place: "Cab - 8/2"
    },
    {
        fileName: "Amit Metalics [All Docs]",
        place: "Cab - 7/2"
    },
    {
        fileName: "Arun Barua[Staff H/L]",
        place: "Cab - 1/1"
    }
]























// append in the table
dataFromJS.forEach((row) => {
    document.querySelector("#tableBody").innerHTML=`<tr>
            <td>${row.fileName}</td>
            <td>${row.place}</td>
        </tr>
        `;
})
