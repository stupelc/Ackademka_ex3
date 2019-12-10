let student = {
    firstName: 'Yoav',
    lastName: 'Shapir',
    date_t: new Date("10/10/2010"),
    fullname: function () {
        return this.firstName + ' ' + this.lastName;
    }

};

cat = {
    name: 'ginger',
    date_t: new Date("10/05/2000"),
    fullname: function () {
        return 'ginger';
    }
}

let arr = [student,cat]
var btn = document.getElementById("submit");
if (btn) {
    btn.addEventListener('click', function () {
    student2 = {};
    student2.name = document.getElementById("firstname").value
    student2.lname = document.getElementById("lastname").value
    student2.date_t = document.getElementById("birthday").value
    student2.fullname = function () {
         return this.name + ' ' + this.lname;
    }
    arr.push(student2)
    console.log("done")


older = student
longest_name = student2
console.group('Names');
arr.forEach(element => {
    if ( element.date_t && new Date(element.date_t) < new Date(older.date_t) ) {
        older = element
    }
    if( element.fullname().length > longest_name.fullname().length ) {
        longest_name = element
    }
    console.log(element.fullname())
});
console.groupEnd()

console.log("the person with the longest full name:" + longest_name.fullname())
console.log("the person with the oldest age:" + older.fullname())

})          
}