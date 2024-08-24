import React from 'react';
import '../Style/Aboutus.css'; // Import the CSS file

const people = [
  {
    name: 'Aditya Kumar',
    role: 'Full Stack Developer',
    imageUrl: 'https://media.licdn.com/dms/image/v2/D4D03AQGsbs-ka12Mwg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1721720701607?e=2147483647&v=beta&t=l5Sq6DwtJsBf5tmut2Z_r19iqVF8qJ_Zp1hUgEx96ec',
  },
  {
    name: 'Lincy Bainiwal',
    role: 'Frontend Developer',
    imageUrl: 'https://media.licdn.com/dms/image/v2/D4D03AQGsbs-ka12Mwg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1721720701607?e=2147483647&v=beta&t=l5Sq6DwtJsBf5tmut2Z_r19iqVF8qJ_Zp1hUgEx96ec',
  },
  {
    name: 'Devansh Kushwaha',
    role: 'Backend Developer',
    imageUrl: 'https://media.licdn.com/dms/image/v2/D4D03AQGsbs-ka12Mwg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1721720701607?e=2147483647&v=beta&t=l5Sq6DwtJsBf5tmut2Z_r19iqVF8qJ_Zp1hUgEx96ec',
  },
  {
    name: 'Makwana Kanvi',
    role: 'UI UX Designer',
    imageUrl: 'https://media.licdn.com/dms/image/v2/D4D03AQGsbs-ka12Mwg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1721720701607?e=2147483647&v=beta&t=l5Sq6DwtJsBf5tmut2Z_r19iqVF8qJ_Zp1hUgEx96ec',
  },
];

export default function Aboutus() {
  return (
    <div className="aboutus-container">
      <div className="aboutus-header">
        <h2 className="aboutus-title">Meet our leadership</h2>
        <p className="aboutus-description">Meet our Developer Team</p>
      </div>
      <ul className="people-list">
        {people.map((person) => (
          <li key={person.name} className="person-item">
            <img alt={person.name} src={person.imageUrl} className="person-image" />
            <div className="person-details">
              <h3 className="person-name">{person.name}</h3>
              <p className="person-role">{person.role}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
