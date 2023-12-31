import React from 'react'
import { CircleIcon } from '../../assets/icons'
import { styled } from '@mui/material/styles'
export default function TextTitle({ title }) {
  return (
    <Wrapper>
      <CircleIco />
      {title}
    </Wrapper>
  )
}

const CircleIco = styled(CircleIcon)(() => ({
  marginRight: '1rem',
  alignSelf: 'start',
  padding: '.5rem',
}))

const Wrapper = styled('h3')(() => ({
  transition: ' background .3s ',
  background: 'var(--bg-border-light)',
  margin: '2rem 0',
  padding: '2rem 1.5rem ',
  display: 'flex',
  alignItems: 'center',
  textAlign: 'start',
  color: 'var(--text-700)',
}))
