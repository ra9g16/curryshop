import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}
Meta.defaultProps = {
  title: 'ユアカレー',
  description: '世界一おいしいチキンカレーをお届けします',
  keyword: 'Curry, カレー, チキンカレー',
}

export default Meta
