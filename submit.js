// Konfiguration für dein Repository
const REPO_OWNER = "iSnoX";
const REPO_NAME = "iSnoX.github.io";
const BRANCH = "main"; // Falls dein Haupt-Branch "master" heißt, hier anpassen

// 1. Funktion: Token sicher abfragen und im Browser (localStorage) speichern
function getGitHubToken() {
    let token = localStorage.getItem("github_token");
    if (!token) {
        token = prompt("Bitte gib deinen GitHub Personal Access Token ein (wird nur lokal in deinem Browser gespeichert):");
        if (token) {
            localStorage.setItem("github_token", token.trim());
        }
    }
    return token;
}

// Token zurücksetzen, falls er mal ungültig wird oder erneuert werden muss
function resetGitHubToken() {
    localStorage.removeItem("github_token");
    alert("Token wurde gelöscht. Beim nächsten Upload wirst du neu danach gefragt.");
}

// 2. Funktion: Screenshot zu GitHub hochladen (in assets/screenshots/)
async function uploadImageToGitHub(file) {
    const token = getGitHubToken();
    if (!token) throw new Error("Kein GitHub Token angegeben.");

    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        
        reader.onload = async () => {
            // Base64 Prefix entfernen (z. B. "data:image/png;base64,")
            const content = reader.result.split(',')[1];
            
            // Eindeutiger Dateiname mit Date.now()
            const fileExt = file.name.split('.').pop() || 'png';
            const fileName = `assets/screenshots/nade-${Date.now()}.${fileExt}`;
            const url = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${fileName}`;

            try {
                const response = await fetch(url, {
                    method: "PUT",
                    headers: {
                        "Authorization": `Bearer ${token}`,
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        message: `Upload Screenshot: ${fileName}`,
                        content: content,
                        branch: BRANCH
                    })
                });

                if (response.ok) {
                    const data = await response.json();
                    resolve(data.content.path); // Gibt den relativen Pfad der Datei zurück
                } else {
                    const errorData = await response.json();
                    reject(`Fehler beim Bild-Upload: ${errorData.message}`);
                }
            } catch (err) {
                reject(`Netzwerkfehler beim Bild-Upload: ${err.message}`);
            }
        };
        
        reader.onerror = () => reject("Fehler beim Lesen der Datei auf deinem PC.");
    });
}

// 3. Funktion: Nade-Daten in der entsprechenden JSON-Datei auf GitHub speichern
async function saveNadeToGitHub(mapJsonFileName, newNadeData) {
    const token = getGitHubToken();
    if (!token) throw new Error("Kein GitHub Token angegeben.");

    const jsonUrl = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${mapJsonFileName}`;

    try {
        // A) Aktuelle JSON-Datei von GitHub abrufen
        const getResponse = await fetch(jsonUrl, {
            headers: { "Authorization": `Bearer ${token}` }
        });

        let currentContent = [];
        let sha = null;

        if (getResponse.ok) {
            const fileData = await getResponse.json();
            sha = fileData.sha; // Der SHA-Hash ist für Aktualisierungen zwingend erforderlich
            
            // UTF-8 fähiges Dekodieren aus Base64
            const decodedString = decodeURIComponent(escape(atob(fileData.content)));
            currentContent = JSON.parse(decodedString);
        } else if (getResponse.status === 404) {
            // Falls die Datei noch nicht existiert, wird eine neue Liste angelegt
            console.log(`${mapJsonFileName} existiert noch nicht. Sie wird neu erstellt.`);
        } else {
            throw new Error("Fehler beim Abrufen der aktuellen JSON-Datei von GitHub.");
        }

        // B) Neue Nade zur Liste hinzufügen
        currentContent.push(newNadeData);

        // C) Aktualisierten Inhalt in Base64 umwandeln (UTF-8 sicher)
        const updatedJsonString = JSON.stringify(currentContent, null, 2);
        const updatedContentBase64 = btoa(unescape(encodeURIComponent(updatedJsonString)));

        // D) Aktualisierte Datei zurück an GitHub senden
        const putPayload = {
            message: `Add new Nade: ${newNadeData.title}`,
            content: updatedContentBase64,
            branch: BRANCH
        };
        if (sha) putPayload.sha = sha;

        const putResponse = await fetch(jsonUrl, {
            method: "PUT",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(putPayload)
        });

        if (putResponse.ok) {
            alert("✅ Nade und Screenshot wurden erfolgreich direkt auf GitHub gespeichert!");
        } else {
            const errorData = await putResponse.json();
            alert(`❌ Fehler beim Speichern der JSON-Daten: ${errorData.message}`);
        }
    } catch (err) {
        alert(`❌ Fehler: ${err.message}`);
    }
}
