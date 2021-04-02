import Login from './components/Login'
import Home from './components/Home'
import SignUp from './components/SignUp'
import ContactUs from './components/ContactUs'
import FAQ from './components/FAQ'
import HomeTutor from './components/HomeTutor'
<<<<<<< HEAD
<<<<<<< HEAD
=======
import HomeStudent from './components/HomeStudent'
>>>>>>> 813d35a9f40e33dd43746f386d3e6e2a5ddb5e86
import TutorDetails from './components/TutorDetails'
=======
import HomeStudent from './components/HomeStudent'

>>>>>>> 3afb6485290c9237ffed2e1fc678727f88848f34

export default [
    { path: '/', name: 'home', component: Home },
    { path: '/login', component: Login },
    { path: '/signup', name:'signup', component: SignUp },
    { path: '/contactus', component: ContactUs},
    { path: '/faq', component: FAQ},
    { path: '/homeTutor', component: HomeTutor},
<<<<<<< HEAD
<<<<<<< HEAD
=======
    { path: '/homeStudent', component: HomeStudent},
>>>>>>> 813d35a9f40e33dd43746f386d3e6e2a5ddb5e86
    { path: '/tutorDetails', component: TutorDetails}
=======
    { path: '/homeStudent', component: HomeStudent}
>>>>>>> 3afb6485290c9237ffed2e1fc678727f88848f34
]