import contactModel from '../models/contacts.js';

export function DisplayContactList(req, res, next) {
    contactModel.find(function(err, contactsCollection) {
        if(err) { 
            console.error(err);
            res.end(err);
        }

        res.render('index', {title: 'Contact List', page: '/contacts/list', contacts: contactsCollection});
    })
}
export function DisplayContactAddPage(req, res, next) {
    res.render('index', {title: 'Add Contact', page: 'contacts/edit', contact: {}});
}