import { Seq } from 'immutable';

export default function printBestStudents(obj) {
  const seq = Seq(obj);
  const students = seq.filter((val) => val.score > 70).toJS;

  Object.keys(students).map((key) => {
    const first_name = students[key].firstName;
    const last_name = students[key].lastName;

    students[key].firstName = first_name.charAt(0).toUpperCase() + first_name.slice(1);
    students[key].lastName = last_name.charAt(0).toUpperCase() + last_name.slice(1);
    return null;
  });

  console.log(students);
}
