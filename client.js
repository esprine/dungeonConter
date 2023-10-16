const express = require('express');
const axios = require('axios');

// CORS 미들웨어 설정
app.use((req, res, next) => {
res.header('Access-Control-Allow-Origin', '*'); // 모든 도메인을 허용하려면 '*'
res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

// 클라이언트 요청을 외부 API로 중계
app.get('https://api.neople.co.kr/df/servers?apikey=WdbtaIN6nENV0XX3UmjcpVmJYZUatVK3', async (req, res) => {
try {
    const response = await get('https://api.neople.co.kr'); // 외부 API의 URL로 변경
    res.json(response.data);
} catch (error) {
    res.status(500).json({ error: 'Failed to fetch data from the API' });
}
});

app.listen(port, () => {
console.log(`Proxy server is running on port ${port}`);
});

// 서버 선택 요소
const serverSelect = document.getElementById('server');

// 서버 선택 요소에 옵션을 추가하는 함수
function populateServerOptions(data) {
    // 기존 옵션을 모두 삭제
    serverSelect.innerHTML = '';

    // API에서 받은 데이터를 기반으로 옵션을 추가
    data.forEach(server => {
        const option = document.createElement('option');
        option.value = server.serverId; // 서버 ID 또는 다른 식별자 사용
        option.textContent = server.serverName; // 서버 이름 또는 다른 표시 텍스트 사용
        serverSelect.appendChild(option);
    });
}

// 페이지 로드 시 서버 목록을 가져옵니다.
fetchServerList();
