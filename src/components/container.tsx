import { css, Global } from '@emotion/core'
import React from 'react'

/* eslint-disable react/display-name */
export default ({ children }) => (
  <div>
    <Global
      styles={css`
        body {
          font-family: 'Playfair Display', serif;
          line-height: 1.65;
          color: #373f49;
          background: #fff;
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
          font-family: 'Roboto', sans-serif;
          font-size: 0.75em;
          color: #fff;
          letter-spacing: 2px;
          line-height: 2em;
        }

        img {
          display: block;
          width: 100%;
        }

        h1 {
          font-size: 3em;
          font-weight: normal;
          font-family: 'Playfair Display', serif;
          letter-spacing: -2.5px;
          line-height: 1em;
          text-align: center;
          margin: 0;
        }

        h2 {
          font-size: 2.65em;
          font-weight: normal;
          font-family: 'Playfair Display', serif;
          letter-spacing: -2.5px;
          line-height: 1.25em;
          margin: 0;
        }

        h3 {
          font-size: 1.5em;
          font-weight: normal;
          font-family: 'Playfair Display', serif;
          line-height: 1em;
          letter-spacing: 1px;
          margin: 0;
        }

        h4 {
          font-size: 1.25em;
          font-weight: 600;
          font-family: 'Roboto', sans-serif;
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

        .darkText {
          color: #484848;
        }

        .whiteText {
          color: #fff;
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

        .container {
          width: 90%;
          margin-left: auto;
          margin-right: auto;
        }

        .row {
          position: relative;
          width: 100%;
        }

        .row [class^='col'] {
          margin: 0;
          min-height: 100%;
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
          width: 16.66%;
        }

        .col3sm {
          width: 21%;
          padding-right: 4%;
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
          content: '';
          display: table;
          clear: both;
        }

        .hidden-sm {
          display: none;
        }

        .hidden-lg {
          display: block;
        }

        .dark-text {
          color: #484848 !important;
        }

        .white-text {
          color: #fff !important;
        }

        @media only screen and (min-width: 33.75em) {
          /* 540px */
          .container {
            width: 80%;
          }
        }

        @media (max-width: 767px) {
          .container {
            column-count: 1;
            padding-left: 10%;
            width: 80%;
          }
        }

        @media only screen and (min-width: 45em) {
          /* 720px */
          .col1 {
            width: 4.33%;
          }

          .col2 {
            width: 16.66%;
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
            width: 50%;
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

          .hidden-lg {
            display: none;
          }
        }

        @media only screen and (min-width: 60em) {
          /* 960px */
          .container {
            width: 75%;
            max-width: 90rem;
          }
        }

        /**
 *
 */
        .section-headline {
          padding: 0 0 0.4em 0;
          margin: 0 0 5vmin 0;
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
          font-family: 'Roboto', sans-serif;
          font-size: 0.9em;
          text-align: center;
          margin: 0 auto;
          display: block;
          font-weight: 600;
          text-transform: uppercase;
          padding: 20px 25px;
          letter-spacing: 2px;
          color: #000;
        }

        .primaryButton {
          background-color: #fff;
          border: none;
          font-family: 'Roboto', sans-serif;
          font-size: 0.75em;
          color: #464646;
          text-align: center;
          text-decoration: none;
          margin: 0 auto;
          display: block;
          font-weight: 600;
          text-transform: uppercase;
          padding: 20px 25px;
          letter-spacing: 2px;
          cursor: pointer;
        }

        .outline {
          background-color: transparent;
          border: #fff solid 0.5px;
          color: #fff;
        }

        .darkOutline {
          background-color: transparent;
          border: #000 solid 0.5px;
          color: #000;
        }

        .lds-grid {
          display: block;
          margin: 0 auto;
          position: relative;
          width: 32px;
          height: 32px;
        }

        .lds-grid div {
          position: absolute;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #fff;
          animation: lds-grid 1.2s linear infinite;
        }

        .lds-grid div:nth-of-type(1) {
          top: 0;
          left: 0;
          animation-delay: 0s;
        }

        .lds-grid div:nth-of-type(2) {
          top: 0;
          left: 12px;
          animation-delay: -0.4s;
        }

        .lds-grid div:nth-of-type(3) {
          top: 0;
          left: 24px;
          animation-delay: -0.8s;
        }

        .lds-grid div:nth-of-type(4) {
          top: 12px;
          left: 0;
          animation-delay: -0.4s;
        }

        .lds-grid div:nth-of-type(5) {
          top: 12px;
          left: 12px;
          animation-delay: -0.8s;
        }

        .lds-grid div:nth-of-type(6) {
          top: 12px;
          left: 24px;
          animation-delay: -1.2s;
        }

        .lds-grid div:nth-of-type(7) {
          top: 24px;
          left: 0;
          animation-delay: -0.8s;
        }

        .lds-grid div:nth-of-type(8) {
          top: 24px;
          left: 12px;
          animation-delay: -1.2s;
        }

        .lds-grid div:nth-of-type(9) {
          top: 24px;
          left: 24px;
          animation-delay: -1.6s;
        }

        @keyframes lds-grid {
          0%,
          100% {
            opacity: 1;
          }

          50% {
            opacity: 0.5;
          }
        }

        .cls-1 {
          fill: #fff;
        }

        @keyframes moveMovie {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-300px);
          }
        }

        @keyframes moveMovieBack {
          from {
            transform: translateX(-300px);
          }

          to {
            transform: translateX(0);
          }
        }

        .form--input {
          width: calc(100% - 20px);
          height: 27px;
          background-color: transparent;
          border: none;
          border-bottom: solid 0.5px #333;
          font-size: 14px;
          color: #333;
          font-family: 'Roboto', sans-serif;
          margin: auto 0;
          margin-bottom: 30px;
          padding-bottom: 5px;

          &::placeholder {
            color: #b4b2b2;
            font-size: 14px;
            font-weight: 300;
            font-family: 'Playfair Display', serif;
          }

          @media (max-width: 767px) {
            width: 100%;
          }
        }

        .text-area {
          width: calc(100% - 20px);
          background-color: transparent;
          border: solid 0.5px #3333;
          font-size: 14px;
          font-family: 'Roboto', sans-serif;
          margin: auto 0;
          margin-bottom: 30px;
          padding-bottom: 5px;

          &::placeholder {
            color: #b4b2b2;
            font-size: 14px;
            font-weight: 300;
            font-family: 'Playfair Display', serif;
          }

          @media (max-width: 767px) {
            width: 98%;
          }
        }

        /* Customize the label (the container) */
        .input-container {
          display: block;
          position: relative;
          padding-left: 20px;
          margin-bottom: 20px;
          cursor: pointer;
          color: #333333;
          font-family: 'Roboto', sans-serif;
          font-size: 12px;
          font-weight: 100;
          font-weight: 100;
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }

        /* Hide the browser's default checkbox */
        .input-container input {
          position: absolute;
          opacity: 0;
          cursor: pointer;
          height: 0;
          width: 0;
        }

        /* Create a custom checkbox */
        .checkmark {
          position: absolute;
          top: 2px;
          left: 0;
          height: 12px;
          width: 12px;
          background-color: #eee;
        }

        /* On mouse-over, add a grey background color */
        .input-container:hover input ~ .checkmark {
          background-color: #ccc;
        }

        /* When the checkbox is checked, add a blue background */
        .input-container input:checked ~ .checkmark {
          background-color: #2196f3;
        }

        /* Create the checkmark/indicator (hidden when not checked) */
        .checkmark:after {
          content: '';
          position: absolute;
          display: none;
        }

        /* Show the checkmark when checked */
        .input-container input:checked ~ .checkmark:after {
          display: block;
        }

        /* Style the checkmark/indicator */
        .input-container .checkmark:after {
          left: 4px;
          top: 1px;
          width: 2px;
          height: 6px;
          border: solid white;
          border-width: 0 2px 2px 0;
          -webkit-transform: rotate(45deg);
          -ms-transform: rotate(45deg);
          transform: rotate(45deg);
        }
      `}
    />
    <div>{children}</div>
  </div>
)
