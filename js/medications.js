import { save, load } from "./storage.js";



async function loadMedications() {

    const response = await fetch(
        "./data/medications.json"
    );

    const medications =
        await response.json();


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


            const lastGiven =
                lastLog
                    ? new Date(lastLog.timestamp)
                        .toLocaleString()
                    : "Not logged yet";


            const history =
                medicationLogs.length
                    ? medicationLogs
                        .slice()
                        .reverse()
                        .map(
                            log =>
                            `
                            <li>
                                ${
                                    new Date(
                                        log.timestamp
                                    )
                                    .toLocaleString()
                                }
                            </li>
                            `
                        )
                        .join("")
                    : "<li>No history yet</li>";



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


                <p>
                    Last given:
                    <br>
                    ${lastGiven}
                </p>


                <details>

                    <summary>
                        View History
                    </summary>


                    <ul>
                        ${history}
                    </ul>

                </details>


            `;


            container.appendChild(card);

        }
    );


    addMedicationListeners();

}




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


  const logEntry = {

    medication,

    timestamp:
        new Date()
        .toISOString(),

    notes:
        ""

};


                    const logs =
                        load("medicationLogs")
                        || [];


                    logs.push(
                        logEntry
                    );


                    save(
                        "medicationLogs",
                        logs
                    );


                    location.reload();


                }
            );


        }
    );

}



loadMedications();
