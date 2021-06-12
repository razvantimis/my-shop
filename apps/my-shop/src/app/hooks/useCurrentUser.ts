import { useCurrentUserQuery } from "../graphql/generated";

const useCurrentUser = () => {
  const { data } = useCurrentUserQuery();
  return data?.authenticatedItem;
}
export default useCurrentUser