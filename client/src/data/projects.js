import React from 'react'
import vogi from '../resources/vogi.png'
import portfolio from '../resources/portfolio.png'
import travelbook from '../resources/travelbook.PNG'
import goodsamaritan from '../resources/good-samaritan.PNG'
import hrmanager from '../resources/hr-manager.PNG'
import covid19 from '../resources/covid-19.PNG'
import weather from '../resources/weatherdashboard.PNG'
import workscheduler from '../resources/work-scheduler.png'

export default [
  {
    source: vogi,
    techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Mongoose', 'Ant Design', 'GitHub API', 'SendGrid API'],
    description: 'vogi webiste',
    deployed: 'https://www.vogi.ca/',
    github: 'https://github.com/Lagbana/vogi',
    demoImage:
      'https://content.screencast.com/users/Larry2846/folders/Default/media/33d02635-dc52-4cf4-bf09-64d22faefde2/LWR_Recording.png',
    demoVideo: 'https://www.screencast.com/t/aQ4JjiD8Bsy5',
    title: `vogi`,
    content: 'A project management app that provides a user friendly dashboard where users can create projects, add project features, and track project completion progress by integrating GitHub API.'
  },
  {
    source: portfolio,
    techStack: ['React', 'Node.js', 'Express', 'Ant Design'],
    description: 'Portfolio - Larry Agbana',
    deployed: 'https://www.larryagbana.com/',
    github: 'https://github.com/Lagbana/portfolio-v2',
    demoImage:
      'https://lh3.googleusercontent.com/d/16oREkhk4Fs9ABiNePbfM0NZAnfS0PULF=s720?authuser=0',
    demoVideo: '',
    title: `React Portfolio`,
    content:
      'Current portfolio built with React. The user experience has been crafted to enable easy connection via various channels, viewing project details, and choosing the preferred color theme.'
  },
  {
    source: travelbook,
    techStack: [
      'JavaScript',
      'Node.js',
      'Express',
      'MySQL',
      'Sequelize',
      'Passport',
      'HTML',
      'Semantic UI',
      'CSS'
    ],
    description: 'travel book website',
    deployed: 'https://www.travel-book.ca/',
    github: 'https://github.com/Lagbana/travel-book',
    demoImage:
      'https://lh3.googleusercontent.com/d/13EEnhBZcCUc4kCqyLbhWRcMIVB9ejm57=s720?authuser=0',
    demoVideo: '',
    title: `travelbook`,
    content:
      'A traveler dedicated social media and blogging platform. Users have to signup and once authenticated able to create, read, update, and delete posts.'
  },
  {
    source: covid19,
    techStack: ['JavaScript', 'HTML', 'CSS', 'Bootstrap'],
    description: 'covid-19 tracker website',
    deployed: 'https://lagbana.github.io/covid19-tracker/',
    github: 'https://github.com/Lagbana/covid19-tracker',
    demoImage:
      'https://lh3.googleusercontent.com/d/1ikh1xcgMiQVKguZPLMgtRATvlO1TQJvY=s520?authuser=0',
    demoVideo: '',
    title: `COVID-19 Tracker`,
    content:
      'An app that provides Covid-19 related information. It displays API sourced reported COVID-19 data and visualization, and curated related news from the NYT API.'
  },
  {
    source: goodsamaritan,
    techStack: [
      'JavaScript',
      'Node.js',
      'Express',
      'MySQL',
      'Sequelize',
      'HTML',
      'Bootstrap'
    ],
    description: 'good samaritan website',
    deployed: 'https://serene-mountain-91633.herokuapp.com/',
    github: 'https://github.com/Lagbana/good-samaritan',
    demoImage:
      'https://content.screencast.com/users/Larry2846/folders/Default/media/a8dc19ed-2f5d-4d62-a778-7c0c61ebd101/LWR_Recording.png',
    demoVideo: 'https://www.screencast.com/t/ZhLVJ61Aevrc',
    title: `good samaritan`,
    content: (
      <p>
        <strong>Hackathon entry</strong> for{' '}
        {
          <a
            href='https://ru-hacks.devpost.com/?ref_content=default&ref_feature=challenge&ref_medium=discover'
            target='_blank'
            rel='noopener noreferrer'
          >
            ruHacks
          </a>
        }{' '}
        in the opioid misuse harm reduction category. The app works by alerting
        nearby trained emergency response volunteers to act before paramedics
        arrive to an overdose situation.
      </p>
    )
  },
  {
    source: hrmanager,
    techStack: ['Node.js', 'MySQL', 'CommandLine'],
    description: 'human resources manager CLI',
    deployed:
      'https://www.screencast.com/users/Larry2846/folders/Default/media/2e02e390-7527-4503-809d-f70499325212',
    github: 'https://github.com/Lagbana/employee-tracker',
    demoImage:
      'https://content.screencast.com/users/Larry2846/folders/Default/media/3103a3cd-02bb-4061-91d1-feeee9b1db9a/LWR_Recording.png',
    demoVideo:
      'https://www.screencast.com/users/Larry2846/folders/Default/media/2e02e390-7527-4503-809d-f70499325212',
    title: `Human Resources Manager CLI`,
    content: `A command-line interface content management system that supports human resources administrative functions.`
  },
  {
    source: weather,
    techStack: ['JavaScript', 'HTML', 'CSS', 'Bootstrap'],
    description: 'Weather Dashboard',
    deployed: 'https://lagbana.github.io/weather-dashboard/',
    github: 'https://github.com/Lagbana/weather-dashboard',
    demoImage:
      'https://lh3.googleusercontent.com/d/1VGY9Y75gB6idXIAp8c07xd8tSTaLmtAG=s720?authuser=0',
    demoVideo: '',
    title: `Weather Dashboard`,
    content: `Find today's and the 5-day weather forecast of a searched city. Data fetched from the openweather API.`
  },
  {
    source: workscheduler,
    techStack: ['jQuery', 'HTML', 'CSS', 'Bootstrap'],
    description: 'Work day scheduler app',
    deployed: 'https://lagbana.github.io/workday-scheduler/',
    github: 'https://github.com/Lagbana/workday-scheduler',
    demoImage:
      'https://lh3.googleusercontent.com/d/1aZxy0ctRnvq5Rew-EuLML5Pc_acE_cV7=s720?authuser=0',
    demoVideo: '',
    title: `Workday Scheduler`,
    content: `A 9am - 5pm Scheduler; input agenda and click save. Hours are color coded for past, current, and future time.`
  }
]
