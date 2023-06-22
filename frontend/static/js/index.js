// view를 렌더링하는 함수
// async 사용하는 이유 : view 렌더링 전 서버에 비동기적 요청을 보내야 할 수 있어서
const router = async () => {
    const routes = [
        { path: "/", view: () => console.log("Viewing Dashboard") },
        { path: "/posts", view: () => console.log("Viewing Posts") },
        { path: "/settings", view: () => console.log("Viewing Settings") }
    ];

    // Test each route for potential match
    // map()으로 순회하며 객체를 리턴받기
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        };
    })

    console.log(potentialMatches);
};

document.addEventListener("DOMContentLoaded", () => {
    router();
})