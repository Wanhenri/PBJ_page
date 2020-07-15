import styled from "styled-components";
import { Card } from "../../objects/Card";


export const Section = styled.section`
  display: flex;
  flex-direction: column;
  padding-top: 0;
`;

export const Wrapper = styled.main`
  background-color: var(--color-fundo);
  /*background:linear-gradient(to bottom, black,var(--color-gradient-medium),var(--color-gardient-bottom)); */
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

//Config Card
export const DateBlogWrapper = styled.div`
  text-align: center;
  margin-bottom: 10px;
`;

export const DateBlog = styled.p`
  color: #6b6b6b;
  font-size: var(--size-small);
  line-height: 1.1em;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 5px;
`;

export const InfoBlogWrapper = styled.section`
  display: flex;
  padding-left: 30px;
  flex-direction: row;
`;

export const ReactionBlogWrapper = styled.section`
  display: flex;
  margin-left: 30px;
  margin-bottom: 10px;
  flex-direction: row;
`;

export const BlogContainer = styled.section`
  width: 100%;
  margin: 10px auto;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;

  ${Card} {
    flex: 1 0 30%;
  }
`;

export const Icon = styled.button`
  padding: 8px;
  background: none;
  border: none;
`;