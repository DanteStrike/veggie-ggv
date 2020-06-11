import {monthSpecialsMock} from "./mock/month-specials";
import MonthSpecialsController from "./controllers/month-specials-controller";

const monthSpecialContainer = document.querySelector(`.month-specials .container`);
const monthSpecialsController = new MonthSpecialsController(monthSpecialContainer!, monthSpecialsMock);
monthSpecialsController.init();
