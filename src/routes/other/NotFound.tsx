import Page from "../../partials/Page";
import { Content } from "../../styles";

export default function NotFound() {
  return (
    <Page header={{ staticBg: true }}>
      <Content>
        <h1>Not Found</h1>
        <p>
          <i>Sorry, the page you are looking for does not exist.</i>
        </p>
      </Content>
    </Page>
  );
}
