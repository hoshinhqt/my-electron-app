import React from 'react';
import FormHome from './mainPage/FormHome';


export default function App(props) {

    // const fs = require('fs');
    // const { dialog } = require('electron').remote;
    // const { fs, dialog } = props;

    // const actSavingFile = (content) => {
    //     console.log("run");
    //     dialog.showSaveDialog(() => {
    //         if (fileName === undefined) {
    //             console.log("You didn't save the file");
    //             return;
    //         }
    //         fs.writeFile(fileName, content, (err) => {
    //             if (err) {
    //                 alert("An error ocurred creating the file " + err.message)
    //             }

    //             alert("The file has been succesfully saved");
    //         });
    //     })
    // }
    const downloadTxtFile = (obj) => {
        const element = document.createElement("a");
        // const obj = { hello: 'world' };
        const file = new Blob([JSON.stringify(obj, null, 2)], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = "myFile.txt";
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
    }
    return (
        <div>
            <FormHome dispatchActSaving={downloadTxtFile} />
        </div>
    )

}



