function Student(props) {
    this.name = props.name || 'Unnamed';
}

Student.prototype.hello = function () {
    alert('Hello, ' + this.name + '!');
}

// PrimaryStudent 构造函数
function PrimaryStudent(props) {
    Student.call(this, props);
    this.grade = props.grade || 1;
}

function extend(Child, Parent) {
    let F = function () {};
    // 把F的原型指向Parent.prototype
    F.prototype = Parent.prototype;
    // 把Child的原型指向一个新的F对象，F对象的原型正好指向Parent.prototype:
    Child.prototype = new F();
    // 把Child原型的构造函数修复为Child:
    Child.prototype.constructor = Child
}
extend(PrimaryStudent, Student)
PrimaryStudent.prototype.getGrade = function () {
    return this.grade;
};

// 创建xiaoming:
var xiaoming = new PrimaryStudent({
    name: '小明',
    grade: 2
});
console.log(xiaoming.name); // '小明'

console.log(xiaoming.grade); // 2


// 验证原型:
// xiaoming.__proto__ === PrimaryStudent.prototype; // true
// xiaoming.__proto__.__proto__ === Student.prototype; // true

// 验证继承关系:
// xiaoming instanceof PrimaryStudent; // true
// xiaoming instanceof Student; // true
