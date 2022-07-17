import React from 'react'
import {rest} from 'msw'
import {setupServer} from 'msw/node'
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import apis from '../api/apis';
import { getUsers } from './data'

const server = setupServer(
  rest.get('/users', (req, res, ctx) => {
    return res(ctx.json(getUsers()))
  }),
)

