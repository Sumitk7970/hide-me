export async function generateRandomEmail() {
  let email = "";
  const url =
    "https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1";
  email = await fetch(url)
    .then((response) => response.json())
    .then(data => data[0]);

  return email;
}

export async function fetchInbox(email) {
    let userName = email.substring(0, email.lastIndexOf("@"));
    let domain = email.substring(email.lastIndexOf("@") + 1);
    let url = `https://www.1secmail.com/api/v1/?action=getMessages&login=${userName}&domain=${domain}`;
    let emails = [];

    emails = await fetch(url)
    .then(response => response.json())
    .then((data) => data);

    return emails;
}

export async function fetchASingleMail(email, id) {
    let userName = email.substring(0, email.lastIndexOf("@"));
    let domain = email.substring(email.lastIndexOf("@") + 1);
    let url = `https://www.1secmail.com/api/v1/?action=readMessage&login=${userName}&domain=${domain}&id=${id}`;
    let mail = {};

    mail = await fetch(url)
    .then((response) => response.json())
    .then((data) => data)

    return mail;
}