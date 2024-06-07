import './App.css';
import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './layout/home/Home';
import UserLogin from './pages/users/user-login/UserLogin';
import UserRegister from './pages/users/user-register/UserRegister';
import StudentDetails from './pages/students/student-details/StudentDetails';
import StudentList from './pages/students/student-list/StudentList';
import AddEducation from './pages/profiles/add-education/AddEducation';
import AddExperience from './pages/profiles/add-experience/AddExperience';
import CreateProfile from './pages/profiles/create-profile/CreateProfile';
import Dashboard from './pages/profiles/dashboard/Dashboard';
import EditProfile from './pages/profiles/edit-profile/EditProfile';
import AddCourse from './pages/profiles/add-course/AddCourse';
import PostDetails from './pages/posts/post-details/PostDetails';
import PostList from './pages/posts/post-list/PostList';
import EventList from './pages/events/event-list/EventList';
import Alert from './layout/misc/alert/Alert';
import Navbar from './layout/misc/navbar/Navbar';

function App() {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <Alert />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/register" element={<UserRegister />} />
          <Route path="/student/details" element={<StudentDetails />} />
          <Route path="/students" element={<StudentList />} />
          <Route path="/profiles/add-education" element={<AddEducation />} />
          <Route path="/profiles/add-experience" element={<AddExperience />} />
          <Route path="/profiles/add-course" element={<AddCourse />} />
          <Route path="/profiles/create" element={<CreateProfile />} />
          <Route path="/profiles/dashboard" element={<Dashboard />} />
          <Route path="/profiles/edit" element={<EditProfile />} />
          <Route path="/posts/postId" element={<PostDetails />} />
          <Route path="/posts/list" element={<PostList />} />
          <Route path="/events/list" element={<EventList />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
