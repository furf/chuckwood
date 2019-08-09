/**
 * Given a noun and a verb, chuck will return a clever poem.
 *
 * @param {string} noun a noun
 * @param {string} verb a verb
 * @return {string} a poem
 */
export function chuck(noun: string, verb: string): string {
  return `How much ${noun} could a ${noun}${verb} ${verb} if a ${noun}${verb} could ${verb} ${noun}?`;
}
