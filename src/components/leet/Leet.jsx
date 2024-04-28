import React from 'react';
import './Leet.css'; // CSS for styling

const Leet = () => {
  return (
    <section className="profile-links-section"> {/* New section */}
      <h1>MY DEVELOPER PROFILES</h1> {/* Section heading */}
      <div className="profile-links">
        <a
          href="https://leetcode.com/u/2021bec070/" // Replace with your LeetCode profile
          target="_blank"
          rel="noopener noreferrer"
          className="profile-link"
        >
        
          Visit my LeetCode Profile
        </a>
        <a
          href="https://www.geeksforgeeks.org/user/2021beaw34/?utm_source=geeksforgeeks&utm_medium=my_profile&utm_campaign=auth_user" // Replace with your GitHub profile
          target="_blank"
          rel="noopener noreferrer"
          className="profile-link"
        >
        Visit my GeeksforGeeks Profile
        </a>
      </div>
    </section>
  );
};

export default Leet;
