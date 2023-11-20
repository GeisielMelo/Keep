import React from 'react'

export const MenuButton = ({ onClick, isTextVisible, text, icon = 'noIcon' }) => {
  return (
    <button onClick={onClick}>
      {isTextVisible ? (
        <span>
          {icon}
          <p>{text}</p>
        </span>
      ) : (
        <span>
          {icon}
          <p></p>
        </span>
      )}
    </button>
  )
}
