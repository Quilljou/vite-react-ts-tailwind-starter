import React from 'react'
import { Header } from '../header'

export const getSimpleLayout = (page: React.ReactElement) => (
  <div className="grid h-full grid-rows-[min-content_1fr_min-content] justify-items-stretch">
    <Header />
    {page}
  </div>
)

export const getNoneLayout = (page: React.ReactElement) => page

export const getDefaultLayout = (page: React.ReactElement) => {
  return (
    <div className="h-screen">
      <Header />
      <div className="h-full">{page}</div>
    </div>
  )
}
