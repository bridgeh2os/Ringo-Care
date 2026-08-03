import "./navigation.js";
import "./theme.js";
import "./medications.js";


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
