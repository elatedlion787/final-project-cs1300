import "./Experiences.css"
import React from 'react'
import ClassExperienceCard from "./ClassExperienceCard"
import WorkExperienceCard from "./WorkExperienceCard"
import Header from "./Header"

export default function Experiences(){
    const class_experience = [
        {id: 1,
         class: 'CS1300: UI/UX',
         semester: 'Fall 2022',
         skills: 'UI Development, UX Researching, Figma, React, HTML',
         desc: 'Taught by Jeff Huang, CS1300 pushes students to think about different types of user interfaces, how to model and understand user interaction, how to conduct user feedback and how to build user experiences and interfaces.',
         link: 'https://cs.brown.edu/courses/csci1300/'
        }, 
        {
         id: 2,
         class: 'CS1460: Computational Linguistics',
         semester: 'Fall 2022',
         skills: 'Pytorch, Language Modeling, Machine Translation, Deep Learning',
         desc: 'Taught by Ellie Pavlick, CS1460 exposes students to a wide variety of NLP-based tasks (ieL Question Answering, Sentiment Analysis, Machine Translation) as well as lingustic processing and covers a variety of techniques that have been developed in the field of NLP',
         link: 'https://csci-1460-computational-linguistics.github.io/',
        },
        {
          id: 3,
          class: 'CS1951L: Blockchains and Cryptocurrency',
          semester: 'Spring 2021',
          skills: 'Go, Solidity, Concurrency, Blockchain Research',
          desc: 'Taught by Maurice Herily, CS1951L exposes students to the fundamentals of the Ethereum and Bitcoin based blockchains. CS1951L dives deep into the world of smart contracting, blockchain security and various forms of blockchain implementation',
          link: 'https://csci1951l-spring2022.vercel.app/',
        }, 
        {
            id: 4,
            class: 'CS1951A: Data Science',
            semester: 'Spring 2021',
            skills: 'SQL, Python, Pandas, Data Mining, Statistics, Graph Creation', 
            desc: 'Taught by Lorenzo Di Stefani, CS1951A provides an overview of data science, ranging from data cleaning to data manipulation to machine learning to data visualization. The course also introduces Hypothesis Testing as a standard for data analysis',
            link: 'https://csci1951a-spring-2022.github.io/',
        }, 
        {
            id: 5,
            class: 'CS1470: Deep Learning',
            semester: 'Fall 2021',
            skills: 'TensorFlow, Keras, Neural Nets, Discriminative Models, Generative Models',
            desc: 'Taught by Chen Sun, CS1470 provides an overview of the field of deep learning through a variety of deep learning technologies (LSTM, Transformer, VAE, GAN, CNN) and a variety of tasks that these technologies are used for.',
            link: 'https://brown-deep-learning.github.io/dl-website-f22/'
        }
    ]

    const work_experience = [
        {id: 1,
            title: 'Software Engineering Intern',
            company: 'FakeBook L.P', 
            start_date: '06/01/2022',
            end_date: '08/08/2022',
            skills: 'Python, Fullstack Development',
            desc: 'Spent the summer at FakeBook producing log-based queries for their security team and then creating a dashboard to display these queries '
        }, 
        {id: 2,
            title: 'Software Engineering Intern',
            company: 'Doodle', 
            start_date: '06/01/2021',
            end_date: '08/08/2021',
            skills: 'React, Node.js, SQL',
            desc: 'Built a full stack application for the Doodle Geo Team to track their latest acquired data assets and to create exportable Excel files for their work'
        } 
    ]
    return (
        <section id="experiences" className="experiences">
            <div className='container top'>
                <div className='heading text-center'>
                    <h4>2019-2023</h4>
                    <h1>My Experiences</h1>
          </div>

          <div className='content-section'>
            <div className='left'>
              <div className='heading'>
                <h2>Classes Taken</h2>
              </div>

              <div className='content'>
              {
                class_experience.map((val, id) => {
                    //  return <Header/>
                    return <ClassExperienceCard key={id} class_name={val.class} skills={val.skills} desc={val.desc} semester={val.semester} link={val.link}/>
                })
            }
               
              </div>
              <div className='heading'>
                <h2> Industry Experience </h2>
              </div>

              <div className='content'>
                {work_experience.map((val, id) => {
                    //  return <Header/>
                    return <WorkExperienceCard title={val.title} company={val.company} start_date={val.start_date} end_date={val.end_date} skills={val.skills} desc={val.desc}/>
                })
                }
              </div>
            </div>
          </div>
        </div>
        </section>
    )
}