/**
 * Given a noun and a verb, chuck will return a clever poem.
 *
 * @param {string} noun a noun
 * @param {string} verb a verb
 * @return {string} a poem
 */
export function chuck(noun = 'wood', verb = 'chuck'): string {
  return `How much ${noun} would a ${noun}${verb} ${verb} if a ${noun}${verb} could ${verb} ${noun}?`;
}
