import { Router } from "express";

import { DisplayContactList,
        DisplayContactAddPage, 
        ProcessContactAddPage,
        ProcessContactEditPage,
        DisplayContactEditPage,
        ProcessContactDelete } from "../controllers/contacts.controller.server.js";

const router = Router();

router.get('/contact-list', DisplayContactList);
router.get('/contact-add', DisplayContactAddPage);
router.post('/contact-add', ProcessContactAddPage);
router.post('/contact-edit/:id', ProcessContactEditPage);
router.get('/contact-edit/:id', DisplayContactEditPage);
router.get('/contact-delete/:id', ProcessContactDelete);

export default router;