

// const getImg = `https://api.unsplash.com/photos/random/?client_id=${API_UNSPLASH_KEY}`;
// const figure = document.querySelector("figure");
// const loading = document.querySelector(".loading");
// 브라우저에서 쓸수 있게 변환 해주어야한다 fetch 로 받아오는 거가능
// then 정상적으로 작동했다면 실행
//then은 자기 역할이 끝나면 뒤로 토스한다
//catch 데이터를 못찾아 왔다면 실행
//메서드 체인잉 깃법이라고 부름(체인 처럼 연결 되어 있어서)
//객체형태로 바꾸어 주어야한다
//git허브에 바로 올릴리면 아이디값에있는 개인정보까지 들어가기 때문에 환경변수를 만들어준다
// fetch(getImg)
//   .then((response) => response.json())
//   .then(({ urls: { full } }) => {
//     figure.style.backgroundImage = `url(${full})`;
//     loading.style.display = "none";
//   })
//   .catch((error) => {
//     // error 찍어내는 변수
//     console.error("이미지 로드 중 오류 발생!", error);
//   });

const frame = document.querySelector("section");
const lists = frame.querySelectorAll("article");
const audios = frame.querySelectorAll("audio");
const prev = document.querySelector(".btnPrev");
const next = document.querySelector(".btnNext");

// article rotation
const deg = 45;
let i = 0;
lists.forEach((list) => {
  const pic = list.querySelector(".pic");

  list.style.transform = `rotate(${i * deg}deg) translateY(-100vh)`;
  pic.style.backgroundImage = `url("./ufc-project/member${i + 1}.jpg")`;
  i++; 
});

let num = 0;
let active = 0;
const len = lists.length - 1;

const activation = (index, lists) => {
  lists.forEach((list) => {
    list.classList.remove("on");
  });
  lists[index].classList.add("on");
};

const initMusic = () => {
  audios.forEach((audio) => {
    audio.pause();
    audio.load();
    audio.parentElement.previousElementSibling.classList.remove("on");
  });
};

prev.addEventListener("click", () => {
  initMusic();
  num++;
  frame.style.transform = `rotate(${num * deg}deg)`;

  active === 0 ? (active = len) : active--;
  activation(active, lists);
});

next.addEventListener("click", () => {
  initMusic();
  num--;
  frame.style.transform = `rotate(${num * deg}deg)`;

  active === len ? (active = 0) : active++;
  activation(active, lists);
});


