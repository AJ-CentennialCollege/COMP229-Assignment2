import { Router } from "express";

import { DisplayContactList,
        DisplayContactAddPage } from "../controllers/contacts.controller.server.js";

const router = Router();

router.get('/contact-list', DisplayContactList);
router.get('/contact-add', DisplayContactAddPage);

export default router;