---
home: true
navbar: false
cards:
- Node
- Webpack
- Vue
- AI
---

{{JSON.stringify($page.cards)}}
<HomeCardContainer>
    <HomeCard v-for="card in $page.frontmatter.cards" :text="card" :key="card"/>
</HomeCardContainer>