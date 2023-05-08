/**
 * ex14_message.js
 * 이 파일 안에서 하나의 기본 내보내기만 할 수 있다.
 * 함수를 내보내기(export)해서 사용을 했다.
 */

const message =  function() {
	const name = "홍길동";
	const age = 30;
	return name + "/" + age;
};
/* 람다식으로 표현하면 이렇게 된다.
const message =  () =>{
	const name = "홍길동";
	const age = 30;
	return name + "/" + age;
};
*/

export default message;