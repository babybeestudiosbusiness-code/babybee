import { useEffect, useState } from "react";
import { team } from "../data/team";

export default function useBirthday() {
  const [birthdayPerson, setBirthdayPerson] = useState(null);

  useEffect(() => {
    const today = new Date();
    const current = `${String(today.getMonth() + 1).padStart(2, "0")}-${String(
      today.getDate()
    ).padStart(2, "0")}`;

    const person = team.find((m) => m.birthday === current);
    setBirthdayPerson(person || null);
  }, []);

  return birthdayPerson;
}