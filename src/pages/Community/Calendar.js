// import React, { useState } from "react";
// import Calendar from "react-calendar";
// import "react-calendar/dist/Calendar.css"; // css import
// import moment from "moment";

// const CommunityCalendar = () => {
//   const [value, onChange] = useState(new Date());
//   const [mark, setMark] = useState([]);

//   return (
//     <div>
//       <div>
//         <Calendar
//           onChange={onChange} // useState로 포커스 변경 시 현재 날짜 받아오기
//           formatDay={(locale, date) => moment(date).format("DD")} // 날'일' 제외하고 숫자만 보이도록 설정
//           value={value}
//           minDetail="month" // 상단 네비게이션에서 '월' 단위만 보이게 설정
//           maxDetail="month" // 상단 네비게이션에서 '월' 단위만 보이게 설정
//           navigationLabel={null}
//           showNeighboringMonth={false} //  이전, 이후 달의 날짜는 보이지 않도록 설정
//           className="mx-auto w-full text-sm border-b"
//           tileContent={({ date, view }) => {
//             // 날짜 타일에 컨텐츠 추가하기 (html 태그)
//             // 추가할 html 태그를 변수 초기화
//             let html = [];
//             // 현재 날짜가 post 작성한 날짜 배열(mark)에 있다면, dot div 추가
//             if (mark.find((x) => x === moment(date).format("YYYY-MM-DD"))) {
//               html.push(<div className="dot"></div>);
//             }
//             // 다른 조건을 주어서 html.push 에 추가적인 html 태그를 적용할 수 있음.
//             return (
//               <>
//                 <div className="flex justify-center items-center absoluteDiv">
//                   {html}
//                 </div>
//               </>
//             );
//           }}
//         />
//       </div>
//     </div>
//   );
// };

// export default CommunityCalendar;

import { Badge, Calendar, ConfigProvider } from "antd";
const getListData = (value) => {
  let listData;
  switch (value.date()) {
    case 8:
      listData = [
        {
          type: "warning",
          content: "This is warning event.",
        },
        {
          type: "success",
          content: "This is usual event.",
        },
      ];
      break;
    case 10:
      listData = [
        {
          type: "warning",
          content: "This is warning event.",
        },
        {
          type: "success",
          content: "This is usual event.",
        },
        {
          type: "error",
          content: "This is error event.",
        },
      ];
      break;
    case 15:
      listData = [
        {
          type: "warning",
          content: "This is warning event",
        },
        {
          type: "success",
          content: "This is very long usual event。。....",
        },
        {
          type: "error",
          content: "This is error event 1.",
        },
        {
          type: "error",
          content: "This is error event 2.",
        },
        {
          type: "error",
          content: "This is error event 3.",
        },
        {
          type: "error",
          content: "This is error event 4.",
        },
      ];
      break;
    default:
  }
  return listData || [];
};
const getMonthData = (value) => {
  if (value.month() === 8) {
    return 1394;
  }
};
const CommunityCalendar = () => {
  const monthCellRender = (value) => {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  };
  const dateCellRender = (value) => {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map((item) => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  };
  const cellRender = (current, info) => {
    if (info.type === "date") return dateCellRender(current);
    if (info.type === "month") return monthCellRender(current);
    return info.originNode;
  };
  return (
    <ConfigProvider
      theme={{
        token: {
          borderRadius: 8,
        },
      }}
    >
      <Calendar cellRender={cellRender} />
    </ConfigProvider>
  );
};
export default CommunityCalendar;

// import React from "react";

// const Calendar = () => {
//   return <div>커뮤니티 페이지</div>;
// };

// export default Calendar;
