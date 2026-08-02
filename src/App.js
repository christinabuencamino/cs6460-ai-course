// GitHub Pages and React setup using: https://github.com/gitname/react-gh-pages
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import LessonComponent from './Modules/reuseableComponents/LessonComponent';
import './App.css';
import { Box } from '@mui/material';
import SideBar from './SideMenu';
import AppTopBar from './AppTopBar';
import ModuleOneLessonOne from './Modules/ModuleOne/ModuleOneLessonOne';
import ModuleOneLessonTwo from './Modules/ModuleOne/ModuleOneLessonTwo';
import ModuleOneLessonThree from './Modules/ModuleOne/ModuleOneLessonThree';
import ModuleTwoLessonOne from './Modules/ModuleTwo/ModuleTwoLessonOne';
import ModuleTwoLessonTwo from './Modules/ModuleTwo/ModuleTwoLessonTwo';
import ModuleTwoLessonThree from './Modules/ModuleTwo/ModuleTwoLessonThree';
import ModuleThreeLessonOne from './Modules/ModuleThree/ModuleThreeLessonOne';
import ModuleThreeLessonTwo from './Modules/ModuleThree/ModuleThreeLessonTwo';
import ModuleThreeLessonThree from './Modules/ModuleThree/ModuleThreeLessonThree';
import ModuleThreeLessonFour from './Modules/ModuleThree/ModuleThreeLessonFour';
import ModuleFourLessonOne from './Modules/ModuleFour/ModuleFourLessonOne';
import ModuleFourLessonTwo from './Modules/ModuleFour/ModuleFourLessonTwo';
import ModuleFourLessonThree from './Modules/ModuleFour/ModuleFourLessonThree';
import ModuleOneQuiz from './Modules/ModuleOne/ModuleOneQuiz';
import ModuleTwoQuiz from './Modules/ModuleTwo/ModuleTwoQuiz';
import ModuleThreeQuiz from './Modules/ModuleThree/ModuleThreeQuiz';
import FinalQuiz from './Modules/ModuleFour/FinalQuiz';
import CourseCompletedPage from './CourseCompletedPage';

function App() {
  return (
    <Router>
      <Box sx={{ width: '100%', height: '50%' }}>
        <AppTopBar />
        <Box sx={{ display: 'flex' }}>
          <SideBar />
          <Box component="main" className="App" sx={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/lesson-component" element={<LessonComponent />} />
              <Route path="/module-1-lesson-1" element={<ModuleOneLessonOne />} />
              <Route path="/module-1-lesson-2" element={<ModuleOneLessonTwo />} />
              <Route path="/module-1-lesson-3" element={<ModuleOneLessonThree />} />
              
              <Route path="/module-2-lesson-1" element={<ModuleTwoLessonOne />} />
              <Route path="/module-2-lesson-2" element={<ModuleTwoLessonTwo />} />
              <Route path="/module-2-lesson-3" element={<ModuleTwoLessonThree />} />

              <Route path="/module-3-lesson-1" element={<ModuleThreeLessonOne />} />
              <Route path="/module-3-lesson-2" element={<ModuleThreeLessonTwo />} />
              <Route path="/module-3-lesson-3" element={<ModuleThreeLessonThree />} />
              <Route path="/module-3-lesson-4" element={<ModuleThreeLessonFour />} />

              <Route path="/module-4-lesson-1" element={<ModuleFourLessonOne />} />
              <Route path="/module-4-lesson-2" element={<ModuleFourLessonTwo />} />
              <Route path="/module-4-lesson-3" element={<ModuleFourLessonThree />} />

              <Route path="/module-1-quiz" element={<ModuleOneQuiz />} />
              <Route path="/module-2-quiz" element={<ModuleTwoQuiz />} />
              <Route path="/module-3-quiz" element={<ModuleThreeQuiz />} />
              <Route path="/final-quiz" element={<FinalQuiz />} />
              <Route path="/complete" element={<CourseCompletedPage />} />
            </Routes>
          </Box>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
