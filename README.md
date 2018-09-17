---
home: true
# navbar: false
sidebar: true
cards:
- Note
- NodeJs
- Git
- Webpack

---

<HomeCardContainer>
<HomeCard v-for="card in $page.frontmatter.cards" :text="card" :key="card"/>
</HomeCardContainer>
<!-- <HomeCard v-for="card in $page.frontmatter.cards" :text="card" :key="card"/> -->
