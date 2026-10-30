/**
 * TRUSTED copy checked out from the default branch.
 * If the attacker artifact overwrites this file, the log line below disappears.
 */
export default async function ({ github, context, output }) {
	console.log('TRUSTED-MODULE-EXECUTED', JSON.stringify(output));
}
