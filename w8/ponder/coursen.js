"use strict";
const data = fetch("courses.json");
async function addCourses() {
    const response = await fetch("courses.json");
    const courses = await response.json();
    courses.forEach(makeCourses);
    //const bCourse:Course = Object.assign(courses, {
    //    ...courses,
    //    enrollStudent(sectionNumber:string) {
    //        this.sections.forEach((s:Section) => {
    //            if (s.sectionNum.toString() === sectionNumber)
    //                s.enrolled++;
    //        });
    //    }
    //});
    //renderSections(bCourse.sections);
}
addCourses();
function makeCourses(course) {
    const gCourse = {
        ...course,
        enrollStudent(sectionNumber) {
            this.sections.forEach((section) => {
                if (section.sectionNum.toString() === sectionNumber)
                    section.enrolled++;
            });
        }
    };
    renderSections(gCourse.sections);
    document.querySelector("#enrollStudent")?.addEventListener("click", function () {
        // exist for typescript purposes
        // const sectionNum = document.querySelector('#sectionNumber').value;
        const sN = document.querySelector('#sectionNumber');
        const sectionNum = sN.value;
        gCourse.enrollStudent(sectionNum);
    });
}
//const aCourse = {
//    code: 'WDD131',
//    name: 'Dynamic Web Fundamentals',
//    sections: [
//        {
//            sectionNum: 1,
//            roomNum: 'STC 353',
//            enrolled: 26,
//            days: 'TTh',
//            instructor: 'Brother Thompson'
//        },
//        {
//            sectionNum: 2,
//            roomNum: 'STC 343',
//            enrolled: 28,
//            days: 'TTh',
//            instructor: 'Sister Anderson'
//        }
//    ],
//    enrollStudent: function(sectionNumber:string) {
//        // find the correct section in the array based on sectionNumber passed in
//        this.sections.forEach(section => {
//            // if (section.sectionNum == sectionNumber)
//            if (section.sectionNum.toString() === sectionNumber)
//                section.enrolled++;
//        });
//        // increment enrollemnt of that section by 1
//    }
//}
function sectionTemplate(section) {
    return `<tr>
      <td>${section.sectionNum}</td>
      <td>${section.roomNum}</td>
      <td>${section.enrolled}</td>
      <td>${section.days}</td>
      <td>${section.instructor}</td></tr>`;
}
function renderSections(sections) {
    const html = sections.map(sectionTemplate);
    document.querySelector("#sections").innerHTML = html.join("");
}
//document.querySelector("#enrollStudent")?.addEventListener("click", function () {
//        // exist for typescript purposes
//        // const sectionNum = document.querySelector('#sectionNumber').value;
//        const sN:HTMLInputElement = document.querySelector('#sectionNumber')!;
//        const sectionNum:string = sN.value
//        aCourse.enrollStudent(sectionNum);
//});
//console.log(aCourse.sections[1].instructor);
