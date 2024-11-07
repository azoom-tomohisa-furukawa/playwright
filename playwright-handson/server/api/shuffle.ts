export default defineEventHandler(async (event) => {
    const { members } = await readBody(event);
    const result = members.sort(() => Math.random() - 0.5);
    event.node.res.setHeader('Content-Type', 'application/json');
    event.node.res.statusCode = 200;
    event.node.res.end(JSON.stringify({ members: result }));
});