import React from 'react';
import Header from '@features/header/header';
import TabItem from '@features/tab-item/tab-item';
import LoginForm from '@features/login-form/login-form';

const LoginPage = () => {
  return (
    <div className="page page--gray page--login">
      <Header/>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
         
          <LoginForm/>

          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <TabItem name={'Amsterdam'}/>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
};

export default LoginPage;