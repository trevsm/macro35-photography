import { useRouteError } from "react-router-dom";
import Page from "../../partials/Page";
import { Content } from "../../styles";

export default function ErrorPage() {
  const error: any = useRouteError();
  console.error(error);

  return (
    <Page>
      <Content>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </Content>
    </Page>
  );
}
