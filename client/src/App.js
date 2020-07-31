// import react and reatc-router-dom methods
import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

// import styling elements and Layout component
import 'antd/dist/antd.css'
import './App.css'
import { Layout } from 'antd'

// import SideBar component and all sections
import SideBar from '../src/components/SideBar'
import {
  AboutSection,
  SkillsSection,
  ContactSection,
  EducationSection,
  // ExperienceSection,
  ProjectsSection
} from '../src/sections/index'
import { SectionProvider } from './utils/GlobalState'

// Destructure Layout to access the Sider component
const { Content } = Layout

// App function that returns the page of all JSX components
function App () {
  return (
    <SectionProvider>
      <Layout>
        <Router>
          <SideBar />
        </Router>
        <Content>
          <AboutSection id='/about' />
          <ProjectsSection id='/projects' />
          <SkillsSection id='/skills' />
          <EducationSection id='/education' />
          {/* <ExperienceSection id='/experience' /> */}
          <ContactSection id='/contact' />
        </Content>
      </Layout>
    </SectionProvider>
  )
}

export default App
