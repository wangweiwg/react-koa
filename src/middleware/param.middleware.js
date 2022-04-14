module.exports = () => {
    return async (ctx, next) => {
        if (ctx.request.method === 'POST') {
            ctx.data = ctx.request.body;
        } else {
            ctx.data = ctx.query;
        }
        if (next) {
            await next();
        }
    }
}