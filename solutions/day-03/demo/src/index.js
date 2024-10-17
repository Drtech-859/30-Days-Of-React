import React from 'react';
import { createRoot } from 'react-dom';
import profileImage from './images/asabeneh.jpg';


const profileStyle = {
    width: '200px',
    height: '200px',
    borderRadius: '100%',
}
const Profile = (
    <img style={profileStyle} src={profileImage} alt="profile-picture" />
)

const NameStyle = {
    fontSize: '1.5rem',
    fontFamily: 'courier new',
    display: 'inline-block',
    marginRight: '1rem',
}

const Name = (
    <div>
        <h1 style={NameStyle}>Asabeneh Yetayeh</h1>
        <i class="fa-solid fa-circle-check" style={{ color: '#2acece' }}></i>
        <p style={{ fontFamily: 'courier new' }}>Senior Developer, Finland</p>
    </div>
)
const SkillsStyle = {
    fontSize: '1.5rem',
    fontFamily: 'courier new',
}

const skillsArray = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node.js',
    'Express.js',
    'MongoDB',
    'SQL',
    'Python',
    'Java',
    'C++',
    'Git',
    'Redux',
    'TypeScript',
    'UI/UX Design'
];

const listStyle = {
    listStyleType: 'none',
    padding: 0
}

const skillStyle = {
    fontSize: '1.2rem',
    fontFamily: 'courier new',
    backgroundColor: '#2acece',
    display: 'inline-block',
    margin: '0.5rem',
    padding: '0.5rem',
    borderRadius: '0.5rem',
    color: 'white',
    fontWeight: '400',
}

const Skills = (
    <div>
        <h1 style={SkillsStyle}>SKILLS</h1>
        <ul style={listStyle}>
            {
                skillsArray.map((skill) => {
                    return <li style={skillStyle}>{skill}</li>
                })
            }
        </ul>
    </div>
)

const date = () => {
    const date = new Date();

    const formatter = new Intl.DateTimeFormat('en-GB', {
        month: 'short',
        day: '2-digit',
    });

    return `Joined on ${formatter.format(date)}, ${date.getFullYear()}`

}

const JoiningDate = (
    <div>
        <h1 style={SkillsStyle}>JOINING DATE</h1>
        <p style={{ fontFamily: 'courier new' }}>
            <i class="fa-regular fa-clock"></i>
            {date()}
        </p>
    </div>

)

const app = (
    <div style={{ margin: '1rem' }}>
        {Profile}
        {Name}
        {Skills}
        {JoiningDate}
    </div>
)


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(app);