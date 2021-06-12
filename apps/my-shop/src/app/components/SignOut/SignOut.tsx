import { FC } from "react";
import { useSignOutMutation, CurrentUserDocument } from "../../graphql/generated";


const SignOut: FC = () => {
  const [signout] = useSignOutMutation({
    refetchQueries: [{ query: CurrentUserDocument }],
  });
  return (
    <button type="button" onClick={() => signout()}>
      Sign Out
    </button>
  );
}

export default SignOut;