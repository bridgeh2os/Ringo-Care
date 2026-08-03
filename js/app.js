import "./navigation.js";
import "./theme.js";


if (
    document.querySelector("#medication-list")
) {

    import("./medications.js");

}


// Register service worker

if ("serviceWorker" in navigator) {

    window.addEventListener(
        "load",
        () => {

            navigator.serviceWorker.register(
                "./sw.js"
            );

        }
    );

}
