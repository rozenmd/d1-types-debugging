export interface Env {
  DB: D1Database;
}

export default {
  async fetch(
    request: Request,
    env: Env,
    ctx: ExecutionContext
  ): Promise<Response> {
    const preparedStatement = env.DB.prepare(
      "SELECT * FROM users WHERE id > ?"
    ).bind(1);
    // D1's client API has the following methods:
    // all
    const all = await preparedStatement.all();
    // first
    const first = await preparedStatement.first();
    // raw
    const raw = await preparedStatement.raw();
    // run
    const run = await preparedStatement.run();

    return new Response(JSON.stringify({ all, first, raw, run }, null, 2));
  },
};
