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
    },
    {
        fileName: "Neel Kantha [Staff H/L]",
        place: "Cab - 1/1"
    },
    {
        fileName: "Vinod Kumar Shaw [Staff HL]",
        place: "Cab - 1/1"
    },
    {
        fileName: "Arty Tirky [Staff HL]",
        place: "Cab - 1/1"
    },
    {
        fileName: "Rupesh Kumar [Staff HL]",
        place: "Cab - 1/1"
    },
    {
        fileName: "Tsnushree Dutta [Staff HL]",
        place: "Cab - 1/1"
    },
    {
        fileName: "Ajay Prasad [Staff HL]",
        place: "Cab - 1/1"
    },
    {
        fileName: "Jhuma Saha [Staff HL]",
        place: "Cab - 1/1"
    },
    {
        fileName: "Sudeshna Gupta [Staff HL]",
        place: "Cab - 1/1"
    },
    {
        fileName: "Promod Kumar Sharma [Staff HL]",
        place: "Cab - 1/1"
    },
    {
        fileName: "Uttam Karmakar [Staff HL]",
        place: "Cab - 1/1"
    },
    {
        fileName: "Ved Prakash [Staff HL]",
        place: "Cab - 1/1"
    },
    {
        fileName: "Vivekanand Jha [Staff HL]",
        place: "Cab - 1/1"
    },
    {
        fileName: "Dinanath Ram [Staff HL]",
        place: "Cab - 1/1"
    },
    {
        fileName: "Niraj Prasad [Staff HL]",
        place: "Cab - 1/1"
    }, 
    {
        fileName : "Nilanjan Sain",
        place: "Cab - 1/2"
    }, 
    {
        fileName : "Prasanta Kumar Ghosh",
        place: "Cab - 1/2"
    }, 
    {
        fileName : "Dilip & Amit Chawla",
        place: "Cab - 1/2"
    }, 
    {
        fileName : "Bidyut Dhandapat",
        place: "Cab - 1/2"
    }, 
    {
        fileName : "Anjan Kumar Roy",
        place: "Cab - 1/2"
    }, 
    {
        fileName : "Dinesh Gupta & Manju Gupta",
        place: "Cab - 1/2"
    }, 
    {
        fileName : "Ranu Sengupta",
        place: "Cab - 1/2"
    }, 
    {
        fileName : "Nishu Kumar",
        place: "Cab - 1/2"
    }, 
    {
        fileName : "Sucheta Mukherjee",
        place: "Cab -. 1/2"
    }, 
    {
        fileName : "Sharwan Kumar",
        place: "Cab - 1/2"
    }, 
    {
        fileName : "Anil Jain",
        place: "Cab - 1/3"
    }, 
    {
        fileName : "Md. Shami Alam",
        place: "Cab - 1/3"
    },
    {
        fileName: "Ramakant Tiwari",
        place: "Cab - 1/3"
    },
    {
        fileName: "Sita Devi",
        place: "Cab - 1/3"
    },
    {
        fileName: "Shilpi Garg",
        place: "Cab - 1/3"
    },
    {
        fileName: "Atanu Chaterjee",
        place: "Cab - 1/3"
    }
]
/*
     ,
    {
        fileName: "",
        place: ""
    }

*/























// append in the table
dataFromJS.forEach((row) => {
    docum
        ent.querySelector("#tableBody").innerHTML=`<tr>
            <td>${row.fileName}</td>
            <td>${row.place}</td>
        </tr>
        `;
})
