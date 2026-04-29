const course={
    course_name:"Hindi",
    course_price:1000,
    course_instructor:"Hitesh"
}
// normal way to access is :
console.log(course.course_instructor) 
// but also another way also easy
const {}=course
console.log(a)// no need of using point here
//also 
const {course_instructor:instructor}=course
console.log(instructor)