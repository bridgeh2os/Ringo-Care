/*
Future Google Sheets synchronization layer.

This module handles sending
saved Ringo Care data to external services.

For now, it only prepares the structure.
*/


const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyzpKEKilhM8JjIdKAKQRk79qihw1tM5HiLNssnwyYDTw45vetBUWqHQZDH5I4lKuvN/exec";


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
