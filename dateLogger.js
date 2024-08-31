import fs, { access } from "fs";

export function dateLogger(req, res, next) {
  const accessDate = new Date();
  fs.appendFile("access.log", " - " + accessDate + "\n", (err) => {
    if (err) console.log("Date could not be added to access log");
  });
  next();
}