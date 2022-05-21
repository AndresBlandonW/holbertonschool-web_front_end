function createClassRoom(numbersOfStudents) {
    function studentSeat(seat) {
        return function() {
            return seat;
        }
    }
    var students = [];
    for (let index = 0; index < numbersOfStudents; index++) {
        students.push(studentSeat(index + 1));
    }

    return students;
}

var classRoom = createClassRoom(10);