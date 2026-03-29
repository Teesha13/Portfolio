import profilePic from '../assets/PICTURE.jpeg';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { PROFILE } from '../data/profile';

export default function Hero() {
  const [name, setName] = useState('Teesha Panchal');

  useEffect(() => {
    axios
      .get('http://localhost:3000/')
      .then((response) => setName(response.data))
      .catch((error) => {
        console.error('Error fetching name:', error);
      });
  }, []);

  return (
    <section id="hero" className="hero">
            <div className="hero-text">
                <h1>Hi, I'm <span>{name}</span></h1>
                <p>Technical Developer focused on the intersection of AI/ML workflows and modern web architecture.</p>
                <div className="hero-cta">
                  <a href="#contact" className="btn">Contact Me</a>
                  <a
                    href={PROFILE.resumePdf}
                    className="btn btn-outline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View resume (PDF)
                  </a>
                </div>
            </div>

            <div className="hero-img">
                <img src={profilePic} alt="Profile Photo"/> 
            </div>
    </section>
  );
}
