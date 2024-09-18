import getAllContacts from "./getAllContacts.js";
import  updateContacts from "./upContacts.js";

export const removeLastContact = async () => { 
    const contactList = await getAllContacts();
    contactList.pop();
    await updateContacts(contactList);

};

removeLastContact();
