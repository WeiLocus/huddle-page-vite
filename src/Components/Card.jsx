import styled from "styled-components";

export const StyledCard = styled.div`
  display: flex;
  align-items: center;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0,0,0,0.15);
  margin: 40px 0;
  padding: 60px;
  background-color: #fff;
  flex-direction: ${ ({layout}) => layout || 'row'};

  img {
    width: 80%;
  }

  & > div {
    flex: 1;
  }

  @media (max-width: ${ ({theme}) => theme.mobile}) {
    flex-direction: column;
  }
`

// 解構的寫法父元件就不用寫很多props，在父元件寫<Card key={item.id} item={item}這樣就好
// 子元件的props這樣寫：export default function Card ({ item: {id,title, body, image} })
export default function Card ({id, title, body, image}) {
  return (
    <StyledCard layout={ id % 2 === 0 && 'row-reverse'}>
      {/* content */}
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
      {/* image */}
      <div>
        <img src={`./images/${image}`} alt="{title}"/>
      </div>
    </StyledCard>
  )
}