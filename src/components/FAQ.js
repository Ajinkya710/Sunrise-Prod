import React from 'react';
import Accordion from './Accordion';

const faq = () => {
  const accordionData = [
    {
      title: 'HOW OLD ARE THE CHILDREN INVOLVED IN THE SUNRISE STUDY?',
      content: `For the pilot study, around a mean age of 4 years. Minimum variability is preferred, but some 3 and 5 year olds 
      may be included in analysis. For the main study, the age of children to be included is 3 to 4.9 years old. `
    },
    {
      title: 'WHERE CAN I FIND ALL NECESSARY DOCUMENTATION?',
      content: `We will provide you with a link when you sign up.`
    },
    {
      title: 'WHAT DOES THE TRAINING INVOLVE?',
      content: `A representative from the Leadership Group will visit you and your research team to run the 2-day SUNRISE training. 
      An agenda will be provided to you a few days prior. We request that we be able to visit a local child care centre on Day Two to practice data collection.`
    },
    {
      title: 'WHAT IF PARTICIPANTS IN MY COUNTRY CANNOT SPEAK OR UNDERSTAND ENGLISH?',
      content: `The Early Years Toolbox app used in the SUNRISE study is available in a number of different languages. Other documentation, such as parent questionnaires, 
      will need to be translated into your local language. If your required language is not yet available, please contact the Coordinating Centre team to discuss options.`
    },
    {
      title: 'WHO CAN COLLECT DATA? WHAT ARE THEIR ROLES AND RESPONSIBILITIES?',
      content: `Suitable data collectors are to be selected by Chief Investigators in each country, and their conduct monitored by the Chief Investigator. All data collection 
      will take place in childcare centres, villages, or homes. Initial contact with individual centres will be made by a member of the Research Team in each country. 
      You will travel to the centre or to a planned meeting place either individually or as a team. Remember to follow local protocols for entering and exiting the 
      Centre/Village as a visitor (e.g., signing a visitor book if required). Please refer to the protocol manual, which can be requested by contacting the Coordinating Centre team.`
    },
    {
      title: 'WE DON’T HAVE ALL THE NECESSARY EQUIPMENT FOR DATA COLLECTION. CAN YOU HELP?',
      content: `In the first instance, please determine whether you might be able to source equipment from your university or institution, or a neighbouring university or 
      institution. If this is not possible, please contact the Coordinating Centre team to discuss your equipment needs.`
    },
    {
      title: 'WHEN CAN WE START DATA COLLECTION?',
      content: `You can commence data collection once your team has:

      Completed the 2-day SUNRISE training with a member of the Leadership Group,
      Received ethics approval from a suitable human research ethics committee in your country (in addition to approval from schools and other departments where necessary),
      Signed a Collaboration Agreement with the University of Wollongong, and
      Received approval from the University of Wollongong human research ethics committee (this is organised by the Project Officer/s at the Coordinating Centre).
      
      A parent/caregiver needs to sign and return the consent form for their child to participate in the study. If you do not have a signed consent form from the parent/caregiver, 
      the child cannot participate. Please note, if a parent/caregiver is unable to read these documents you may help them by verbally going through each document with him/her.`
    },
    {
      title: 'WHEN DO WE CONDUCT THE FOCUS GROUPS? WHAT DOES THIS INVOLVE?',
      content: `The focus groups are a feature of the SUNRISE pilot study only (i.e. not the main study). The ideal time to conduct the focus groups will be on the last day of 
      your visit to each centre. This should only take 20-30 minutes. The focus groups are important in seeking feedback from key stakeholders about the feasibility and 
      acceptability of the proposed methods. This will help inform the data collection protocol for the main study. Focus groups should include childcare staff and parents 
      from at least one of the urban and one of the rural centres. It is okay if the focus groups contain a mix of staff and parents. The ideal number of participants per 
      focus group is 4 to 8 people.`
    },
    {
      title: 'WHO CAN I TALK TO ABOUT TECHNICAL DIFFICULTIES, MISSING DATA, AND OTHER CONCERNS?',
      content: `In the first instance, please refer to the protocol manual. If you are unable to locate the answer to your question, please email the Coordinating Centre and 
      your enquiry will be directed to the relevant team member. The team will respond as soon as possible.`
    }
  ];

  return (
      <div id="faq" className='faqs'>
        <h1>FAQ's</h1>
        <h3>MOST FREQUENT QUESTIONS AND ANSWERS</h3>
        <div className="accordion">
          {accordionData.map(({ title, content }) => (
            <Accordion title={title} content={content} />
          ))}
        </div>
      </div>
  );
}

export default faq;