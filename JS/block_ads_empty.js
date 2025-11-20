/*
  Quantumult X 屏蔽广告接口脚本
  功能：强制返回空广告数据
*/

const empty = {
    result: true,
    msg: "",
    data: null,
    operateCode: 0
};

$done({
    body: JSON.stringify(empty)
});
