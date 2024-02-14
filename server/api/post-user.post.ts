/**
 * 仮POST API
 */
export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  console.log(body);
  if (Math.random() * 10 > 9) {
    return {
      result: false,
    }
  }
  return {
    result: true,
  }
})