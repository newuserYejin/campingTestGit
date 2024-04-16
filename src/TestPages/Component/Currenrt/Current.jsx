import React from "react";
import { CurrentQuery } from "../../../TestHooks/CurrentQuery";
import "./Current.style.css";

const Current = ({ userLat, userLot }) => {
  const {
    data: apiData,
    isLoading,
    isError,
    error,
  } = CurrentQuery(userLat, userLot);
  console.log("apiData:", apiData?.data.response);

  let itemList = [];
  itemList = apiData?.data.response.body.items.item;
  console.log("itemList:", itemList);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (isError) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      {apiData.data.response.body.items.length === 0 ? (
        <h1>추천 리스트가 없습니다.</h1>
      ) : (
        itemList.map((item) => (
          <div key={item.contentid} className="contentItem">
            <div>이름: {item.title}</div>
            <div>주소: {item.addr1}</div>
            <div>ContentID: {item.contentid}</div>
            <img
              src={`${item.firstimage}`}
              alt={
                item.firstimage
                  ? "대표 이미지"
                  : "'''''이미지 준비중입니다!!!!!!!!!!!!!''''''"
              }
              style={{ width: "200px" }}
            />
          </div>
        ))
      )}
      content
    </div>
  );
};

export default Current;
