const Input = require('../userInput'); 

async function login(){
  console.log('로그인페이지입니다.');
  console.log('1.전화번호입력 2.뒤로가기 3.종료');
  let select = await Input.getUserInput();
  if (select === '1') {
    console.log('전화번호를 입력해주세요');
    let id = await Input.getUserInput();
    let exam_id=exam_id(id);// 아이디 검사함수 ---
    while(exam_id === 2 ){
      console.log('없는 번호 입니다. 다시입력해주세요')
      id = await Input.getUserInput();
      exam_id=exam_id(id);
    }
    console.log(`로그인되었습니다. ${id}님 안녕하세요`)
  }else if(select === '2'){
    return;
  }else if(select === '3'){
    process.exit();
  }
}
module.exports = {login};