import React from "react";
import {
  Container,
  Clock,
  SearchContainer,
  Search,
  SearchButton,
  SearchButtonIcon,
  SearchEngine,
  ArticleList,
  Article,
  Source,
  Title,
  Description,
  Overflow,
  ArticleImage,
  Footer,
  ShortcutList,
  Shortcut
} from "./Content.styles";

export const Content = () => {
  return (
    <Container>
      <Clock>10:45 AM</Clock>

      <SearchContainer>
        <SearchEngine />
        <Search type="text" placeholder="Search the web" />
        <SearchButton>
          <SearchButtonIcon />
        </SearchButton>
      </SearchContainer>

      <ArticleList>
        <Article>
          <ArticleImage />
          <Source>The Verge</Source>
          <Overflow>
            <Title>
              Governments are using cellphone location data to manage the
              coronavirus
            </Title>
            <Description>
              South Korea’s map provides public information about patients with
              the novel coronavirus, EU countries are monitoring people’s
              movements, and the US is reportedly in talks with big tech
              companies about how to use cellphone location data to track the
              pandemic.
            </Description>
          </Overflow>
          <Footer>
            <p>7 Minutes Ago — Charlie Hall</p>
          </Footer>
        </Article>
        <Article>
          <ArticleImage />
          <Source>The Verge</Source>
          <Overflow>
            <Title>
              New study aims to use health data from a smart ring to identify
              coronavirus symptoms
            </Title>
            <Description>
              More than 2,000 emergency medical workers in San Francisco will
              wear Oura Rings as part of a study researching ways to better
              identify early symptoms of the novel coronavirus. The study is
              also open up to anyone who owns an Oura Ring.
            </Description>
          </Overflow>
          <Footer>
            <p>7 Minutes Ago — Charlie Hall</p>
          </Footer>
        </Article>
        <Article>
          <ArticleImage />
          <Source>The Verge</Source>
          <Overflow>
            <Title>
              Animal Crossing: New Horizons local multiplayer issues locking
              progress
            </Title>
            <Description>
              Players in Animal Crossing: New Horizons have discovered that the
              game behaves strangely when you create multiple accounts. For
              instance, only the first player gets access to certain recipes,
              like the flimsy axe. Backlash has turned into a review bombing
              camp…
            </Description>
          </Overflow>
          <Footer>
            <p>7 Minutes Ago — Charlie Hall</p>
          </Footer>
        </Article>
      </ArticleList>

      <ShortcutList>
        <Shortcut>
          <p>(2) YouTube</p>
        </Shortcut>
        <Shortcut>
          <p>Dribbble - Discover the...</p>
        </Shortcut>
        <Shortcut>
          <p>Twitter</p>
        </Shortcut>
      </ShortcutList>
    </Container>
  );
};
