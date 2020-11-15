import React from "react";

function Girl({ name, pic }) {
  return (
    <div>
      <h3>{name}... My girl... </h3>
      <img src={pic} alt={name} />
    </div>
  );
}

const girlgroups = [
  {
    id: 1,
    name: "IU",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/95/191215_TVN_%EC%A6%90%EA%B1%B0%EC%9B%80%EC%A0%84_%ED%98%B8%ED%85%94%EB%8D%B8%EB%A3%A8%EB%82%98_%ED%86%A0%ED%81%AC%EC%84%B8%EC%85%98_%EC%95%84%EC%9D%B4%EC%9C%A0_%286%29.jpg",
  },
  {
    id: 2,
    name: "IZ*ONE",
    image: "https://radiokorea.com/images/news/2020/06/08/345212/1.jpg",
  },
  {
    id: 3,
    name: "BLACKPINK",
    image:
      "https://cdnweb01.wikitree.co.kr/webdata/editor/202011/12/img_20201112113110_446a29bf.webp",
  },
  {
    id: 4,
    name: "IDLE",
    image:
      "https://xkxqjlzvieat874751.gcdn.ntruss.com/1/2020/cb69/1cb6904dfa5d3963e47c10b06e0356f7a8b670bf6ea3fe47ab6e73d7f2361b3d2_o_st.jpg",
  },
];
function App() {
  return (
    <div>
      {girlgroups.map((idol) => (
        <Girl key={idol.id} name={idol.name} pic={idol.image} />
      ))}
    </div>
  );
}

export default App;
