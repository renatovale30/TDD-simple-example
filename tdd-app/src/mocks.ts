import { rest } from 'msw'

export const getCount = rest.get('*/getCount', (req, res, ctx) => {
    return res(ctx.json('100'));
});