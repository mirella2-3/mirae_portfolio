import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`

  ${reset}
  /* other styles */
  
  body {
    font-size: 16px;
    line-height: 1.7;
    font-family: 'Pretendard','Noto Sans KR', sans-serif;
    color:#515151;
  }
  
  a {
    text-decoration: none;
    color:#515151; 
  }
  li { list-style:none }
  img { vertical-align: top; }
  
  
  .inner { width:1600px; margin:auto; box-sizing:border-box; position:relative }
  .main { width: 100%; }
  .main h2 { text-align: center; font-size: 40px;   margin-bottom: 80px; }
   button { border:none; cursor: pointer;
    font-family: 'Pretendard','Noto Sans KR', sans-serif; }

 /* @font-face {
  font-family: 'Quentin';
  src: url('/fonts/Quentin.woff2') format('woff2');
  font-weight: normal;
  font-style: normal;
} */
@font-face {
  font-family: 'EB Garamond';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('https://fonts.gstatic.com/s/ebgaramond/v30/SlGUmQSNjdsmc35JDF1K5GR1SDk_YAPIlWk.woff2') format('woff2');
}
@font-face {
  font-family: 'EB Garamond';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url('https://fonts.gstatic.com/s/ebgaramond/v30/SlGUmQSNjdsmc35JDF1K5GR1SDk_YAPIlWk.woff2') format('woff2');
}
@font-face {
  font-family: 'EB Garamond';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url('https://fonts.gstatic.com/s/ebgaramond/v30/SlGUmQSNjdsmc35JDF1K5GR1SDk_YAPIlWk.woff2') format('woff2');
}

@font-face {
  font-family: 'EB Garamond';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url('https://fonts.gstatic.com/s/ebgaramond/v30/SlGJmQSNjdsmc35JDF1K5GzObSwSQgjir2C-.woff2') format('woff2');
}

@font-face {
  font-family: 'EB Garamond';
  font-style: normal;
  font-weight: 800;
  font-display: swap;
  src: url('https://fonts.gstatic.com/s/ebgaramond/v30/SlGKmQSNjdsmc35JDF1K5G3LRSwSQgjiq2B.woff2') format('woff2');
}
/* 
@font-face {
    font-family: 'Pretendard';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Thin.woff') format('woff');
    font-weight: 100;
    font-display: swap;
}

@font-face {
    font-family: 'Pretendard';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-ExtraLight.woff') format('woff');
    font-weight: 200;
    font-display: swap;
}

@font-face {
    font-family: 'Pretendard';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Light.woff') format('woff');
    font-weight: 300;
    font-display: swap;
}

@font-face {
    font-family: 'Pretendard';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-display: swap;
}

@font-face {
    font-family: 'Pretendard';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Medium.woff') format('woff');
    font-weight: 500;
    font-display: swap;
}

@font-face {
    font-family: 'Pretendard';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-SemiBold.woff') format('woff');
    font-weight: 600;
    font-display: swap;
}

@font-face {
    font-family: 'Pretendard';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Bold.woff') format('woff');
    font-weight: 700;
    font-display: swap;
}

@font-face {
    font-family: 'Pretendard';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-ExtraBold.woff') format('woff');
    font-weight: 800;
    font-display: swap;
}

@font-face {
    font-family: 'Pretendard';
    src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Black.woff') format('woff');
    font-weight: 900;
    font-display: swap;
} */
/* 전역 기본 폰트 적용 */
body {
  font-family: 'Pretendard', sans-serif;
}



  /* 기본 글로벌 스타일 */
  :root {
    --main-font: 'Pretendard','YUniverse-B', sans-serif;
  }

  html, body {
    overflow-x: hidden;  /* ✅ 가로 스크롤 제거 */
    width: 100%;
  }
`;

export default GlobalStyle;
