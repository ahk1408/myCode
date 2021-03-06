// 쇼핑몰 배너 JS //
// 로드구역 ////////////
window.addEventListener("load", () => {

    console.log("로딩완료!");

    /************************************ 
        [ 슬라이드 이동 기능정의 ]
        1. 이벤트 종류: 클릭
        2. 이벤트 대상: 이동버튼(.abtn)
        3. 변경 대상: 슬라이드 박스(#slide)
        4. 기능흐름: 
        (1) 오른쪽버튼 클릭시 다음슬라이드가
        나타나도록 슬라이드박스의 left값을
        -100% 단위의 배수로 이동시킨다!
        -> 이동시 한계값은 마지막 슬라이드
        이동 배수인 4, 즉 -400%임
        (2) 왼쪽버튼 클릭시 이전슬라이드가
        나타나도록 left값은 -100% 단위
        배수중 이전 배수가 되도록 변경함
        -> 이동시 한계값은 첫번째 슬라이드의
        위치값인 0을 기준한다
        (3) 처음이전과 끝 다음 슬라이드는
        처음과 마지막 한계값에서 연결하여
        구현한다.(처음은 마지막으로 마지막은
        처음으로 돌아가게 함)

        5. 추가기능: 슬라이드 위치표시 블릿
        - 블릿대상 : .indic li
        - 변경내용 : 슬라이드 순번과 같은 순번의
        li에 클래스 "on"주기(나머진 빼기-초기화)

    ************************************/

}); ///////////// load //////////////////////