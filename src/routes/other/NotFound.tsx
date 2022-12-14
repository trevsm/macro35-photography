import Page from "../../partials/Page";

export default function NotFound() {
  return (
    <Page header={{ staticBg: true }}>
      <h1>Not Found</h1>
      <p>
        <i>Sorry, the page you are looking for does not exist.</i>
      </p>
    </Page>
  );
}
