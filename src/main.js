import './style.css'

const projects = [
  {
    number: '01',
    type: '수업 연구',
    title: '질문에서 시작하는 수학 수업',
    description: '학생의 질문이 탐구와 수학적 설명으로 이어지는 수업을 설계하고 기록합니다.',
    linkLabel: '프로젝트 링크 추가',
  },
  {
    number: '02',
    type: '디지털 탐구',
    title: '도구와 함께 발견하는 함수의 세계',
    description: '디지털 도구를 활용해 표현을 바꾸어 보고, 개념을 스스로 연결하는 경험을 만듭니다.',
    linkLabel: '프로젝트 링크 추가',
  },
  {
    number: '03',
    type: '교사 공동 연구',
    title: '함께 성장하는 수학 교실',
    description: '수업을 나누고 성찰하며 교사와 학생 모두의 배움이 확장되는 방법을 탐색합니다.',
    linkLabel: '프로젝트 링크 추가',
  },
]

const projectCards = projects.map((project) => `
  <article class="project-card reveal">
    <div class="project-card__top"><span>${project.type}</span><span class="project-number">${project.number}</span></div>
    <div class="project-card__body">
      <h3>${project.title}</h3>
      <p>${project.description}</p>
    </div>
    <a class="project-link" href="#contact" aria-label="${project.linkLabel}: ${project.title}">
      ${project.linkLabel}<span aria-hidden="true">↗</span>
    </a>
  </article>
`).join('')

document.querySelector('#app').innerHTML = `
  <header class="site-header">
    <a class="wordmark" href="#home" aria-label="최예원 페이지 맨 위로">YE<span>.</span></a>
    <nav class="main-nav" aria-label="주요 메뉴">
      <a href="#story">나의 이야기</a>
      <a href="#research">연구 관심사</a>
      <a href="#projects">프로젝트</a>
    </nav>
    <a class="header-contact" href="#contact">연락하기 <span aria-hidden="true">↗</span></a>
  </header>

  <main>
    <section class="hero section-wrap" id="home" aria-labelledby="hero-title">
      <div class="hero-copy">
        <p class="eyebrow"><span class="status-dot"></span> MATHEMATICS TEACHER · EXPLORER</p>
        <h1 id="hero-title">교실에서 질문하고,<br />연구로 가능성을 넓히는<br /><span>수학교사 최예원</span></h1>
        <p class="hero-intro">수학을 함께 생각하고 발견하는 시간 속에서<br class="desktop-only" /> 학생의 가능성과 수업의 다음 장면을 탐구합니다.</p>
        <div class="hero-actions">
          <a class="button button--primary" href="#story">나의 이야기 <span aria-hidden="true">↓</span></a>
          <a class="button button--quiet" href="#projects">연구 및 프로젝트 <span aria-hidden="true">↗</span></a>
        </div>
        <div class="hero-note"><span class="note-rule"></span> 매일의 수업에서 더 나은 질문을 찾습니다.</div>
      </div>
      <div class="hero-art" aria-label="좌표와 그래프, 기하 도형을 표현한 수학 일러스트" role="img">
        <div class="art-label art-label--top">y = f(x)</div>
        <div class="art-label art-label--side">탐구의 좌표</div>
        <svg class="math-art" viewBox="0 0 520 520" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <defs>
            <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse"><path d="M32 0H0V32" stroke="#DDE3EA" stroke-width="1"/></pattern>
            <linearGradient id="area" x1="180" y1="130" x2="380" y2="390" gradientUnits="userSpaceOnUse"><stop stop-color="#9DBBFF" stop-opacity=".42"/><stop offset="1" stop-color="#DCE7FF" stop-opacity=".08"/></linearGradient>
          </defs>
          <circle cx="260" cy="260" r="213" fill="#F4F7FF"/>
          <circle cx="260" cy="260" r="177" stroke="#E7ECF5" stroke-dasharray="3 7"/>
          <rect x="84" y="84" width="352" height="352" rx="18" fill="url(#grid)"/>
          <path d="M115 352H410M156 394V112" stroke="#9BA9BC" stroke-width="1.5" stroke-linecap="round"/>
          <path d="M399 346L410 352L399 358M150 123L156 112L162 123" stroke="#9BA9BC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M156 339C204 334 217 286 247 254C278 222 291 177 332 171C357 168 372 190 398 195V352H156V339Z" fill="url(#area)"/>
          <path d="M156 339C204 334 217 286 247 254C278 222 291 177 332 171C357 168 372 190 398 195" stroke="#3267E9" stroke-width="4" stroke-linecap="round"/>
          <path d="M156 254H247M247 254V352" stroke="#99B2EF" stroke-width="1.5" stroke-dasharray="5 6"/>
          <circle cx="247" cy="254" r="7" fill="white" stroke="#3267E9" stroke-width="3"/>
          <path d="M337 104L383 150L337 196L291 150L337 104Z" fill="white" stroke="#D5DFF2" stroke-width="1.5"/>
          <path d="M337 104V196M291 150H383" stroke="#D5DFF2" stroke-width="1.5"/>
          <circle cx="337" cy="150" r="7" fill="#FFB76B"/>
          <circle cx="137" cy="188" r="23" fill="white" stroke="#D5DFF2" stroke-width="1.5"/>
          <path d="M137 173V203M122 188H152" stroke="#3267E9" stroke-width="2" stroke-linecap="round"/>
          <text x="399" y="378" fill="#718099" font-size="14" font-family="sans-serif">x</text>
          <text x="143" y="105" fill="#718099" font-size="14" font-family="sans-serif">y</text>
          <text x="258" y="279" fill="#3267E9" font-size="13" font-family="sans-serif">(a, f(a))</text>
        </svg>
        <div class="art-caption"><span class="caption-mark">∑</span><span>질문에서 시작해<br /><strong>가능성으로 이어지는 수업</strong></span></div>
        <span class="orbit orbit--one" aria-hidden="true"></span><span class="orbit orbit--two" aria-hidden="true"></span>
      </div>
      <a class="scroll-cue" href="#story"><span></span> 아래로 탐색하기</a>
    </section>

    <section class="story-section section-wrap" id="story" aria-labelledby="story-title">
      <div class="section-heading reveal">
        <p class="eyebrow">MY TEACHING PHILOSOPHY</p>
        <h2 id="story-title">수학을 배우는 순간,<br /><span>학생의 생각이 시작됩니다.</span></h2>
        <p class="section-lead">정답을 찾는 것에서 한 걸음 더 나아가, 생각하고 설명하고 연결하는 배움을 함께 만들어 갑니다.</p>
      </div>
      <div class="philosophy-grid">
        <article class="philosophy-card reveal"><span class="mini-icon mini-icon--circle">?</span><span class="card-index">01 / 출발</span><h3>학생의 생각에서<br />출발하는 수업</h3><p>이미 알고 있는 것과 궁금한 점을 살피며 배움의 출발점을 찾습니다.</p></article>
        <article class="philosophy-card reveal"><span class="mini-icon mini-icon--lines">↗</span><span class="card-index">02 / 과정</span><h3>탐구와 대화로<br />깊어지는 수학</h3><p>다양한 풀이를 비교하고 서로의 생각을 설명하며 개념을 만들어 갑니다.</p></article>
        <article class="philosophy-card reveal"><span class="mini-icon mini-icon--shape">△</span><span class="card-index">03 / 연결</span><h3>세상을 수학으로<br />모델링하는 경험</h3><p>현실의 문제를 수학의 언어로 표현하고, 해석과 적용을 경험합니다.</p></article>
        <article class="philosophy-card reveal"><span class="mini-icon mini-icon--spark">✳</span><span class="card-index">04 / 질문</span><h3>다음 생각을 여는<br />학생의 질문</h3><p>좋은 질문이 또 다른 질문으로 이어지는 교실을 지향합니다.</p></article>
      </div>
    </section>

    <section class="research-section" id="research" aria-labelledby="research-title">
      <div class="section-wrap research-inner">
        <div class="research-heading reveal"><p class="eyebrow">WHAT I EXPLORE</p><h2 id="research-title">수업의 가능성을<br />넓히는 질문들</h2><p>교실의 작은 장면을 연구의 질문으로 이어가며, 배움의 새로운 가능성을 찾아갑니다.</p><span class="formula" aria-hidden="true">A → B → ?</span></div>
        <div class="interest-list">
          <article class="interest-item reveal"><span class="interest-number">01</span><div><h3>수학교육과 교사교육</h3><p>교사의 전문성과 함께 배우는 공동체를 탐구합니다.</p></div><span class="interest-symbol" aria-hidden="true">↗</span></article>
          <article class="interest-item reveal"><span class="interest-number">02</span><div><h3>AI·디지털 도구와 수학 수업</h3><p>도구가 학생의 탐구와 표현을 어떻게 넓히는지 살펴봅니다.</p></div><span class="interest-symbol" aria-hidden="true">⌘</span></article>
          <article class="interest-item reveal"><span class="interest-number">03</span><div><h3>학생의 수학적 사고와 학습 과정</h3><p>학생이 생각을 만들고 개념에 도달하는 과정을 들여다봅니다.</p></div><span class="interest-symbol" aria-hidden="true">∴</span></article>
        </div>
      </div>
      <div class="coordinate-decoration" aria-hidden="true"><span>y</span><i></i><b></b><em>x</em></div>
    </section>

    <section class="projects-section section-wrap" id="projects" aria-labelledby="projects-title">
      <div class="projects-heading reveal"><div><p class="eyebrow">IN THE CLASSROOM & BEYOND</p><h2 id="projects-title">수업과 연구 프로젝트</h2></div><p>아이디어를 수업으로, 수업의 경험을 다음 연구로 연결합니다.</p></div>
      <div class="project-grid">${projectCards}</div>
      <p class="edit-note"><span aria-hidden="true">✳</span> 프로젝트 제목과 설명, 링크는 실제 내용에 맞게 수정해 주세요.</p>
    </section>

    <section class="contact-section" id="contact" aria-labelledby="contact-title">
      <div class="section-wrap contact-inner reveal">
        <div><p class="eyebrow">LET'S KEEP EXPLORING</p><h2 id="contact-title">함께 나눌 질문이<br />있으신가요?</h2><p class="contact-copy">수업과 연구에 관한 대화와 협업을 기다립니다.</p></div>
        <div class="contact-links">
          <div class="contact-row"><span>EMAIL</span><span class="placeholder">이메일 주소를 입력해 주세요</span></div>
          <div class="contact-row"><span>LINKS</span><span class="placeholder">연구실·블로그 등 링크를 추가해 주세요</span></div>
          <p class="contact-note">실제 연락처와 사이트 주소를 이곳에 입력해 주세요.</p>
        </div>
      </div>
    </section>
  </main>
  <footer class="site-footer section-wrap"><a class="wordmark" href="#home">YE<span>.</span></a><p>수학교사 최예원 <span>·</span> 교실에서 가능성을 탐구합니다.</p><a href="#home" class="back-top">맨 위로 ↑</a></footer>
`

const revealItems = document.querySelectorAll('.reveal')
if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.12, rootMargin: '0px 0px -36px 0px' })
  revealItems.forEach((item) => revealObserver.observe(item))
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'))
}
