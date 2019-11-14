# STUTER-UNIT 3-GA

Stuter is the cross-section of students and tutors merged into one resourceful app. It is designed, developed, and deployed as a full-stack React Web Application from 3 General Assembly Software Engineering Immersive students in Seattle, Wa.

## Team Members

* Clay Darland -- Git Master
* Garrison Highsmith
* Josh Hunter

## Foundation

We built Studer with React.js, Node.js, Express, and MongoDB. It incorporates API Axios fetches, CSS Materialize libraries, the MERN stack, CRUD methods, and RESTful routing best practices.


## User Experience, wireframing, project flow

We agreed that the most useful application would allow a student or tutor to 
* Login
* State their role 
* Enter their personal dashboard as the main activity hub
* Declare their school level, subject category and name
* Edit their profile with a brief bio and image upload
* Post a message to their dashboard
* Generate a favorite list of tutors and update as desired

We began with some initial whiteboard rendering that captured the user flow
![picture](img/20191107_164921.jpg)

And then finished the brainstorming session with these following Trello wireframes:
![picture](img/Screen_Shot_2019-11-07_at_2.21.03_PM.png)
![picture](img/Screen_Shot_2019-11-07_at_2.24.14_PM.png)
![picture](img/Screen_Shot_2019-11-07_at_2.51.20_PM.png)


As a team we decided to utilize Trello as a workflow development tool to keep communication, updates, and roles clearly defined throughout the project. Clay Darland developed the wireframe sketches, created the Trello team account, and operated as Git Master throughout the project.

## MongoDB Model Schemas
### User Model
```
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'You must enter a name'],
    minlength: [1, 'Name must be between 1 and 99 characters'],
    maxlength: [99, 'Name must be between 1 and 99 characters']
  },
  password: {
    type: String,
    required: [true, 'You must enter a password'],
    minlength: [8, 'Password must be between 8 and 128 characters'],
    maxlength: [128, 'Password must be between 8 and 128 characters'],
  },
  email: {
    type: String,
    required: [true, 'You must enter an email'],
    minlength: [5, 'Email must be between 5 and 99 characters'],
    maxlength: [99, 'Email must be between 5 and 99 characters']

  },
  
  username: String,
  role: String,
  bio: String,
  subjects: [],
  messages: [messageSchema],
  tutors: []
});
```
### Message Model (embedded Schema)
```
const messageSchema = new mongoose.Schema ({
    senderId: String,
    recipientId: String,
    title: String,
    body: String,
});
```
### Subject Model
```
const subjectSchema = new mongoose.Schema ({
    schoolLevel: String,
    category: String,
    subject: String
});
```
### Tutor Model
```
const tutorSchema = new mongoose.Schema ({
    name: String,
    id: String
})
```

## Development Update
#### Day 1-2
We began brainstorming as a group and initially voted on hardcoding a quiz that the user takes and then posts as a result to them and their tutor.  Our plans evolved from that original thought into a student/tutor login with subject match and messaging capability. This took some recalculating and rerendering of wireframes, but ultimately led to a better, more thorough start to finish user story.

#### Day 3
We built the model schemas and ensured that data was flowing from databases to postman. Rendering content onto pages.

#### Day 4
We began work on the edit profile page, continued work on messaging capability, refactored subject rendering, and reflected all subjects onto user's pages.

#### Day 5
MVP has been reached. A user can log in, view their dashboard, select their subject, the tutor is filtered to that subject category, messaging works both ways, and the user can edit their profile with a bio description.
As a group, we have a few more challenges to tackle. 1. Provide the student within their dashboard the ability to save or delete the tutor with that subject category and provide a Link to each tutor profile. 2. Display message thread onto their dashboard. 3. Incorporate Cloudinary for profile pic uploads. As we wrap up those few remaining checklists, we will begin testing, and get feedback from perspective users so we can implement suggestions before deployment Friday morning. 

#### Day 6
Mapbox functionality has been added in order for appointments to be made at specific locations.  Cloudinary continues as a work in progress. The message inbox component is functional and looks fantastic. TODO: CSS, debugging, testing, mapbox enhancements, and deployment are the markers for today.




















