import React, { FC, useState } from "react";
import { useHistory } from "react-router";
import RedButton from "../../components/style/RedButton.style";
import { CurrentUserDocument, useSignInMutation } from "../../graphql/generated";
import { Form } from "./LoginPage.style";


const LoginPage: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const [signIn, { data }] = useSignInMutation({
    refetchQueries: [{ query: CurrentUserDocument }]
  })

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await signIn({
      variables: {
        email,
        password
      }
    });
    setEmail('');
    setPassword('');
    history.push('/');
  }

  const error =
    data?.authenticateUserWithPassword.__typename ===
      'UserAuthenticationWithPasswordFailure'
      ? data?.authenticateUserWithPassword
      : undefined;


  return (
    <Form method="POST" onSubmit={handleSubmit}>
      <h2>Sign Into Your Account</h2>
      <span>{error?.message}</span>
      <fieldset>
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            name="password"
            placeholder="Password"
            autoComplete="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <RedButton type="submit">Sign In!</RedButton>
      </fieldset>
    </Form>
  )
}

export default LoginPage;