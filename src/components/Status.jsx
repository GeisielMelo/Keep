import React, { useState, useEffect } from 'react'
import _ from 'lodash'
import { pingList } from '../services/api'
import { Container } from '../styles/StyledStatus'

export const Status = () => {
  const [timestamp, setTimestamp] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      if (!timestamp) {
        const response = await pingList()
        const lastPing = _.maxBy(response.data, (objeto) => objeto.pingAt, 10)
        setTimestamp(lastPing.pingAt)
      }
    }
    fetchData()
  })

  function converterTimestampParaData(timestamp) {
    const date = new Date(timestamp * 1000)
    const format = {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZoneName: 'short',
    }

    return `Updated at: ${date.toLocaleString('en-US', format)}`
  }

  return (
    <Container
      data-online={!!timestamp}
      title={timestamp && converterTimestampParaData(timestamp)}
    />
  )
}
