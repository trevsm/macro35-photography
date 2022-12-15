import styled from "styled-components";

const StyledCard = styled.div`
  margin: 1rem;
  h3 {
    margin-top: 1rem;
  }
  p {
    max-width: 330px;
  }
  button {
    padding: 0.5rem 1rem;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  }
`;

export default function PostCard({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) {
  return (
    <StyledCard>
      <div className="main">
        <div className="image">
          <img src={image} alt={title} />
        </div>
        <div className="content">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
        <button>View Post</button>
      </div>
    </StyledCard>
  );
}
