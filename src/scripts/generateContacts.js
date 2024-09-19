
import { createFakeContact } from '../utils/createFakeContact.js';

import getAllContacts from "./getAllContacts.js";

import updateContacts from "./upContacts.js";



const generateContacts = async (number) => {
    const contactList = await getAllContacts();
    const newContactsList = Array(number).fill(0).map(createFakeContact);
    contactList.push(...newContactsList);
    await updateContacts(contactList);;

    console.log(contactList);
       
};
   
    
generateContacts(5);
