import { useRouteError } from "react-router-dom";
import Page from "../../partials/Page";

export default function ErrorPage() {
  const error: any = useRouteError();
  console.error(error);

  return (
    <Page>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </Page>
  );
}
