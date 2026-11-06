interface Section {
    sectionNum:number,
    roomNum:string,
    enrolled:number,
    days:string,
    instructor:string
}

interface Course {
    code:string,
    name:string,
    sections:Section[],
    enrollStudent(s:string):void
}

const data = fetch("courses.json");

// k so this almost works, and I'm going to keep this around just because I like it
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

function makeCourses(course:Course) {
    const gCourse:Course = {
            ...course,
            enrollStudent(sectionNumber:string)  {
                this.sections.forEach((section:Section) => {
                    if (section.sectionNum.toString() === sectionNumber)
                        section.enrolled++;
                });
            }
    
    }
    renderSections(gCourse.sections);
    document.querySelector("#enrollStudent")?.addEventListener("click", function () {
        // exist for typescript purposes
        // const sectionNum = document.querySelector('#sectionNumber').value;
        const sN:HTMLInputElement = document.querySelector('#sectionNumber')!;
        const sectionNum:string = sN.value
        gCourse.enrollStudent(sectionNum);
    });

}

function sectionTemplate(section:Section) {
    return `<tr>
      <td>${section.sectionNum}</td>
      <td>${section.roomNum}</td>
      <td>${section.enrolled}</td>
      <td>${section.days}</td>
      <td>${section.instructor}</td></tr>`
}

function renderSections(sections:Section[]) {
    const html = sections.map(sectionTemplate);
    document.querySelector("#sections")!.innerHTML = html.join("");
}
