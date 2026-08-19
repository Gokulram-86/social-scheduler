import express from 'express';
import { protect } from '../middlewares/authMiddleware.js';
import { addAccounts, disconnectAccounts, getAccounts } from '../controllers/accountsControllers.js';

const accountRouter = express.Router();
// in this accountRouter we will add different endpoints

accountRouter.get('/', protect, getAccounts);
accountRouter.post('/', protect, addAccounts);
accountRouter.delete('/:id', protect, disconnectAccounts);

export default accountRouter;

// add this router to server.ts file
