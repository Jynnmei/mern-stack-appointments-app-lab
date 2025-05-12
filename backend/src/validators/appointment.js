import { body, param } from "express-validator";

export const validateIdInBody = [body("_id", "id is invalid").isMongoId()];

export const validateIdParam = [param("id", "id is invalid").isMongoId()];

export const validateAddNewAppointmentData = [
  body("title", "title is required").notEmpty(),
  body("title", "must have a min of 1 and a max of 50 characters").isLength({
    min: 1,
    max: 50,
  }),
  body("type", "type is required").notEmpty(),
  body("type", "must have a min of 1 and a max of 50 characters").isLength({
    min: 1,
    max: 50,
  }),
  body("purpose", "purpose is required").notEmpty(),
  body("purpose", "must have a min of 1 and a max of 50 characters").isLength({
    min: 1,
    max: 50,
  }),
  body("company", "company is required").notEmpty(),
  body("company", "must have a min of 1 and a max of 50 characters").isLength({
    min: 1,
    max: 50,
  }),
  body("personMeetingWith", "personMeetingWith is required").notEmpty(),
  body(
    "personMeetingWith",
    "must have a min of 1 and a max of 50 characters"
  ).isLength({
    min: 1,
    max: 50,
  }),
  body("address", "address is required").notEmpty(),
  body("address", "must have a min of 1 and a max of 50 characters").isLength({
    min: 1,
    max: 200,
  }),
  body("date", "date is required").notEmpty(),
  body("date", "date must be a valid date").isISO8601(),

  body("time", "time is required").notEmpty(),
  body("time", "time must be in HH:MM or HH:MM AM/PM format").matches(
    /^([0-1]?[0-9]|2[0-3]):[0-5][0-9](\s)?(AM|PM)?$/i
  ),

  body("comments", "comments is required").notEmpty(),
  body("comments", "must have a min of 1 and a max of 50 characters").isLength({
    min: 1,
    max: 200,
  }),
];

export const validateUpdateAppointmentData = [
  body("title", "title is required").optional().notEmpty(),
  body("title", "must have a min of 1 and a max of 50 characters")
    .optional()
    .isLength({
      min: 1,
      max: 50,
    }),
  body("type", "type is required").optional().notEmpty(),
  body("type", "must have a min of 1 and a max of 50 characters")
    .optional()
    .isLength({
      min: 1,
      max: 50,
    }),
  body("purpose", "purpose is required").optional().notEmpty(),
  body("purpose", "must have a min of 1 and a max of 50 characters")
    .optional()
    .isLength({
      min: 1,
      max: 50,
    }),
  body("company", "company is required").optional().notEmpty(),
  body("company", "must have a min of 1 and a max of 50 characters")
    .optional()
    .isLength({
      min: 1,
      max: 50,
    }),
  body("personMeetingWith", "personMeetingWith is required")
    .optional()
    .notEmpty(),
  body("personMeetingWith", "must have a min of 1 and a max of 50 characters")
    .optional()
    .isLength({
      min: 1,
      max: 50,
    }),
  body("address", "address is required").optional().notEmpty(),
  body("address", "must have a min of 1 and a max of 50 characters")
    .optional()
    .isLength({
      min: 1,
      max: 50,
    }),
  body("date", "date is required").optional().notEmpty(),
  body("date", "date must be a valid date").optional().isISO8601(),

  body("time", "time is required").optional().notEmpty(),
  body("time", "time must be in HH:MM or HH:MM AM/PM format")
    .optional()
    .matches(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9](\s)?(AM|PM)?$/i),

  body("comments", "comments is required").optional().notEmpty(),
  body("comments", "must have a min of 1 and a max of 50 characters")
    .optional()
    .isLength({
      min: 1,
      max: 100,
    }),
];
