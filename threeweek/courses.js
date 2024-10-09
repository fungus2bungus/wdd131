// courses.js
const aCourse = {
    code: "CSE121b",
    name: "Javascript Language",
    sections: [{ sectionNum: 1, roomNum: 'STC 353', enrolled: 26, days: 'TTh', instructor: 'Bro T'},
        { sectionNum: 2, roomNum: 'STC 347', enrolled: 28, days: 'TTh', instructor: 'Sis A'}],
  };

  // aCourse.sections.find(item => item.roomNum = "STC 347");

  function courseUpdate(course) {
    const courseNameEl = document.querySelector("#courseName");
    const courseCode = document.querySelector("#courseCode");

    courseNameEl.innerHTML = `<em>${course.name}</em>`;
    courseCode.textContent = course.code;
  }

  function sectionTemplate(section) {
    return `<tr>
                <td>${section.sectionNum}</td>
                <td>${section.roomNum}</td>
                <td>${section.enrolled}</td>
                <td>${section.days}</td>
                <td>${section.instructor}</td></tr>`;
  }

  function renderSections(sections) {
    const sectionListEl = document.querySelector("#sections");
    const html = sections.map(sectionTemplate);
    sectionListEl.innerHTML = html.join("");
  }

 courseUpdate(aCourse);
 renderSections(aCourse.sections);