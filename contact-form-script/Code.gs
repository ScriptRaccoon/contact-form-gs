// insert your mail address here
const mymail = "...EMAIL...";

function doGet() {
    const output = HtmlService.createTemplateFromFile("index.html").evaluate();
    output.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
    return output;
}

function include(fileName) {
    return HtmlService.createHtmlOutputFromFile(fileName).getContent();
}

function sendMessage(text, mail) {
    if (text === "") {
        throw new Error("There is no message.");
    } else if (mail === "") {
        throw new Error("There is no e-mail.");
    }

    const body =
        "A new message has been sent via the contact form.\n\n" +
        "Message:\n\n" +
        text +
        "\n\n" +
        "E-mail: " +
        mail;
    try {
        GmailApp.sendEmail(mymail, "Contact form submission", body);
    } catch (e) {
        throw new Error("The message could not be sent.");
    }
}
