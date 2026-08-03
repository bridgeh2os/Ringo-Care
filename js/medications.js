import { save, load } from "./storage.js";


// Load medication data and create medication cards

async function loadMedications() {

    const response = await fetch(
        "./data/medications.json"
    );

    const medications = await response.json();


    const container =
        document.querySelector("#medication-list");


    medications.forEach(
        medication => {

            const logs =
                load("medicationLogs") || [];


            const medicationLogs =
                logs.filter(
                    log =>
                    log.medication === medication.id
                );


            const lastLog =
                medicationLogs.at(-1);


            const displayTime =
                lastLog
                    ? new Date(lastLog.timestamp)
                        .toLocaleString()
                    : "Not logged yet";


            const card =
                document.createElement("article");


            card.className = "card";


            card.innerHTML = `

                <h3>
                    ${medication.name}
                </h3>

                <p>
                    ${medication.type}
                </p>


                <button
                    class="button button-primary"
                    data-medication="${medication.id}"
                >
                    Log Given
                </button>


                <p id="${medication.id}-status">
                    Last given:
                    ${displayTime}
                </p>

            `;


            container.appendChild(card);

        }
    );


    addMedicationListeners();

}



// Handle medication logging

function addMedicationListeners(){

    const buttons =
        document.querySelectorAll(
            "[data-medication]"
        );


    buttons.forEach(
        button => {

            button.addEventListener(
                "click",
                () => {


                    const medication =
                        button.dataset.medication;


                    const logEntry = {

                        medication,

                        timestamp:
                            new Date()
                            .toISOString(),

                        givenBy:
                            "Unknown"

                    };


                    const existingLogs =
                        load("medicationLogs") || [];


                    existingLogs.push(
                        logEntry
                    );


                    save(
                        "medicationLogs",
                        existingLogs
                    );


                    document.querySelector(
                        `#${medication}-status`
                    ).textContent =
                        `Last given: ${
                            new Date(
                                logEntry.timestamp
                            ).toLocaleString()
                        }`;

                }
            );

        }
    );

}



loadMedications();
