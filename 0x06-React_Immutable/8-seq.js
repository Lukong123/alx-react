import { Seq } from 'immutable';

export default function printBestStudents(obj) {
  const seq = Seq(obj);
  const students = seq.filter((val) => val.score > 70).toJS();

  Object.keys(students).map((key) => {
    const firstname = students[key].firstName;
    const lastname = students[key].lastName;

    students[key].firstName = firstname.charAt(0).toUpperCase() + firstname.slice(1);
    students[key].lastName = lastname.charAt(0).toUpperCase() + lastname.slice(1);
    return null;
  });

  console.log(students);
}
