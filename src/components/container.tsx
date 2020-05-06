import React from 'react';
import { Global, css } from "@emotion/core"

export default ({ children }) => (
  <div>
    <Global
      styles={css`
          body {
  font-family: 'Playfair Display', serif;
  line-height: 1.65;
  color: #373F49;
  background: #FFF;
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  left: 0;
  top: 0;
  font-size: 100%;
}

div {
  vertical-align: top;
}

p {
  font-family: 'Nunito', sans-serif;
  font-size: 0.75em;
  color: #FFFFFF;
  letter-spacing: 2px;
  line-height: 2em;;
}

img {
  display: block;
  width: 100%;
}

h1 {
  font-size: 4.5em;
  font-weight: normal;
  font-family: 'Playfair Display', serif;
  letter-spacing: 1.0px;;
  line-height: 1.0em;
  text-align: center;
  margin: 0;
}

h2 {
  font-size: 2.65em;
  font-weight: normal;
  font-family: 'Playfair Display', serif;
  line-height: 1.25em;
  margin: 0;
}

h3 {
  font-size: 1.5em;
  font-weight: normal;
  font-family: 'Playfair Display', serif;
  line-height: 1.0em;
  letter-spacing: 1.0px;
  margin: 0;
}

h4 {
  font-size: 0.75em;
  font-weight: 600;
  font-family: 'Nunito', sans-serif;
  text-transform: uppercase;
  letter-spacing: -0.5px;
  margin: 0;
}

a {
  color: currentColor;
}

.wrapper {
  width: calc(100% - 10vmin);
  margin: 0 auto;
  padding: 5vmin 0;
}

.dark-text {
  color: #484848;
}

.white-text{
  color: #FFFFFF;
}

/* POSITIONING */

.left {
  text-align: left;
}

.right {
  text-align: right;
}

.center {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}

.justify {
  text-align: justify;
}

/* ==== GRID SYSTEM ==== */

.container {
  width: 90%;
  margin-left: auto;
  margin-right: auto;
}

.row {
  position: relative;
  width: 100%;
}

.row [class^="col"] {
  margin: 0.5rem 0%;
  min-height: 0.125rem;
}

.col1,
.col2,
.col3,
.col4,
.col5,
.col6,
.col7,
.col8,
.col9,
.col10,
.col11,
.col12 {
  width: 96%;
  display: inline-block;
}

.col1sm {
  width: 4.33%;
}

.col2sm {
  width: 12.66%;
}

.col3sm {
  width: 21%;
  padding-right: 4%
}

.col4sm {
  width: 29.33%;
}

.col5sm {
  width: 37.66%;
}

.col6sm {
  width: 46%;
}

.col7sm {
  width: 54.33%;
}

.col8sm {
  width: 62.66%;
}

.col9sm {
  width: 71%;
}

.col10sm {
  width: 79.33%;
}

.col11sm {
  width: 87.66%;
}

.col12sm {
  width: 96%;
}

.row::after {
	content: "";
	display: table;
	clear: both;
}

.hidden-sm {
  display: none;
}

@media only screen and (min-width: 33.75em) {  /* 540px */
  .container {
    width: 80%;
  }
}

@media only screen and (min-width: 45em) {  /* 720px */
  .col1 {
    width: 4.33%;
  }

  .col2 {
    width: 12.66%;
  }

  .col3 {
    width: 21%;
    padding-right: 4%;
  }

  .col4 {
    width: 33.33%;
  }

  .col5 {
    width: 37.66%;
  }

  .col6 {
    width: 46%;
  }

  .col7 {
    width: 54.33%;
  }

  .col8 {
    width: 66.66%;
  }

  .col9 {
    width: 71%;
  }

  .col10 {
    width: 79.33%;
  }

  .col11 {
    width: 87.66%;
  }

  .col12 {
    width: 96%;
  }

  .hidden-sm {
    display: block;
  }
}

@media only screen and (min-width: 60em) { /* 960px */
  .container {
    width: 75%;
    max-width: 90rem;
  }
}

/**
 * article grid
 */
.article-list {
  margin: 0;
  padding: 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 5vmin;
}

/**
 *
 */
.section-headline {
  padding: 0 0 0.4em 0;
  margin: 0 0 5vmin 0;
  border-bottom: 1px solid #ddd;
}

/**
 *
 */
.list-inline {
  margin: 0;
  padding: 0;
  list-style: none;
}

.list-inline li {
  display: inline-block;
}

.eyebrow {
  font-family: 'Nunito', sans-serif;
  font-size: 0.625em;
  text-align: center;
  margin: 0 auto;
  display: block;
  font-weight: 600;
  text-transform: uppercase;
  padding: 20px 25px;
  letter-spacing: 2px;
}

.primary-button {
  background-color: #FFFFFF;
  border: none;
  font-family: 'Nunito', sans-serif;
  font-size: 0.75em;
  color: #464646;
  text-align: center;
  margin: 0 auto;
  display: block;
  font-weight: 600;
  text-transform: uppercase;
  padding: 20px 25px;
  letter-spacing: 2px;
}

.outline {
  background-color: transparent;
  border: #FFFFFF solid 0.5px;
  color: #FFFFFF;
}

.dark-outline {
  background-color: transparent;
  border: #464646 solid 0.5px;
  color: #464646;
}
        `}
    />
    <div>
      {children}
    </div>
  </div>
  
)
