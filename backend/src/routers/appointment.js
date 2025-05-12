import express from "express";
import {
  addNewAppointment,
  deleteAppointmentById,
  getAllAppointment,
  getAppointmentById,
  seedAppointment,
  updateOneAppointment,
} from "../controllers/appointment.js";
import {
  validateAddNewAppointmentData,
  validateIdInBody,
  validateIdParam,
  validateUpdateAppointmentData,
} from "../validators/appointment.js";
import { checkErros } from "../validators/checkErrors.js";

const router = express.Router();

router.get("/appointment/seed", seedAppointment);
router.get("/appointment", getAllAppointment);
router.post("/appointment", validateIdInBody, checkErros, getAppointmentById);
router.put(
  "/appointment",
  validateAddNewAppointmentData,
  checkErros,
  addNewAppointment
);
router.delete(
  "/appointment/:id",
  validateIdParam,
  checkErros,
  deleteAppointmentById
);
router.patch(
  "/appointment/:id",
  validateUpdateAppointmentData,
  validateIdParam,
  checkErros,
  updateOneAppointment
);

export default router;
