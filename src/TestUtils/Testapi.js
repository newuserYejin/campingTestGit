import axios from 'axios'
// const TEST_API_KEY_EN = `HYuPePscXWsXZj8LTa900BZgb/66OeqfpbjmL5mjoYqMmd2mZ55p1glzPRGOwRsWXISJeiRhKygjhqMiEIPQLw==`
const TEST_API_KEY_EN = process.env.REACT_APP_API_KEY_DN

console.log("TEST_API_KEY_EN:", TEST_API_KEY_EN)

const testAPI = axios.create({
    baseURL: 'http://apis.data.go.kr/B551011',
    // timeout: 1000,
    params: {
        MobileOS: "WIN",
        MobileApp: "so",
        radius: 1000,
        _type: "json",
        serviceKey: `${TEST_API_KEY_EN}`
        // serviceKey: `HYuPePscXWsXZj8LTa900BZgb%2F66OeqfpbjmL5mjoYqMmd2mZ55p1glzPRGOwRsWXISJeiRhKygjhqMiEIPQLw%3D%3D`
    },
    headers: {
    }
});

export default testAPI