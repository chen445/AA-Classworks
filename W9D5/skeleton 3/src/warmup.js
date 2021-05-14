
const partyHeader = document.getElementById('party');

export const htmlGenerator = (string, htmlElement) => {
    const p = document.createElement('p');
    
    if (htmlElement.hasChildNodes()) {
        while (htmlElement.firstChild) {
            htmlElement.removeChild(htmlElement.firstChild)
        }
    }

    p.append(string);
    htmlElement.append(p);
};

htmlGenerator('Party Time.', partyHeader);
