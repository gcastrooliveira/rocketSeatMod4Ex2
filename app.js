let i;
let students = [];

class Student{

    constructor(studentName, grade1, grade2){
        this.studentName = studentName;
        this.grade1 = grade1;
        this.grade2 = grade2;
    }

}

function calculateAvg(student){
    
    let result = ((student.grade1 + student.grade2)/2).toFixed(1);

    if(result >= 7)
        alert(`Parabéns, ${student.studentName}! Você foi aprovado(a) com a media ${result}`)
    else
        alert(`Não foi dessa vez, ${student.studentName}! Você foi reprovado(a) com a media ${result}`)
}

students.push(new Student("John", 7, 9));
students.push(new Student("Peter", 6, 4));
students.push(new Student("Mary", 7, 7));
students.push(new Student("Jane", 4, 9));

alert(`Olá! Este é um pequeno código que utiliza um array de estudantes da classe Student para calcular suas médias e verificar se foi aprovado(a) ou não!
Tudo é feito interiormente, mostrando apenas os resultados finais. Fique à vontade para verificar o código!`)

for(stu of students){
    calculateAvg(stu);
}
