---
home: true
# navbar: false
sidebar: true
cards:
- fe
- note
- nodejs
- git
- webpack
- electron
- readcode
- book

---

<HomeCardContainer>
<HomeCard v-for="card in $page.frontmatter.cards" :text="card" :key="card"/>
</HomeCardContainer>
<!-- <HomeCard v-for="card in $page.frontmatter.cards" :text="card" :key="card"/> -->
