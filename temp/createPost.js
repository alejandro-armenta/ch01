const result = await fetch('http://localhost:3001/api/v1/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2YTVlZDg3MDQxMWUyNTRmZDQzNzgyMGIiLCJpYXQiOjE3ODQ2ODcyNDEsImV4cCI6MTc4NDc3MzY0MX0.jrpUM-7nA4aTQDUSVofTqAjjVzBoMZqB9F-YNYD5ojE',
  },
  body: JSON.stringify({ title: 'Test Post' }),
})

console.log(await result.json())

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2YTVlZDg3MDQxMWUyNTRmZDQzNzgyMGIiLCJpYXQiOjE3ODQ2ODcyNDEsImV4cCI6MTc4NDc3MzY0MX0.jrpUM-7nA4aTQDUSVofTqAjjVzBoMZqB9F-YNYD5ojE'
