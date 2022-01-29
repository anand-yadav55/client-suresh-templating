import React from 'react'

export function LiveDateTime() {
  let [dateTime, setDateTime] = React.useState()
  setInterval(() => {
    const dt = new Date()
    const date = dt.getDate() < 10 ? `0${dt.getDate()}` : dt.getDate()
    const month = dt.getMonth() < 10 ? `0${dt.getMonth()}` : dt.getMonth()
    const year = dt.getFullYear()
    const hour = dt.getHours() < 10 ? `0${dt.getHours()}` : dt.getHours()
    const minute =
      dt.getMinutes() < 10 ? `0${dt.getMinutes()}` : dt.getMinutes()
    const secound =
      dt.getSeconds() < 10 ? `0${dt.getSeconds()}` : dt.getSeconds()
    setDateTime(`${date}-${month}-${year} ${hour}:${minute}:${secound}`)
  }, 1000)
  return <>{dateTime}</>
}
