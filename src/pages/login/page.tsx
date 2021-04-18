import React from 'react';
import Header from '@features/common/organisms/header/header';
import TabItem from '@features/tab-item/tab-item';
import LoginForm from '@features/login-form/login-form';
import { formSubmitted } from './model';


const LoginPage = () => {
  return (
    <div className="page page--gray page--login">
      <Header />
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <LoginForm submitHandle={submitHandle} />
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <TabItem name={"Amsterdam"} />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

const submitHandle = (evt: any) => {
  evt.preventDefault();

  const formData = new FormData(evt.target);
  formSubmitted({
    email: formData.get("email")?.toString() || " ",
    password: formData.get("password")?.toString() || " ",
  });
};

export default LoginPage;