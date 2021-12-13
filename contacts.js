// const fs = require("fs/promises");
// const path = require("path");
// const contactsOperations = require("./db/contacts.json");

// const invokeAction = async ({ action, id, name, email, phone }) => {
//   switch (action) {
//     case "listContacts":
//       const contacts = await contactsOperations.listContacts();
//       console.log(contacts);
//       break;
//     case "getContactById":
//       const contact = await contactsOperations.getContactById(id);
//       console.log(contact);
//       break;
//     case "addContact":
//       const newContact = await contactsOperations.addContact({
//         name,
//         email,
//         phone,
//       });
//       console.log(newContact);
//       break;
//     case "updateDyId":
//       const updateContact = await contactsOperations.updateById({
//         id,
//         name,
//         email,
//         phone,
//       });
//       console.log(updateContact);
//       break;
//     case "removeContact":
//       const removeContact = await contactsOperations.removeContact({ id });
//       console.log(removeContact);
//       break;
//     default:
//       console.warn("\x1B[31m Unknown action type!");
//   }
// };

// function removeContact(contactId) { }

// const id = 1;

// invokeAction({ action: "listContacts" });
// invokeAction({ action: "getContactById", id });

// const data = {
//   name: "Syrus Jacksonway",
//   email: "wally@utquamvel.net",
//   phone: "(333) 451-73333",
// };

// invokeAction({ action: "addContact", ...data });

// const updateData = {
//   name: "Allen Raymond",
//   email: "nulla.ante@vestibul.co.uk",
//   phone: "(333) 451-7654321",
// };

// const updateId = "1";
// invokeAction({ action: "updateById", ...updateData, id: updateId });

// const removeId = "1";

// invokeAction({ action: "removeContact", id: removeId });
