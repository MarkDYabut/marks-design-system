const API_KEY = `f9ae003dfa0ee152613fcb7e981f7cb0`; // Fill in with your own key.
const verse = document.querySelector(`#verse-content`);
const verseRef = document.querySelector(`#verse`);
const BIBLE_ID = `9879dbb7cfe39e4d-02`;
const VERSES = [
    `JER.29.11`,
    `PSA.23`,
    `1COR.4.4-8`,
    `PHP.4.13`,
    `JHN.3.16`,
    `ROM.8.28`,
    `ISA.41.10`,
    `PSA.46.1`,
    `GAL.5.22-23`,
    `HEB.11.1`,
    `2TI.1.7`,
    `1COR.10.13`,
    `PRO.22.6`,
    `ISA.40.31`,
    `JOS.1.9`,
    `HEB.12.2`,
    `MAT.11.28`,
    `ROM.10.9-10`,
    `PHP.2.3-4`,
    `MAT.5.43-44`,
];
const verseIndex = Math.floor(Math.random() * VERSES.length);
const verseID = VERSES[verseIndex];


function getResults(verseID) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.withCredentials = false;
        xhr.addEventListener(`readystatechange`, function () {
            if (this.readyState === this.DONE) {
                const { data, meta } = JSON.parse(this.responseText);
                _BAPI.t(meta.fumsId);
                resolve(data);
            }
        });
        xhr.open(
            `GET`,
            `https://api.scripture.api.bible/v1/bibles/${BIBLE_ID}/search?query=${verseID}`
        );
        xhr.setRequestHeader(`api-key`, API_KEY);
        xhr.onerror = () => reject(xhr.statusText);
        xhr.send();
    });
}
getResults(verseID).then((data) => {
    const passage = data.passages[0];
    verseRef.innerHTML = `<span><i>${passage.reference}</i></span>`;
    verse.innerHTML = `<div class="text eb-container">${passage.content}</div>`;
});