# baemin-seokhoji
배민 회원가입 서비스


## 구현

### 메인 페이지
<div style="display:flex; flex-direction: column;">
    <div>
        <img width="245" src="https://user-images.githubusercontent.com/60173534/178182885-daeeb828-3cab-4743-82e5-28c6a7fcba85.png">
        <img width="245" src="https://user-images.githubusercontent.com/60173534/178182930-3b0a68d1-4c88-44db-a463-c0c55a1aebbd.png">
    </div>
  <br/>
</div>

로그인 전: 로그인 해주세요 버튼 클릭시 로그인 페이지로 이동
로그인 후: 유저 닉네임 봔한, 로그아웃 클릭시 세션 초기화

<br/>

### 로그인 페이지
<div style="display:flex; flex-direction: column;">
    <div>
        <img width="245" src="https://user-images.githubusercontent.com/60173534/178183172-5aa80c59-a3ca-4d9b-a3a4-cbcca298b221.png">
        <img width="245" src="https://user-images.githubusercontent.com/60173534/178183221-206a22d4-88a3-490c-939d-17d315dcec03.png">
        <img width="245" src="https://user-images.githubusercontent.com/60173534/178183321-09b5bee9-2de9-4aa3-b51a-731f0212d597.png">
        <img width="245" src="https://user-images.githubusercontent.com/60173534/178183273-1f3dc297-2027-4c62-a0b4-c144ba9abaa4.png">
    </div>
  <br/>
</div>


(이메일/비밀번호)를 입력하세요 : 각 필드를 입력하지 않았을 클라이언트 단에서 오류 출력   
(이메일/비밀번호)가 틀립니다: DB겁색 시 해당 유저의 정보가 존재하지 않을 경우 서버 단에서 오류 반환


<br />


### 회원가입 페이지 - 동의

<div style="display:flex; flex-direction: column;">
    <div>
        <img width="245" src="https://user-images.githubusercontent.com/60173534/178183642-8e050dd8-16ff-45c0-bd69-6715230b98d4.png">
    </div>
  <br/>
</div>

<br/>

필수동의: 필수 동의 사항을 모두 체크했을 경우 버튼 활성화   
전체동의: 전체 동의 클릭시 모든 체크박스가 체크되며 버튼 활성화


<br/>


### 회원가입 - 인증

<div style="display:flex; flex-direction: column;">
    <div>
        <img width="245" src="https://user-images.githubusercontent.com/60173534/178183785-ac69dfd0-7878-4cce-832e-d9a445b9f5a5.png">
        <img width="245" src="https://user-images.githubusercontent.com/60173534/178183808-06595c0a-e1e2-4d5a-86de-002d4dac7d19.png">
    </div>
  <br/>
</div>

<br/>

휴대전화 번호: ddd-dddd-dddd 형식으로 자동 Parsing, 형식이 올바르지 않다면 에러 반환   
휴대전화 번호 인증 완료시 2초후 인증번호 발급

<br/>

### 회원가입 - 상세

<div style="display:flex; flex-direction: column;">
    <div>
        <img width="245" src="https://user-images.githubusercontent.com/60173534/178184122-4b2f9c20-05ba-4cf4-b74f-8bd8191864b2.png">
        <img width="245" src="https://user-images.githubusercontent.com/60173534/178184140-561afa85-647a-4b0e-ba82-0fb9c176f56d.png">
        <img width="245" src="https://user-images.githubusercontent.com/60173534/178184151-9510f545-9fad-4322-96cd-9c0f4bc8b73f.png">
    </div>
  <br/>
</div>

이메일: 형식에 맞지않는 텍스트 입력시 에러 반환, 통과시 상세 정보 입력 폼 활성화   
패스워드: 반복, 중복, 10자 이하 텍스트 입력시 에러 반환    
닉네임: 5자 이하 텍스트 입력시 에러 반환    
생일: yyyy-mm-dd 형식으로 자동 parsing, 형식에 맞지 않는 텍스트 입력시 에러 반환, 

회원가입: 모든 정보가 올바르게 입력됐을 경우 상단 Header 저장 버튼 활성화 및 회원가입 로직 실행

















