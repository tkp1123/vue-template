const Mock = require('mockjs')

const List = []
const count = 200

for (let i = 0; i < count; i++) {
    List.push(Mock.mock({
        id: '@increment',
        name: '@first',
        date: '@date("yyyy-MM-dd")',
        email: '@email()',
        phone: '/\d{8}/',
        address: '@city(true)',
        state: '@boolean'
    }))
}
module.exports = [
    Mock.mock('http://www.bai.com', 'post', List)
]