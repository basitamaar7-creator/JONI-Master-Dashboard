import React, { useState, useEffect } from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import NavBar from './components/NavBar/NavBar';
import VoiceAssistant from './features/voice-assistant/VoiceAssistant';
import ToDoList from './features/todo-list/ToDoList';
import Clock from './features/clock/Clock';
import JokeGenerator from './features/joke-generator/JokeGenerator';
import SocialMedia from './features/social-media/SocialMedia';
import BusinessDashboard from './features/business-dashboard/BusinessDashboard';
import Settings from './components/Settings/Settings';

function App() {
  const [activeFeature, setActiveFeature] = useState('dashboard');
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Load user from localStorage
    const savedUser = localStorage.getItem('joniUser');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const renderFeature = () => {
    switch (activeFeature) {
      case 'voice':
        return <VoiceAssistant />;
      case 'todo':
        return <ToDoList />;
      case 'clock':
        return <Clock />;
      case 'jokes':
        return <JokeGenerator />;
      case 'social':
        return <SocialMedia />;
      case 'business':
        return <BusinessDashboard />;
      case 'settings':
        return <Settings />;
      default:
        return <Dashboard setActiveFeature={setActiveFeature} />;
    }
  };

  return (
    <div className="App">
      <NavBar 
        activeFeature={activeFeature} 
        setActiveFeature={setActiveFeature}
        user={user}
      />
      <main className="main-content">
        {renderFeature()}
      </main>
    </div>
  );
}

export default App;
