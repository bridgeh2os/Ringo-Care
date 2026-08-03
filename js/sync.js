/*
Future Google Sheets synchronization layer.

This module handles sending
saved Ringo Care data to external services.

For now, it only prepares the structure.
*/


const GOOGLE_SCRIPT_URL = "";


export async function syncMedicationLog(logEntry) {

    if (!GOOGLE_SCRIPT_URL) {

        console.log(
            "Google Sheets sync not configured yet",
            logEntry
        );

        return;

    }


    await fetch(
        GOOGLE_SCRIPT_URL,
        {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(logEntry)

        }
    );

}
