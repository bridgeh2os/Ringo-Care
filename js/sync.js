/*
Future Google Sheets synchronization layer.

This module handles sending
saved Ringo Care data to external services.

For now, it only prepares the structure.
*/


const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxyk-xXy9IzDS4z6ENqO3u_bggXkjQukr32_pPU23tY44h6qJ18kYLzuCad5SkmhhP1/exec";


export async function syncMedicationLog(logEntry) {

    try {

        await fetch(
            GOOGLE_SCRIPT_URL,
            {
                method: "POST",

                mode: "no-cors",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(logEntry)

            }
        );


        console.log(
            "Medication synced:",
            logEntry
        );

    }

    catch(error) {

        console.error(
            "Medication sync failed:",
            error
        );

    }

}
