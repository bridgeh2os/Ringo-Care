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

                <p 
                    id="${medication.id}-status"
                >
                    Last given:
                    Not logged yet
                </p>

            `;


            container.appendChild(card);

        }
    );


    addMedicationListeners();

}



// Add button functionality

function addMedicationListeners() {

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


                    const timestamp =
                        new Date()
                            .toLocaleString();


                    localStorage.setItem(
                        medication,
                        timestamp
                    );


                    document.querySelector(
                        `#${medication}-status`
                    ).textContent =
                        `Last given: ${timestamp}`;

                }
            );

        }
    );

}



loadMedications();
