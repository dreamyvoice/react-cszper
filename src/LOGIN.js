import React from 'react';

function About() {
  return (
    <>
      <div>
        <h1>로그인</h1>
      </div>
      <div>
        <button class="btn-facebook">페이스북으로 시작하기</button>
      </div>
      <div>
        <button class="btn-kakao">카카오톡으로 시작하기</button>
      </div>
      <form action="">
        <input type="text" placeholder="이메일"></input>
        <input type="passworld" placeholder="비밀번호"></input>
        <button>로그인</button>
      </form>
    </>
  );
}

export default About;
