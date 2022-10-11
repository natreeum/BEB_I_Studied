import { useState } from "react";
import images from "../data/images"; // 제공되는 이미지를 이용하세요

function Gallery() {
  // console.log(images) // npm start를 통해 앱을 열어, 개발자 콘솔을 통해 이미지 목록을 확인할 수 있습니다
  const [list, setList] = useState(images);
  const [img, setImg] = useState(images[0]);

  const handleClick = (image) => {
    // TIP: parameter로 이미지가 전달되어야 하며, 이벤트 객체는 쓰지 않습니다
    // TODO
    setImg(images[image.target.id - 1]);
  };
  const handleSelect = (choice) => {
    if (choice.target.value === "전체보기") setList(images);
    else {
      const filteredList = images.filter((e) => {
        if (e.category === choice.target.value) return true;
      });
      setList(filteredList);
    }
  };
  const categories = [
    ...new Set(
      images.map((e) => {
        return e.category;
      })
    ),
  ];
  const options = categories.map((e) => {
    return <option value={e}>{e}</option>;
  });

  return (
    <div>
      <h2>전체 목록</h2>
      <span>필터</span>
      <select onChange={handleSelect}>
        <option value="전체보기">전체보기</option>
        {options}
      </select>
      <div id="list" className="flex">
        {/* TODO */}
        {list.map((e) => {
          return (
            <img
              src={e.src}
              width="100px"
              id={e.id}
              onClick={handleClick}
              class="thumbnail"
            />
          );
        })}
      </div>

      <div>
        {/* TODO: 아래 하드코딩된 내용 대신에, 목록 선택에 따른 이미지를 표시하세요 */}
        <h2>{img.alt}</h2>
        <img src={img.src} id={img.id} alt={img.alt} />
      </div>
    </div>
  );
}

export default Gallery;
