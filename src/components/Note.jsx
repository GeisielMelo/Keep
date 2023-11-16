import React, { useState } from 'react'
import SaveIcon from '@mui/icons-material/Save'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import EditIcon from '@mui/icons-material/Edit'
import LabelIcon from '@mui/icons-material/Label'
import ArchiveIcon from '@mui/icons-material/Archive'
import { Container } from '../styles/StyledNote'

export const Note = () => {
  const [editorMode, setEditorMode] = useState(false)

  return (
    <Container>
      {editorMode ? (
        <>
          <input type='text' placeholder='Teste' />
          <textarea name='' id='' cols='30' rows='10'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum omnis quaerat voluptate, culpa iste sed totam
            labore quas asperiores nobis vitae est magnam vel dolorum modi nesciunt natus cumque. Nemo!
          </textarea>
          <ul>
            <li>Label</li>
            <li>Label</li>
            <li>Label</li>
            <li>Label</li>
          </ul>
          <div className='buttons'>
            <button disabled={true}>
              <DeleteForeverIcon style={{ fontSize: '18px' }} />
            </button>
            <button disabled={true}>
              <LabelIcon style={{ fontSize: '18px' }} />
            </button>
            <button disabled={true}>
              <ArchiveIcon style={{ fontSize: '18px' }} />
            </button>
            <button>
              <SaveIcon style={{ fontSize: '18px' }} />
            </button>
          </div>
        </>
      ) : (
        <>
          <h1>Teste</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum omnis quaerat voluptate, culpa iste sed totam
            labore quas asperiores nobis vitae est magnam vel dolorum modi nesciunt natus cumque. Nemo!
          </p>
          <ul>
            <li>Label</li>
            <li>Label</li>
            <li>Label</li>
            <li>Label</li>
          </ul>
          <div className='buttons'>
            <button disabled={false}>
              <DeleteForeverIcon style={{ fontSize: '18px' }} />
            </button>
            <button disabled={false}>
              <LabelIcon style={{ fontSize: '18px' }} />
            </button>
            <button disabled={false}>
              <ArchiveIcon style={{ fontSize: '18px' }} />
            </button>
            <button disabled={false}>
              <EditIcon style={{ fontSize: '18px' }} />
            </button>
          </div>
        </>
      )}
    </Container>
  )
}
