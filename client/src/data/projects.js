import React from 'react'
import travelbook from '../resources/travelbook.PNG'
import goodsamaritan from '../resources/good-samaritan.PNG'
import hrmanager from '../resources/hr-manager.PNG'
import covid19 from '../resources/covid-19.PNG'
import weather from '../resources/weatherdashboard.PNG'
import workscheduler from '../resources/work-scheduler.png'

export default [
  {
    source: travelbook,
    description: 'travel book website',
    title: `travelbook`,
    content:
      'A traveler dedicated social media and blogging platform. Users have to signup and once authenticated able to create, read, update, and delete posts.'
  },
  {
    source: covid19,
    description: 'covid-19 tracker website',
    title: `COVID-19 Tracker`,
    content:
      'An app that provides Covid-19 related information. It displays API sourced reported COVID-19 data and visualization, and curated related news from the NYT API.'
  },
  {
    source: goodsamaritan,
    description: 'good samaritan website',
    title: `good samaritan`,
    content: <p><strong>Hackathon entry</strong> for {<a href="https://ru-hacks.devpost.com/?ref_content=default&ref_feature=challenge&ref_medium=discover" target='_blank' rel="noopener noreferrer">ruHacks</a>} in the opioid misuse harm reduction category. The app works by alerting nearby trained emergency response volunteers to act before paramedics arrive to an overdose situation.</p>
  },
  {
    source: hrmanager,
    description: 'human resources manager CLI',
    title: `Human Resources Manager CLI`,
    content: `A command-line interface content management system that supports human resources administrative functions.`
  },
  {
    source: weather,
    description: 'Weather Dashboard',
    title: `Weather Dashboard`,
    content: `Find today's and the 5-day weather forecast of a searched city. Data fetched from the openweather API.`
  },
  {
    source: workscheduler,
    description: 'Work day scheduler app',
    title: `Workday Scheduler`,
    content: `A 9am - 5pm Scheduler; input agenda and click save. Hours are color coded for past, current, and future time.`
  }
]
