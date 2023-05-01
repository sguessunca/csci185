// ignore this function for now. We'll go over it
// on Wednesday: 
async function fetchCourses() {
    const url = `https://meteor.unca.edu/registrar/class-schedules/api/v1/courses/2023/fall/`;
    courseList = await fetch(url).then(response => response.json());
    displayResults(courseList);
} 

function displayResults(courses) {
    // your code here.
    console.log(courses);
    for (let i=0; i < courses.length ;  ++i ) {
        if (courses[i].department = "CSCI") {
            const template = `
            <section class="course">
            <h3>${courses[i].Title}</h3>
            <ul>
                <li>Instructor: ${courses[i].Instructors[0].Name}</li>
                <li>Location: ${courses[i].Location.FullLocation}</li>
                <li>Days: ${courses[i].Days}</li>
            </ul>
        </section>
            `;
            document.querySelector('#results').innerHTML = template;
        };
        
    };
   
}