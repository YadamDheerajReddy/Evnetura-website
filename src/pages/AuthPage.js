import React, { useState } from 'react';
import Header from '../components/Header';
import AuthSectionTitle from '../components/AuthSectionTitle';
import AuthToggle from '../components/AuthToggle';
import LoginForm from '../components/LoginForm';
import SignupForm from '../components/SignupForm';
import SocialMediaOptions from '../components/SocialMediaOptions';
import AuthLinks from '../components/AuthLinks';
import Footer from '../components/Footer';
// Other components like Additional Links, Call to Action, etc., will be imported here

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div>
      <Header />
      <AuthSectionTitle isLogin={isLogin} />
      <AuthToggle isLogin={isLogin} setIsLogin={setIsLogin} />
      {isLogin ? <LoginForm /> : <SignupForm />}
      <SocialMediaOptions />
      <AuthLinks isLogin={isLogin} setIsLogin={setIsLogin} />
      {/* Other sections like Additional Links, Call to Action, etc., will go here */}
      <Footer />
    </div>
  );
};

export default AuthPage;
