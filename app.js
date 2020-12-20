// Задание 1
/*
Создать массив group, элементы которого будут объектами, содержащими данные каждого студента группы

Какие данные - на ваше усмотрение ( например, имя, фамилия, возраст, наличие ноутбука и т.д. )
*/

var group = [
  {
    firstName: "Ivan",
    lastName: "Ivanov",
    age: 30,
    notebook: false,
  },
  {
    firstName: "Petr",
    lastName: "Petrov",
    age: 25,
    notebook: true,
  },
  {
    firstName: "Max",
    lastName: "Maximov",
    age: 35,
    notebook: false,
  },
];

// Задание 2
/*
Создать функцию, которая итерирует массив group, выводя в консоль данные каждого студента одной строкой

( предварительно преобразовав объект в строку, не забудьте сивол-разделитель )
*/

function getStudentsList(arrayOfStudents) {
  var studentsList = [];
  for (var student of arrayOfStudents) {
    studentsList.push(Object.values(student).join(", "));
  }
  return studentsList;
}

console.log(getStudentsList(group));

/*
Работа с предыдущим массивом group

Объявить функцию, которая добавляет нового студента в массив group

Формальные параметры - данные студента
*/

function addNewStudent(name, lastName, age, notebook) {
  var newStudent = {
    name: name,
    lastName: lastName,
    age: age,
    notebook: notebook,
  };
  group.push(newStudent);
}

addNewStudent("Oleg", "Sidorov", 27, true);
console.log(getStudentsList(group));

/*
Вызвать функцию addNewStudent, передав ей фактические данные нового студента

После этого вызвать предыдущую функцию ( getStudentsList ), чтобы убедиться, что студент добавлен в группу
*/

// Задание 3
/*
Объявить функцию, которая получает в качестве аргумента строку и удаляет из нее символы,

код которых больше 1103 или меньше 1040

Функция должна вернуть новую строку

Применить эту функцию к строке
"Вчbvnера 789 был home work наiuyстоtящий + празrorднgfdик"
*/

function getChangedString(string) {
  var changedString = "";
  for (var i = 0; i < string.length; i++) {
    if (string.charCodeAt(i) > 1103 || string.charCodeAt(i) < 1040) continue;
    changedString += string[i];
  }
  return changedString;
}

console.log(
  getChangedString("Вчbvnера 789 был home work наiuyстоtящий + празrorднgfdик")
  // getChangedString("abcde")
);

// Задание 4
/*
Написать функцию сортировки массива

Не использовать метод sort ()

Использовать оператор цикла while

Использовать методы работы с массивами и строками
*/

function sortArray(array) {
  var sortedArray = [];
  var index = 0;
  while (index < array.length) {
    if (array[index] < array[index + 1]) sortedArray.push(array[index]);
    index++;
  }
  return sortedArray;
}

console.log(sortArray(["a", "b", "c"]));

// Homework
// Required
/*
Создайте пустой массив letters

Создайте строку из нескольких слов, например "Backend As A Service"

Напилите код, который разбивает эту строку на массив слов и пушит в массив letters первый символ каждого слова

Выведите результат в консоль

Объедините все элементы массива letters в одну строку и выведите ее в консоль
*/
var letters = [];
var string = "Backend As A Service";
var arrayFromString = string.split(" ");
for (var word of arrayFromString) {
  letters.push(word[0]);
}
console.log(letters);
console.log(letters.join(""));

// Additionally
/*
Объявите функцию с одним формальным параметром, которая проверяет тип данных переданного аргумента и:

если это число, возвращает текущую дату в формате "20.02.2019, 13:21:51"
в противном случае возвращает строку "Неверный тип данных"
Вызовите функцию
*/
function getDate(data) {
  if (typeof data === "number") {
    var currentDate = new Date();
    return currentDate.toLocaleString();
  } else {
    return "Неверный тип данных";
  }
}

console.log(getDate(12));
