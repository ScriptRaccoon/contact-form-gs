// Insert your email here
const myMail = "...EMAIL...";

function doGet() {
    const output = HtmlService.createTemplateFromFile("index.html").evaluate();
    output.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
    return output;
}

function include(fileName) {
    return HtmlService.createHtmlOutputFromFile(fileName).getContent();
}

function emailValidation(mail) {
  return (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail));
}

function sendMessage(name, mail, message) {
    if (name === "") {
      throw "There is no name.";
    }
    else if (!emailValidation(mail)) {
        throw "The email is not valid.";
    }
    else if (message === "") {
        throw "There is no message.";
    }
    const body =
        "A new message has been sent via the contact form." +
        "\n\nName: " + name + 
        "\n\nEmail: " + mail + 
        "\n\nMessage:\n\n" + message;
    try {
        GmailApp.sendEmail(myMail, "Contact form submission by " + name, body);
    } catch (e) {
        throw new Error("The message could not be sent.");
    }
}
