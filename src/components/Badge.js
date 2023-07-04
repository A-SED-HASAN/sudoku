import React from 'react'
import { styled } from '@mui/material/styles'
import { useGlobalContext } from '../context'

const Badge = ({ content, isHint }) => {
  const { isNoteON } = useGlobalContext()
  return (
    <Wrapper isHint={isHint} isNoteON={isNoteON}>
      {content}
    </Wrapper>
  )
}

export default Badge

const Wrapper = styled('span')(({ isHint, isNoteON }) => ({
  fontWeight: '700',
  textTransform: 'uppercase',
  background: !isNoteON && !isHint ? 'var(--gray-300)' : 'var(--blue-500)',
  color: 'var(--clr-white)',
  position: 'absolute',
  top: '0',
  right: '0',
  transform: 'translate(30%,-25%)',
  fontSize: isHint ? '.7rem' : '.6rem',
  width: !isHint && '28px',
  padding: isHint ? '.4rem .56rem' : '.3rem 0',
  borderRadius: isHint ? '50%' : '50rem',
  display: 'grid',
  placeItems: 'center',
}))
